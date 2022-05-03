import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserDto } from './dtos';
import { UserService } from './user.service';
import { LoginDto } from './dtos/login.dto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getUsers() {
    const data = await this.userService.findAll();
    return data;
  }

  @Post()
  async registerUser(@Body() dto: UserDto) {
    const data = await this.userService.createUser(dto);
    return data;
  }

  @Post('login')
  async login(@Body() dto: LoginDto) {
    const data = await this.userService.login(dto);
    return data;
  }
}
