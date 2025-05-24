import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
   constructor(private readonly userServices: UsersService) {
   }

    // get all users
    @Get()
    findAllUsers(){
        return this.userServices.findAllUsers() 
    }
    // get user info
    @Get(":id")
    findOneUser(@Param("id") id: number){
        return this.userServices.findOneUser(id) 
    }
    // login end point
    @Post("login")
    login(@Body() credential: {email: string, password: string}) : {}
    {
        return this.userServices.login(credential.email, credential.password)
    }

    @Patch(":id")
    updateOne(@Param("id") id:string){
        return ["update one"]
    
    }

    @Post("register")
    register(@Body() newUser: CreateUserDto){
        return this.userServices.register(newUser)
    }
    
    

}
