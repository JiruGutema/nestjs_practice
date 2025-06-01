import { Controller, Get, Post, Param, Body, Patch, Delete } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get("all")
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.usersService.findOne(+id);
  }

  @Post("create")
  create(@Body() body) {
    return this.usersService.create(body);
  }

  @Patch('update/:id')
  update(@Param('id') id: number, @Body() body) {
    return this.usersService.update(+id, body);
  }

  @Delete('delete/:id')
  delete(@Param('id') id: number) {
    return this.usersService.delete(+id);
  }
}
