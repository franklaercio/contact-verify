package com.carcara.software.fintracker.domain.model

import com.carcara.software.fintracker.domain.enums.RoleEnum

class User(
    val name: String,
    val balance: Double,
    val email: String,
    val password: String,
    val roleEnum: RoleEnum? = RoleEnum.USER,
    val accountNonExpired: Boolean? = true,
    val accountNonLocked: Boolean? = true,
    val credentialsNonExpired: Boolean? = true,
    val enabled: Boolean? = true
)