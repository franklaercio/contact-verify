package br.ufrn.backend.application.usecases

import br.ufrn.backend.domain.Contact
import br.ufrn.backend.domain.SecurityContact
import br.ufrn.backend.domain.repositories.ContactRepository
import br.ufrn.backend.shared.utils.ContactUtils
import org.springframework.stereotype.Service
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono

@Service
class ContactUseCase(private val contactRepository: ContactRepository) {

    fun create(identifier: String): Mono<Contact> {
        return Mono.just(identifier)
            .filter { ContactUtils.isValid(it) }
            .switchIfEmpty(Mono.error(IllegalArgumentException("Invalid $identifier")))
            .map { ContactUtils.retrieve(it) }
            .flatMap { type -> contactRepository.save(identifier, type) }
    }

    fun getAllContactsBySecurity(securityType: String): Flux<SecurityContact> =
        contactRepository.getAllContactsBySecurity(securityType)
}