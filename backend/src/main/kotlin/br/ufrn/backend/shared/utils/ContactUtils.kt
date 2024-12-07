package br.ufrn.backend.shared.utils

import br.ufrn.backend.domain.enums.ContactType

object ContactUtils {
    private val emailRegex = Regex("^[\\w.-]+@[\\w.-]+\\.\\w+$")
    private val phoneRegex = Regex("^\\+?\\d+$")

    fun retrieve(identifier: String): ContactType {
        return if (isEmail(identifier)) {
            ContactType.EMAIL
        } else {
            ContactType.PHONE
        }
    }

    fun isValid(identifier: String): Boolean =
        isEmail(identifier) || isPhone(identifier)

    fun isEmail(identifier: String): Boolean =
        emailRegex.matches(identifier)

    fun isPhone(identifier: String): Boolean =
        phoneRegex.matches(identifier)
}