package br.ufrn.backend.infrastructure.persistence.repositories

import br.ufrn.backend.infrastructure.persistence.entities.ContactEntity
import org.springframework.data.repository.reactive.ReactiveCrudRepository
import reactor.core.publisher.Mono

interface ContactRepository : ReactiveCrudRepository<ContactEntity, Long> {
    fun findByIdentifier(identifier: String): Mono<ContactEntity>
}
