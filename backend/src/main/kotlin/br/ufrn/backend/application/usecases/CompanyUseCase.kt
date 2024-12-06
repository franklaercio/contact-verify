package br.ufrn.backend.application.usecases

import br.ufrn.backend.application.exceptions.CompanyNotFoundException
import br.ufrn.backend.domain.Company
import br.ufrn.backend.domain.repositories.CompanyRepository
import br.ufrn.backend.shared.utils.ContactUtils
import org.springframework.stereotype.Service
import reactor.core.publisher.Mono

@Service
class CompanyUseCase(private val repository: CompanyRepository) {

    fun findByIdentifier(identifier: String): Mono<Company> {

        if (!ContactUtils.isValid(identifier)) throw CompanyNotFoundException(identifier)

        return repository.findByIdentifier(identifier)
            .switchIfEmpty(Mono.error(CompanyNotFoundException(identifier)))
    }
}