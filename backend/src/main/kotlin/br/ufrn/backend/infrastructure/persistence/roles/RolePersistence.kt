package br.ufrn.backend.infrastructure.persistence.roles

import br.ufrn.backend.domain.enums.RoleEnum
import br.ufrn.backend.domain.repositories.RoleRepository
import org.springframework.stereotype.Service
import reactor.core.publisher.Mono

@Service
class RolePersistence(private val roleRepository: RoleReactiveRepository) : RoleRepository {
    override fun save(roleEnum: RoleEnum): Mono<RoleEnum> {
        return Mono.just(roleEnum).map {
                roleRepository.save(RoleEntity(name = roleEnum.name))
            }.flatMap { Mono.just(roleEnum) }
    }

    override fun findAll(): Mono<List<RoleEnum>> {
        return roleRepository.findAll().collectList().flatMap { roles ->
            Mono.just(roles.map { RoleEnum.valueOf(it.name) })
        }
    }
}