package br.ufrn.backend.infrastructure.controllers

import br.ufrn.backend.application.usecases.CompanyUseCase
import br.ufrn.backend.shared.mappers.toResponse
import br.ufrn.backend.shared.response.CompanyResponse
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import reactor.core.publisher.Mono

@RestController
@RequestMapping("/api/companies")
class CompanyController(private val companyUseCase: CompanyUseCase) {

    @GetMapping("/{identifier}")
    fun getCompanyByIdentifier(@PathVariable identifier: String): Mono<CompanyResponse> {
        return companyUseCase.findByIdentifier(identifier).map { it.toResponse() }
    }
}