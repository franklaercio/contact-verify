package br.ufrn.backend.shared.dtos

data class ContactResponse(
    val id: Long?,
    val identifier: String,
    val type: String,
    val messageCount: Int,
    val callCount: Int
)