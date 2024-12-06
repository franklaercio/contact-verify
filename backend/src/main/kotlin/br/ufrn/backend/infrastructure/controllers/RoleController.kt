package br.ufrn.backend.infrastructure.controllers

import br.ufrn.backend.application.usecases.RoleUseCase
import br.ufrn.backend.domain.enums.RoleEnum
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import reactor.core.publisher.Mono

@RestController
@RequestMapping("/roles")
class RoleController(private val roleService: RoleUseCase) {

    @PostMapping
    fun create(@RequestBody roleRequest: RoleRequest): Mono<ResponseEntity<RoleResponse>> {
        return roleService.createRole(RoleEnum.valueOf(roleRequest.name)).map {
            ResponseEntity.ok(RoleResponse(it.name))
        }
    }

    @GetMapping
    fun getAll(): Mono<ResponseEntity<List<RoleResponse>>> {
        return roleService.findAll().map {
            ResponseEntity.ok(it.map { role -> RoleResponse(role.name) })
        }
    }

    data class RoleRequest(
        val name: String
    )

    data class RoleResponse(
        val name: String
    )
}