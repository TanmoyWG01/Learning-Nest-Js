import { Injectable } from '@nestjs/common';
import { RegisterUserDto } from '../auth/dto/registerUser.dto';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {

  constructor(@InjectModel(User.name) private UserModel: Model<User>) {}

  async createUser(registerUserDTO: RegisterUserDto) {

    return await this.UserModel.create({
      fname: registerUserDTO.fname,
      lname: registerUserDTO.lname,
      email: registerUserDTO.email,
      password: registerUserDTO.password,
    })

    // return { message: 'User created successfully from UserService' };
  }
}
