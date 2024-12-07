package br.ufrn.backend.infrastructure.persistence.contacts

import br.ufrn.backend.domain.enums.ContactType
import org.springframework.data.annotation.Id
import org.springframework.data.relational.core.mapping.Table
import java.util.*

@Table("contacts")
data class ContactEntity(
    @Id
    val id: UUID? = null,
    val identifier: String,
    val type: ContactType,
    val messageCount: Int = 0,
    val callCount: Int = 0
)
