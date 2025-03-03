package forFuture.dto

import lombok.RequiredArgsConstructor

data class LoginDto(
    val userId: String,
    val password: String
)