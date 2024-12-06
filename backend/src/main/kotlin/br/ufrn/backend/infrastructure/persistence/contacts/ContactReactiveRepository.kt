package br.ufrn.backend.infrastructure.persistence.contacts

import org.springframework.data.repository.reactive.ReactiveCrudRepository
import reactor.core.publisher.Mono

interface ContactReactiveRepository : ReactiveCrudRepository<ContactEntity, Long> {
    fun findByIdentifier(identifier: String): Mono<ContactEntity>
}
