package br.ufrn.backend.shared.mappers

import br.ufrn.backend.domain.SecurityContact
import br.ufrn.backend.infrastructure.persistence.contacts.SecurityContactEntity
import br.ufrn.backend.shared.response.SecurityContactResponse

fun SecurityContactEntity.toDomain() = SecurityContact(
    name = this.name,
    identifier = this.identifier,
    status = this.status
)

fun SecurityContact.toResponse() = SecurityContactResponse(
    name = this.name,
    identifier = this.identifier,
    status = this.status
)