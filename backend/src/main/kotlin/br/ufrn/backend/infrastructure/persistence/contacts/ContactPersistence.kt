package br.ufrn.backend.infrastructure.persistence.contacts

import br.ufrn.backend.domain.Contact
import br.ufrn.backend.domain.SecurityContact
import br.ufrn.backend.domain.enums.ContactType
import br.ufrn.backend.domain.repositories.ContactRepository
import br.ufrn.backend.shared.mappers.toDomain
import org.springframework.stereotype.Service
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono

@Service
class ContactPersistence(val contactReactiveRepository: ContactReactiveRepository) : ContactRepository {
    override fun save(identifier: String, type: ContactType): Mono<Contact> {
        return contactReactiveRepository.findByIdentifier(identifier)
            .flatMap { existingContact ->
                val updatedContact = when (type) {
                    ContactType.EMAIL -> existingContact.copy(messageCount = existingContact.messageCount + 1)
                    ContactType.PHONE -> existingContact.copy(callCount = existingContact.callCount + 1)
                }
                contactReactiveRepository.save(updatedContact)
            }
            .switchIfEmpty(
                contactReactiveRepository.save(ContactEntity(identifier = identifier, type = type))
            )
            .map { contact -> contact.toDomain() }
    }

    override fun getAllContactsBySecurity(securityType: String): Flux<SecurityContact> {
        return contactReactiveRepository.findAllSafeAndUnsafe(securityType)
            .map { it.toDomain() }
    }
}