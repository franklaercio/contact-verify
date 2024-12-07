package br.ufrn.backend.shared.response

data class SecurityContactResponse(
    val name: String? = null,
    val identifier: String,
    val status: String
)
