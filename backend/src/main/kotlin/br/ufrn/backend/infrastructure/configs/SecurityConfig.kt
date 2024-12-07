package br.ufrn.backend.infrastructure.configs

import br.ufrn.backend.infrastructure.persistence.users.UserReactiveRepository
import br.ufrn.backend.infrastructure.security.JwtTokenAuthenticationFilter
import br.ufrn.backend.infrastructure.security.JwtTokenProvider
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.http.HttpMethod
import org.springframework.security.authentication.ReactiveAuthenticationManager
import org.springframework.security.authentication.UserDetailsRepositoryReactiveAuthenticationManager
import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity
import org.springframework.security.config.web.server.SecurityWebFiltersOrder
import org.springframework.security.config.web.server.ServerHttpSecurity
import org.springframework.security.core.userdetails.ReactiveUserDetailsService
import org.springframework.security.core.userdetails.User
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.security.web.server.SecurityWebFilterChain
import org.springframework.web.cors.CorsConfiguration
import org.springframework.web.cors.reactive.CorsConfigurationSource
import org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource


@Configuration
@EnableWebFluxSecurity
class SecurityConfig {

    @Bean
    fun securityWebFilterChain(http: ServerHttpSecurity, tokenProvider: JwtTokenProvider): SecurityWebFilterChain {
        return http
            .csrf { it.disable() }
            .authorizeExchange { exchanges ->
                exchanges.pathMatchers(HttpMethod.GET, "/auth/login").permitAll()
                exchanges.pathMatchers(HttpMethod.GET, "/auth/signup").permitAll()
                exchanges.pathMatchers(HttpMethod.GET, "/api/companies/{identifier}").permitAll()
                exchanges.pathMatchers(HttpMethod.GET, "/api/companies").permitAll()
                exchanges.pathMatchers(HttpMethod.POST, "/api/contacts").permitAll()
                exchanges.pathMatchers(HttpMethod.GET, "/api/contacts/security").permitAll()
                exchanges.pathMatchers(HttpMethod.GET, "/roles").hasRole("ADMIN")
                exchanges.anyExchange().authenticated()
            }
            .addFilterBefore(JwtTokenAuthenticationFilter(tokenProvider), SecurityWebFiltersOrder.HTTP_BASIC)
            .build()
    }

    @Bean
    fun reactiveAuthenticationManager(
        reactiveUserDetailsService: ReactiveUserDetailsService?,
        passwordEncoder: PasswordEncoder?
    ): ReactiveAuthenticationManager {
        val authenticationManager = UserDetailsRepositoryReactiveAuthenticationManager(reactiveUserDetailsService)
        authenticationManager.setPasswordEncoder(passwordEncoder)
        return authenticationManager
    }

    @Bean
    fun userDetailsService(users: UserReactiveRepository): ReactiveUserDetailsService {
        return ReactiveUserDetailsService { username: String ->
            users.findByEmail(username)
                .map { u ->
                    User
                        .withUsername(u.email).password(u.password)
                        .authorities(u.role?.name)
                        .accountExpired(!u.accountNonExpired)
                        .credentialsExpired(!u.credentialsNonExpired)
                        .disabled(!u.enabled)
                        .accountLocked(!u.accountNonLocked)
                        .build()
                }
        }
    }

    @Bean
    fun passwordEncoder() = BCryptPasswordEncoder()

    @Bean
    fun corsConfigurationSource(): CorsConfigurationSource {
        val config = CorsConfiguration().apply {
            allowedOrigins = listOf("http://localhost:3000")
            allowedMethods = listOf("GET", "POST", "PUT", "DELETE", "OPTIONS")
            allowedHeaders = listOf("*")
            allowCredentials = true
        }
        val source = UrlBasedCorsConfigurationSource()
        source.registerCorsConfiguration("/**", config)
        return source
    }
}