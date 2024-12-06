package br.ufrn.backend.infrastructure.persistence.users

import br.ufrn.backend.domain.User
import br.ufrn.backend.domain.enums.RoleEnum
import br.ufrn.backend.domain.repositories.UserRepository
import br.ufrn.backend.infrastructure.persistence.roles.RoleReactiveRepository
import org.springframework.stereotype.Service
import reactor.core.publisher.Mono

@Service
class UserPersistence(
    private val userReactiveRepository: UserReactiveRepository,
    private val roleRepository: RoleReactiveRepository
) : UserRepository {
    override fun save(user: User): Mono<User> {
        return Mono.just(user.roleEnum!!)
            .flatMap { role ->
                roleRepository.findByName(role.name)
                    .switchIfEmpty(Mono.error(IllegalArgumentException("Role not found: ${role.name}")))
            }
            .flatMap { role ->
                val userEntity = UserEntity(
                    email = user.email,
                    secret = user.password,
                    name = user.name,
                    balance = user.balance,
                    role = role
                )
                userReactiveRepository.save(userEntity)
            }
            .map { savedUser ->
                User(
                    savedUser.name,
                    savedUser.balance,
                    savedUser.email,
                    savedUser.secret,
                    savedUser.role.let { RoleEnum.valueOf(it!!.name) }
                )
            }
    }

    override fun findById(id: String): Mono<User?> {
        return Mono.just(id)
            .flatMap { userReactiveRepository.findById(it) }
            .mapNotNull { userDocument ->
                userDocument?.let { user ->
                    User(
                        user.name,
                        user.balance,
                        user.email,
                        user.secret,
                        user.role.let { RoleEnum.valueOf(it!!.name) }
                    )
                }
            }
    }

    override fun findByEmail(email: String): Mono<User?> {
        return Mono.just(email)
            .flatMap { userReactiveRepository.findByEmail(it) }
            .mapNotNull { userDocument ->
                userDocument?.let { user ->
                    User(
                        user.name,
                        user.balance,
                        user.email,
                        user.secret,
                        user.role.let { RoleEnum.valueOf(it!!.name) }
                    )
                }
            }.doOnError { error ->
                println("Error: $error")}
    }
}