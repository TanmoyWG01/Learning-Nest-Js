import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { RegisterUserDto } from './dto/registerUser.dto';

@Injectable()
export class AuthService { 
    constructor(private readonly userService: UserService   ) {}
    registerUser(registerUserDTO: RegisterUserDto) {
        console.log('Registering user with data:', registerUserDTO);
        const userCreationResult = this.userService.createUser();
        return userCreationResult;
    }
}
