package br.ufrn.backend.application.usecases

import br.ufrn.backend.application.exceptions.UserNotFoundException
import br.ufrn.backend.domain.repositories.UserRepository
import com.carcara.software.fintracker.domain.model.User
import org.springframework.stereotype.Service
import reactor.core.publisher.Mono

@Service
class UserUseCase(private val userRepository: UserRepository) {
    fun createUser(user: User): Mono<User> {
        return userRepository.save(user)
    }

    fun getUserById(id: String): Mono<User?> {
        return userRepository.findById(id).switchIfEmpty(Mono.error(UserNotFoundException("User not found")))
    }
}