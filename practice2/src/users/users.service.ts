import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUser } from './dto/login-user.dto';

@Injectable()
export class UsersService {
   private users = [
    // name, email, id
    {name: "Jiru Gutema", email: "jiru@gmail.com", id: 1},
    {name: "John Doe", email: "john@gmail.com", id: 2},
    {name: "Jane Smith", email: "jane@gmail.com" , id: 3},
    {name: "Alice Johnson", email: "aliace@gmail.com", id: 4},
   ]
  create(createUserDto: CreateUserDto) {
    const message = `A user with the email address ${createUserDto.email} has been created with the following information. email: ${createUserDto.email} name: ${createUserDto.name}`
    return {success: true,
      message: message
    };
  }

  findAll() {
    return this.users 
  }

  findOne(id: number) {
    const random = Math.random()*10;
    if (random % 2 === 0){
      const res: {name: string, email: string, id: number} = {name: "Jiru Gutema", email: "jirudagutema@gmail.com", id: id};
      return res 
    }
    else{
      return "User not found!"
    }
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const message = `A user with the email address ${updateUserDto.email} has been updated with the following information. email: ${updateUserDto.email} name: ${updateUserDto.name}`
    return {success: true,
      message: message
    };
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  login(loginUserDto: LoginUser){
    if (loginUserDto.email == "jirudagutema@gmail.com" && loginUserDto.password == 1234){
    return {success: true, message: `User with email ${loginUserDto.email} logged in to your account!`, token: "afnoipaewvytopiaywneicauwnteeawtxmoatuaewioutxmo"
}    }
    else{
      return {message: "Account doesn't exist!"}
    }
  }
}
