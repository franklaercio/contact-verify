package br.ufrn.backend.infrastructure.persistence.users

import org.springframework.data.repository.reactive.ReactiveCrudRepository
import org.springframework.stereotype.Repository
import reactor.core.publisher.Mono

@Repository
interface UserReactiveRepository : ReactiveCrudRepository<UserEntity, String> {
    fun findByEmail(email: String): Mono<UserEntity>
}