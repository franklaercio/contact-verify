package br.ufrn.backend.application.usecases

import br.ufrn.backend.domain.Contact
import br.ufrn.backend.domain.enums.ContactType
import br.ufrn.backend.domain.repositories.ContactRepository
import br.ufrn.backend.shared.utils.ContactUtils
import org.springframework.stereotype.Service
import reactor.core.publisher.Mono

@Service
class ContactUseCase(private val contactRepository: ContactRepository) {

    fun create(identifier: String, type: ContactType): Mono<Contact> {
        if (!ContactUtils.isValid(identifier, type)) {
            return Mono.error(IllegalArgumentException("Invalid ${type.name.lowercase()} format"))
        }

        return contactRepository.save(identifier, type);
    }
}