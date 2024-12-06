package br.ufrn.backend.infrastructure.controllers

import br.ufrn.backend.application.usecases.UserUseCase
import br.ufrn.backend.domain.User
import br.ufrn.backend.infrastructure.security.JwtTokenProvider
import org.springframework.http.HttpHeaders
import org.springframework.http.ResponseEntity
import org.springframework.security.authentication.ReactiveAuthenticationManager
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import reactor.core.publisher.Mono

@RestController
@RequestMapping("/auth")
class AuthController(
    private val authenticationManager: ReactiveAuthenticationManager,
    private val jwtTokenProvider: JwtTokenProvider,
    private val passwordEncoder: PasswordEncoder,
    private val userService: UserUseCase
) {

    @PostMapping("/login")
    fun login(@RequestBody authRequest: Mono<AuthRequest>): Mono<ResponseEntity<Map<String, String>>> {
        return authRequest
            .flatMap { login ->
                this.authenticationManager
                    .authenticate(UsernamePasswordAuthenticationToken(login.username, login.password))
                    .map(this.jwtTokenProvider::createToken)
            }
            .map { jwt ->
                val httpHeaders = HttpHeaders().apply {
                    add(HttpHeaders.AUTHORIZATION, "Bearer $jwt")
                }
                val tokenBody = mapOf("access_token" to jwt)
                ResponseEntity.ok().headers(httpHeaders).body(tokenBody)
            }

    }


    @PostMapping("/signup")
    fun signup(@RequestBody requestUser: User): Mono<ResponseEntity<String>> {
        return userService.createUser(
            User(
                name = requestUser.name,
                email = requestUser.email,
                balance = requestUser.balance,
                password = passwordEncoder.encode(requestUser.password)
            )
        ).map { ResponseEntity.ok("User created") }
    }

    data class AuthRequest(
        val username: String,
        val password: String
    )

}