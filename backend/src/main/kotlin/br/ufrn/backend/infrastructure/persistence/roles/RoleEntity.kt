package br.ufrn.backend.infrastructure.persistence.roles

import org.springframework.data.annotation.Id
import org.springframework.data.relational.core.mapping.Table

@Table("roles")
class RoleEntity(
    @Id
    val id: String? = null,
    val name: String
)