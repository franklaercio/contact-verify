package br.ufrn.backend.application.usecases

import br.ufrn.backend.application.exceptions.CompanyNotFoundException
import br.ufrn.backend.domain.Company
import br.ufrn.backend.infrastructure.persistence.entities.CompanyEntity
import br.ufrn.backend.infrastructure.persistence.repositories.CompanyRepository
import br.ufrn.backend.shared.mappers.toCompany
import br.ufrn.backend.shared.utils.ContactUtils
import org.springframework.stereotype.Service
import reactor.core.publisher.Mono

@Service
class CompanyUseCase(private val repository: CompanyRepository) {

    fun findByIdentifier(identifier: String): Mono<Company> {

        if (!ContactUtils.isValid(identifier)) throw CompanyNotFoundException(identifier)

        return retrieveCompany(identifier)
            .map { it.toCompany() }
            .switchIfEmpty(Mono.error(CompanyNotFoundException(identifier)))
    }

    private fun retrieveCompany(identifier: String): Mono<CompanyEntity> =
        when {
            ContactUtils.isEmail(identifier) -> repository.findByEmail(identifier)
            ContactUtils.isPhone(identifier) -> repository.findByNumber(identifier)
            else -> Mono.empty()
        }
}