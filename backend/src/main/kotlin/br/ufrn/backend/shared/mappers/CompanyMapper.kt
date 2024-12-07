package br.ufrn.backend.shared.mappers

import br.ufrn.backend.domain.Company
import br.ufrn.backend.infrastructure.persistence.companies.CompanyEntity
import br.ufrn.backend.shared.response.CompanyResponse

fun Company.toEntity() = Company(
    name = name,
    number = number,
    cnpj = cnpj,
    email = email,
)

fun CompanyEntity.toCompany() = Company(
    name = name,
    number = number,
    cnpj = cnpj,
    email = email,
)

fun Company.toResponse() = CompanyResponse(
    name = name,
    cnpj = cnpj,
    number = number,
    email = email
)