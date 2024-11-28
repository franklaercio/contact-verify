package br.ufrn.backend.infrastructure.controllers

import br.ufrn.backend.application.usecases.AddContactUseCase
import br.ufrn.backend.domain.enums.ContactType
import br.ufrn.backend.shared.response.ContactResponse
import br.ufrn.backend.shared.mappers.toResponse
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import reactor.core.publisher.Mono

@RestController
@RequestMapping("/api/contacts")
class ContactController(private val addContactUseCase: AddContactUseCase) {

    @PostMapping
    fun addContact(
        @RequestParam identifier: String,
        @RequestParam type: ContactType
    ): Mono<ResponseEntity<ContactResponse>> {
        return addContactUseCase.execute(identifier, type)
            .map { contact -> ResponseEntity.ok(contact.toResponse()) }
    }
}
