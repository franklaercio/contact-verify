package br.ufrn.backend.domain.repositories

import br.ufrn.backend.domain.User
import org.springframework.stereotype.Repository
import reactor.core.publisher.Mono

@Repository
interface UserRepository {
    fun save(user: User): Mono<User>
    fun findById(id: String): Mono<User?>
    fun findByEmail(email: String): Mono<User?>
}