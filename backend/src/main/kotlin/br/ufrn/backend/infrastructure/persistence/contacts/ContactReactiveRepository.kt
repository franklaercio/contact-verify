package br.ufrn.backend.infrastructure.persistence.contacts

import org.springframework.data.r2dbc.repository.Query
import org.springframework.data.repository.reactive.ReactiveCrudRepository
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono
import java.util.UUID

interface ContactReactiveRepository : ReactiveCrudRepository<ContactEntity, UUID> {
    fun findByIdentifier(identifier: String): Mono<ContactEntity>

    @Query("""
        SELECT identifier, status, name, message_count, call_count
        FROM (SELECT DISTINCT c.identifier,
                              CASE
                                  WHEN co.number = c.identifier OR co.email = c.identifier THEN 'SAFE'
                                  ELSE 'UNSAFE'
                                  END AS status,
                              co.name,
                              c.message_count,
                              c.call_count
              FROM contacts c
                       LEFT JOIN companies co
                                 ON co.number = c.identifier OR co.email = c.identifier) as security
        WHERE security.status = :securityType
        ORDER BY message_count DESC
               , call_count DESC
        LIMIT 5
    """)
    fun findAllSafeAndUnsafe(securityType: String): Flux<SecurityContactEntity>
}
