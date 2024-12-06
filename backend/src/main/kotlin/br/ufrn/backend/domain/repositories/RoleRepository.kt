package br.ufrn.backend.domain.repositories

import br.ufrn.backend.domain.enums.RoleEnum
import reactor.core.publisher.Mono

interface RoleRepository {
    fun save(roleEnum: RoleEnum): Mono<RoleEnum>
    fun findAll(): Mono<List<RoleEnum>>
}