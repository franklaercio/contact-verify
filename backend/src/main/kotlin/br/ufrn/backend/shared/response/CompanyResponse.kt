package br.ufrn.backend.shared.response

data class CompanyResponse(
    val name: String,
    val cnpj: String,
    val number: String,
    val email: String,
)