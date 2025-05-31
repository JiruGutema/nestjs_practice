import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users  = [
        {
            id: 1,
            name: 'John Doe',
            email: 'john@gmail.com',
            role: 'admin',
            password: "12345"
        },
        {
            id: 2,
            name: 'Jane Doe',
            email: 'jane@gmail.com',
            role: 'user',
            password: "12345"
        },
        {
            id: 3,
            name: 'Jiru Gutema',
            email: 'jiru@gmail.com',
            role: 'user',
            password: "12345"
        },
    ]
    findAllUsers(){
        return this.users;
    }
    findOneUser(id: number){

        let user = this.users.find(user => user.id == id)
        if (!user){
            return {message: "user not found"}
        }
        return user
   }
   login(email: string, password: string){
    let users:any = ""
    this.users.find(user => {
        if(user.email === email && user.password === password){
            users = user;
        } })
    if (!users){
        return {message: "user not found"}
    }
    return users
}
    register(user: {email: string, name:string, role:string, password:string}){
        let newUser = {id: 1 + this.users.length, email: user.email, name: user.name, role: user.role, password: user.password}
        let authenticationtoken: string = newUser.name;
        console.log(authenticationtoken)
        this.users.push(newUser)

        if (this.users.includes(newUser)){

            return {message: "registered successfully"}
            
        }
        else{
            return "Error in registering a user"
        }
        

    }


}
