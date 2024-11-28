package br.ufrn.backend.shared.mappers

import br.ufrn.backend.domain.Contact
import br.ufrn.backend.infrastructure.persistence.entities.ContactEntity
import br.ufrn.backend.shared.response.ContactResponse

fun Contact.toResponse(): ContactResponse {
    return ContactResponse(
        id = this.id,
        identifier = this.identifier,
        type = this.type.name,
        messageCount = this.messageCount,
        callCount = this.callCount
    )
}

fun ContactEntity.toDomain(): Contact {
    return Contact(
        id = this.id,
        identifier = this.identifier,
        type = this.type,
        messageCount = this.messageCount,
        callCount = this.callCount
    )
}

fun Contact.toEntity(): ContactEntity {
    return ContactEntity(
        id = this.id,
        identifier = this.identifier,
        type = this.type,
        messageCount = this.messageCount,
        callCount = this.callCount
    )
}