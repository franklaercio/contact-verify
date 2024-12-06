package br.ufrn.backend.domain.repositories

import br.ufrn.backend.domain.Contact
import br.ufrn.backend.domain.enums.ContactType
import reactor.core.publisher.Mono

interface ContactRepository {
    fun save(identifier: String, type: ContactType): Mono<Contact>
}