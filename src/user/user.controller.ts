import { JwtAuthGuard } from './../auth/auth.guard';
import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Param,
  UseGuards,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto';
import { UpdatePasswordDto } from './dto/update.dto';
import { UserService } from './user/user.service';
import { ErrorHandler } from 'src/errorhandler/error.handler';
@Controller('user')
@UseGuards(JwtAuthGuard)
export class UserController {
  error = new ErrorHandler();
  constructor(public readonly Userservice: UserService) {}
  @Get()
  @HttpCode(200)
  getall() {
    return this.Userservice.getall();
  }
  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createuser: CreateUserDto) {
    return this.Userservice.create(createuser);
  }
  @Get(':id')
  getById(@Param('id') id: string) {
    const user = this.Userservice.getById(id);
    if (!user) return this.error.notFound('User');
    return user;
  }
  @Put(':id')
  @HttpCode(200)
  updatePass(
    @Param('id') id: string,
    @Body() updatePassdto: UpdatePasswordDto,
  ) {
    return this.Userservice.updatePass(id, updatePassdto);
  }
  @Delete(':id')
  async delUser(@Param('id') id: string) {
    const user = await this.Userservice.deleteUser(id);
    if (user === null) return this.error.notFound('User');
    return user;
  }
}
