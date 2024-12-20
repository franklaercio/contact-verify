package br.ufrn.backend.infrastructure.security

import org.springframework.http.HttpHeaders
import org.springframework.http.server.reactive.ServerHttpRequest
import org.springframework.security.core.context.ReactiveSecurityContextHolder
import org.springframework.util.StringUtils
import org.springframework.web.server.ServerWebExchange
import org.springframework.web.server.WebFilter
import org.springframework.web.server.WebFilterChain
import reactor.core.publisher.Mono
import reactor.core.scheduler.Schedulers

class JwtTokenAuthenticationFilter(private val tokenProvider: JwtTokenProvider) : WebFilter {

    companion object {
        const val HEADER_PREFIX = "Bearer "
    }

    override fun filter(exchange: ServerWebExchange, chain: WebFilterChain): Mono<Void> {
        val token = resolveToken(exchange.request)
        return if (StringUtils.hasText(token) && tokenProvider.validateToken(token!!)) {
            Mono.fromCallable { tokenProvider.getAuthentication(token) }
                .subscribeOn(Schedulers.boundedElastic())
                .flatMap { authentication ->
                    chain.filter(exchange)
                        .contextWrite(ReactiveSecurityContextHolder.withAuthentication(authentication))
                }
        } else {
            chain.filter(exchange)
        }
    }

    private fun resolveToken(request: ServerHttpRequest): String? {
        val bearerToken = request.headers.getFirst(HttpHeaders.AUTHORIZATION)
        return if (StringUtils.hasText(bearerToken) && bearerToken!!.startsWith(HEADER_PREFIX)) {
            bearerToken.substring(7)
        } else null
    }
}