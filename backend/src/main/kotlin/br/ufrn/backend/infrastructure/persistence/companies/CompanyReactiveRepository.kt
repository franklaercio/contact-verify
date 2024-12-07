package br.ufrn.backend.infrastructure.persistence.companies

import org.springframework.data.r2dbc.repository.Query
import org.springframework.data.repository.reactive.ReactiveCrudRepository
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono
import java.util.UUID

interface CompanyReactiveRepository : ReactiveCrudRepository<CompanyEntity, UUID> {
    fun findByNumber(number: String): Mono<CompanyEntity>

    @Query("SELECT * FROM companies c WHERE c.email = :email LIMIT 1")
    fun findByEmail(email: String): Mono<CompanyEntity>

    @Query("SELECT DISTINCT ON (name) id, name, cnpj, number, email FROM companies ORDER BY name")
    fun findAllDistinct(): Flux<CompanyEntity>
}
