package br.ufrn.backend.infrastructure.persistence.companies

import org.springframework.data.annotation.Id
import org.springframework.data.relational.core.mapping.Table

@Table("companies")
data class CompanyEntity(
    @Id val id: Long? = null,
    val name: String,
    val cnpj: String,
    val number: String,
    val email: String
)
