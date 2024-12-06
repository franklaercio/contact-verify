package br.ufrn.backend.infrastructure.persistence.roles

import org.springframework.data.repository.reactive.ReactiveCrudRepository
import org.springframework.stereotype.Repository
import reactor.core.publisher.Mono

@Repository
interface RoleReactiveRepository : ReactiveCrudRepository<RoleEntity, String> {
    fun findByName(name: String): Mono<RoleEntity>
}