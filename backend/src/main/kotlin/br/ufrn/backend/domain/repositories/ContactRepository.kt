package br.ufrn.backend.domain.repositories

import br.ufrn.backend.domain.Contact
import br.ufrn.backend.domain.SecurityContact
import br.ufrn.backend.domain.enums.ContactType
import br.ufrn.backend.shared.response.SecurityContactResponse
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono

interface ContactRepository {
    fun save(identifier: String, type: ContactType): Mono<Contact>

    fun getAllContactsBySecurity(securityType: String): Flux<SecurityContact>
}