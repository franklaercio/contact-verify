package br.ufrn.backend.infrastructure.persistence.users

import br.ufrn.backend.domain.enums.RoleEnum
import br.ufrn.backend.infrastructure.persistence.roles.RoleEntity
import org.springframework.data.annotation.Id
import org.springframework.data.relational.core.mapping.Table
import org.springframework.security.core.GrantedAuthority
import org.springframework.security.core.authority.SimpleGrantedAuthority
import org.springframework.security.core.userdetails.UserDetails


@Table("users")
data class UserEntity(
    @Id
    val id: String? = null,
    val name: String,
    val balance: Double,
    val email: String,
    val secret: String,
    val role: RoleEntity? = null,
    val accountNonExpired: Boolean = true,
    val accountNonLocked: Boolean = true,
    val credentialsNonExpired: Boolean = true,
    val enabled: Boolean = true
): UserDetails {
    override fun getAuthorities(): Collection<GrantedAuthority?> {
        return if (this.role?.name === RoleEnum.ADMIN.name) mutableListOf(
            SimpleGrantedAuthority("ROLE_ADMIN"),
            SimpleGrantedAuthority("ROLE_USER")
        )
        else mutableListOf(SimpleGrantedAuthority("ROLE_USER"))
    }

    override fun getPassword(): String {
        return secret
    }

    override fun getUsername(): String {
        return email
    }

    override fun isAccountNonExpired(): Boolean {
        return accountNonExpired
    }

    override fun isAccountNonLocked(): Boolean {
        return accountNonLocked
    }

    override fun isCredentialsNonExpired(): Boolean {
        return credentialsNonExpired
    }

    override fun isEnabled(): Boolean {
        return enabled
    }
}