package br.ufrn.backend.application.usecases

import br.ufrn.backend.domain.enums.RoleEnum
import br.ufrn.backend.domain.repositories.RoleRepository
import org.springframework.stereotype.Service
import reactor.core.publisher.Mono

@Service
class RoleUseCase(private val roleRepository: RoleRepository) {
    fun createRole(roleEnum: RoleEnum): Mono<RoleEnum> {
        return roleRepository.save(roleEnum)
    }

    fun findAll(): Mono<List<RoleEnum>> {
        return roleRepository.findAll()
    }
}