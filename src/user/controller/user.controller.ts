import { Controller, Get, Post, Res, HttpStatus, Param, Delete, Put, Req, Query, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { Response} from 'express';
import { UserDTO, UserParamDTO } from '../dto/user.dto';
import { UserService } from '../services/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get()
  async getAllUserss(@Res() res: Response) {
    const data = await this.service.listUsers();
    res.status(HttpStatus.OK).json(data);
  }

  @Post()
  async  createUserss(@Res() res: Response, @Body() userParam: UserDTO) {
    try {
    const data = await this.service.createUsers(userParam);
    res.status(HttpStatus.OK).json(data);
    } catch(err){
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(err);
    }
  }
  @Get('/:userId')
  async getUsersById( @Param() param: UserParamDTO) {
    return await this.service.getUsers(param.userId);
  }
  @Delete('/')
  async deleteUsersById(@Query('userid') id: string) {
    return await this.service.removeUsers(id);
  }
}