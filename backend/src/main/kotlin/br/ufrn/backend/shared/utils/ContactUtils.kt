package br.ufrn.backend.shared.utils

import br.ufrn.backend.domain.enums.ContactType

object ContactUtils {
    private val emailRegex = Regex("^[\\w.-]+@[\\w.-]+\\.\\w+$")
    private val phoneRegex = Regex("^\\+?\\d+$")

    fun isValid(identifier: String, type: ContactType): Boolean =
        when (type) {
            ContactType.EMAIL -> isEmail(identifier)
            ContactType.PHONE -> isPhone(identifier)
        }

    fun isValid(identifier: String): Boolean =
        isEmail(identifier) || isPhone(identifier)

    fun isEmail(identifier: String): Boolean =
        emailRegex.matches(identifier)

    fun isPhone(identifier: String): Boolean =
        phoneRegex.matches(identifier)
}