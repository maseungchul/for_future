package forFuture.controller

import org.springframework.web.bind.annotation.*

@RequestMapping("/user")
@RestController
@ResponseBody
class UserController(
    // private val service: Service
) {

    @PostMapping("/login")
    fun login(@RequestBody loginDto: LoginDto) {
        println("success")
    }
}

data class LoginDto(
    val userId: String,
    val password: String
)