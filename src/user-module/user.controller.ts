import { Controller, Get, Post, Body, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './interface/user';
import { UserDto, UserParamsDto } from './dto/user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {

  }
  // HTTP GET /user
  @Get()
  getUsers(): User[] {
    return this.userService.getUsers()
  }

  // HTTP GET /user
  @Get('/:email')
  getUser(@Param() param: UserParamsDto): User {
    return this.userService.getUser(param.email)
  }

  // HTTP POST /users
  @Post()
  @UsePipes(new ValidationPipe(
    
  ))
  postUser(@Body() user: UserDto): User {
    return this.userService.addUser(user);
  }


  // HTTP DELETE /users/EMAIL@GMAIL.COM
  @Delete('/:email')
  deleteUser(@Param() params: UserParamsDto): User[] {
    return this.userService.deleteUser(params.email);
  }
}
