package br.ufrn.backend.infrastructure.persistence.companies

import org.springframework.data.annotation.Id
import org.springframework.data.relational.core.mapping.Table
import java.util.*

@Table("companies")
data class CompanyEntity(
    @Id val id: UUID? = null,
    val name: String,
    val cnpj: String,
    val number: String,
    val email: String
)
