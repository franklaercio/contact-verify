package br.ufrn.backend.shared.response

data class ContactResponse(
    val identifier: String,
    val type: String,
    val messageCount: Int,
    val callCount: Int
)