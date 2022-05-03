import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LoginDto, UserDto } from './dtos';
import { User, UserDocument } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private readonly jwtService: JwtService,
  ) {}

  async findAll() {
    return this.userModel.find().exec();
  }

  async createUser(dto: UserDto) {
    const user = new this.userModel(dto);
    return await user.save();
  }

  async login(dto: LoginDto) {
    let token = null;
    const user: any = await this.userModel.findOne({
      email: dto.email,
      password: dto.password,
    });

    if (user) {
      token = this.jwtService.sign({
        id: user.id,
        name: user.name,
        lastName: user.lastName,
        role: user.userType,
      });
    } else {
      throw new NotFoundException('Credenciales incorrectas');
    }

    return token;
  }
}
