package br.ufrn.backend.domain

import br.ufrn.backend.domain.enums.RoleEnum

data class User(
    val name: String,
    val balance: Double,
    val email: String,
    val password: String,
    val roleEnum: RoleEnum? = RoleEnum.USER
)