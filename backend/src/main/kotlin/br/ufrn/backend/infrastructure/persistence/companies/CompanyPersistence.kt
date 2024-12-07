package br.ufrn.backend.infrastructure.persistence.companies

import br.ufrn.backend.domain.Company
import br.ufrn.backend.domain.repositories.CompanyRepository
import br.ufrn.backend.shared.mappers.toCompany
import br.ufrn.backend.shared.utils.ContactUtils
import org.springframework.stereotype.Service
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono

@Service
class CompanyPersistence(private val companyReactiveRepository: CompanyReactiveRepository) : CompanyRepository {
    override fun findByIdentifier(identifier: String): Mono<Company> {
        val company = when {
            ContactUtils.isEmail(identifier) -> companyReactiveRepository.findByEmail(identifier)
            ContactUtils.isPhone(identifier) -> companyReactiveRepository.findByNumber(identifier)
            else -> Mono.empty()
        }

        return company.map { it.toCompany() }
    }

    override fun getAll(): Flux<Company> =
        companyReactiveRepository.findAllDistinct()
            .map { it.toCompany() }
}