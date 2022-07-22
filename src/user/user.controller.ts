import { IUserResponce } from './interface/userInterface';
import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Param,
  ParseUUIDPipe,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto';
import { UpdatePasswordDto } from './dto/update.dto';
import { UserService } from './user/user.service';
import { ErrorHandler } from 'src/errorhandler/error.handler';
@Controller('user')
export class UserController {
  error = new ErrorHandler();
  constructor(public readonly Userservice: UserService) {}
  @Get()
  @HttpCode(200)
  getall() {
    return this.Userservice.findAll();
  }
  @Post()
  create(@Body() createuser: CreateUserDto): Promise<IUserResponce> {
    return this.Userservice.create(createuser);
  }
  @Get(':id')
  getById(@Param('id') id: string) {
    const user = this.Userservice.getById(id);
    if (!user) return this.error.notFound('User');
    return user;
  }
  @Put(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updatePasswordDto: UpdatePasswordDto,
  ) {
    return this.Userservice.updatePass(id, updatePasswordDto);
  }
  @Delete(':id')
  async delete(@Param('id', ParseUUIDPipe) id: string): Promise<string | void> {
    const user = await this.Userservice.deleteUser(id);
    if (user === null) return this.error.notFound('User');
    return user;
  }
}
