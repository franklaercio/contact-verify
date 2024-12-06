package br.ufrn.backend.shared.mappers

import br.ufrn.backend.domain.Contact
import br.ufrn.backend.infrastructure.persistence.contacts.ContactEntity
import br.ufrn.backend.shared.response.ContactResponse

fun Contact.toResponse(): ContactResponse {
    return ContactResponse(
        identifier = this.identifier,
        type = this.type.name,
        messageCount = this.messageCount,
        callCount = this.callCount
    )
}

fun ContactEntity.toDomain(): Contact {
    return Contact(
        identifier = this.identifier,
        type = this.type,
        messageCount = this.messageCount,
        callCount = this.callCount
    )
}

fun Contact.toEntity(): ContactEntity {
    return ContactEntity(
        identifier = this.identifier,
        type = this.type,
        messageCount = this.messageCount,
        callCount = this.callCount
    )
}