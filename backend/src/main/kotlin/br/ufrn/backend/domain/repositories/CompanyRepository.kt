package br.ufrn.backend.domain.repositories

import br.ufrn.backend.domain.Company
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono

interface CompanyRepository {
    fun findByIdentifier(identifier: String): Mono<Company>

    fun getAll(): Flux<Company>
}