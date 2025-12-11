import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth') //auth/register
export class AuthController {
    authService: AuthService;
    constructor(authService: AuthService) {
        this.authService = authService;
    }
    @Post('register')
    register(){
        this.authService.registerUser();
        return { message: 'User registered successfully' };
    }
}