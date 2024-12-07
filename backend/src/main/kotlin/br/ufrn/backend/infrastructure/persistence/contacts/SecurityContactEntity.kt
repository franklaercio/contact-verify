package br.ufrn.backend.infrastructure.persistence.contacts

data class SecurityContactEntity (
    val name: String? = null,
    val identifier: String,
    val status: String
)