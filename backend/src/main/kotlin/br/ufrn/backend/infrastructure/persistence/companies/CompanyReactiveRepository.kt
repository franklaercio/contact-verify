package br.ufrn.backend.infrastructure.persistence.companies

import org.springframework.data.repository.reactive.ReactiveCrudRepository
import reactor.core.publisher.Mono

interface CompanyReactiveRepository : ReactiveCrudRepository<CompanyEntity, Long> {
    fun findByNumber(number: String): Mono<CompanyEntity>

    fun findByEmail(email: String): Mono<CompanyEntity>
}
