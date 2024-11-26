package br.ufrn.backend.domain

import br.ufrn.backend.domain.enums.ContactType

data class Contact(
    val id: Long? = null,
    val identifier: String,
    val type: ContactType,
    var messageCount: Int = 0,
    var callCount: Int = 0
)