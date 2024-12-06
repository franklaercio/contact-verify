package br.ufrn.backend.infrastructure.controllers

import br.ufrn.backend.application.usecases.UserUseCase
import br.ufrn.backend.domain.User
import org.springframework.web.bind.annotation.*
import reactor.core.publisher.Mono

@RestController
@RequestMapping("/accounts")
class UserController(
    private val userService: UserUseCase,
) {

    @PostMapping
    fun createUser(@RequestBody account: User): Mono<User> {
        return userService.createUser(account)
    }

    @GetMapping("/{id}")
    fun getUserById(@PathVariable id: String): Mono<User?> {
        return userService.getUserById(id)
    }
}