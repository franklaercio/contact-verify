package br.ufrn.backend.application.exceptions

import org.springframework.http.HttpStatus
import org.springframework.web.server.ResponseStatusException

class CompanyNotFoundException(number: String) : ResponseStatusException(
    HttpStatus.NOT_FOUND,
    "No company linked to the provided number: $number"
)