package br.ufrn.backend.infrastructure.security

import com.auth0.jwt.JWT
import com.auth0.jwt.algorithms.Algorithm
import com.auth0.jwt.interfaces.DecodedJWT
import jakarta.annotation.PostConstruct
import org.slf4j.LoggerFactory
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.core.Authentication
import org.springframework.security.core.GrantedAuthority
import org.springframework.security.core.authority.AuthorityUtils
import org.springframework.security.core.userdetails.User
import org.springframework.stereotype.Component
import java.util.*

@Component
class JwtTokenProvider {

    companion object {
        const val AUTHORITIES_KEY = "roles"
        private val log = LoggerFactory.getLogger(JwtTokenProvider::class.java)
    }

    private lateinit var algorithm: Algorithm

    @PostConstruct
    fun init() {
        val secret = Base64.getEncoder().encodeToString("teste123".toByteArray(Charsets.UTF_8))
        this.algorithm = Algorithm.HMAC256(secret.toByteArray(Charsets.UTF_8))
    }

    fun createToken(authentication: Authentication): String {
        val username = authentication.name
        val authorities = authentication.authorities

        val now = Date()
        val validity = Date(now.time + 50000)

        return JWT.create()
            .withSubject(username)
            .withClaim(AUTHORITIES_KEY, if (authorities.isNotEmpty()) authorities.joinToString(",") { it.authority } else "")
            .withIssuedAt(now)
            .withExpiresAt(validity)
            .sign(algorithm)
    }

    fun getAuthentication(token: String): Authentication {
        val decodedJWT: DecodedJWT = JWT.require(algorithm).build().verify(token)
        val authoritiesClaim = decodedJWT.getClaim(AUTHORITIES_KEY).asString()

        val authorities: Collection<GrantedAuthority> = if (authoritiesClaim.isNullOrEmpty()) {
            AuthorityUtils.NO_AUTHORITIES
        } else {
            AuthorityUtils.commaSeparatedStringToAuthorityList(authoritiesClaim)
        }

        val principal = User(decodedJWT.subject, "", authorities)

        return UsernamePasswordAuthenticationToken(principal, token, authorities)
    }

    fun validateToken(token: String): Boolean {
        return try {
            val decodedJWT: DecodedJWT = JWT.require(algorithm).build().verify(token)
            log.info("Expiration date: {}", decodedJWT.expiresAt)
            true
        } catch (e: Exception) {
            log.info("Invalid JWT token: {}", e.message)
            log.trace("Invalid JWT token trace.", e)
            false
        }
    }
}