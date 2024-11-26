package br.ufrn.backend.application.usecases

import br.ufrn.backend.domain.Contact
import br.ufrn.backend.domain.enums.ContactType
import br.ufrn.backend.infrastructure.persistence.entities.ContactEntity
import br.ufrn.backend.infrastructure.persistence.repositories.ContactRepository
import br.ufrn.backend.shared.mappers.toDomain
import org.springframework.stereotype.Service
import reactor.core.publisher.Mono

@Service
class AddContactUseCase(private val contactRepository: ContactRepository) {

    fun execute(identifier: String, type: ContactType): Mono<Contact> {
        if (!isValid(identifier, type)) {
            return Mono.error(IllegalArgumentException("Invalid ${type.name.lowercase()} format"))
        }

        return contactRepository.findByIdentifier(identifier)
            .flatMap { existingContact ->
                val updatedContact = when (type) {
                    ContactType.EMAIL -> existingContact.copy(messageCount = existingContact.messageCount + 1)
                    ContactType.PHONE -> existingContact.copy(callCount = existingContact.callCount + 1)
                }
                contactRepository.save(updatedContact)
            }
            .switchIfEmpty(
                contactRepository.save(ContactEntity(identifier = identifier, type = type))
            )
            .map { contact -> contact.toDomain() }
    }

    private fun isValid(identifier: String, type: ContactType): Boolean {
        return when (type) {
            ContactType.EMAIL -> identifier.matches(Regex("^[\\w.-]+@[\\w.-]+\\.\\w+$"))
            ContactType.PHONE -> identifier.matches(Regex("^\\+?\\d+$"))
        }
    }
}