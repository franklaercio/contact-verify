package br.ufrn.backend.infrastructure.controllers

import br.ufrn.backend.application.usecases.ContactUseCase
import br.ufrn.backend.domain.enums.ContactType
import br.ufrn.backend.shared.mappers.toResponse
import br.ufrn.backend.shared.response.ContactResponse
import br.ufrn.backend.shared.response.SecurityContactResponse
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono

@RestController
@RequestMapping("/api/contacts")
class ContactController(private val contactUseCase: ContactUseCase) {

    @PostMapping
    fun addContact(
        @RequestParam identifier: String,
    ): Mono<ResponseEntity<ContactResponse>> {
        return contactUseCase.create(identifier)
            .map { contact -> ResponseEntity.ok(contact.toResponse()) }
            .log()
    }

    @GetMapping("/security")
    fun getAllContactsBySecurity(@RequestParam securityType: String): Flux<SecurityContactResponse> {
        return contactUseCase.getAllContactsBySecurity(securityType)
            .map { it.toResponse() }
            .log()
    }
}
