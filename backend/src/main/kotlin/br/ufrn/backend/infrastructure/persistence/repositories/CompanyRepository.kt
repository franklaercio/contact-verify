package br.ufrn.backend.infrastructure.persistence.repositories

import br.ufrn.backend.infrastructure.persistence.entities.CompanyEntity
import org.springframework.data.repository.reactive.ReactiveCrudRepository
import reactor.core.publisher.Mono

interface CompanyRepository : ReactiveCrudRepository<CompanyEntity, Long> {
    fun findByNumber(number: String): Mono<CompanyEntity>

    fun findByEmail(email: String): Mono<CompanyEntity>
}
