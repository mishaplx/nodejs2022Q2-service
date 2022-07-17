import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Param,
  HttpStatus,
  NotFoundException,
  BadRequestException,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto';
import { UpdatePasswordDto } from './dto/update.dto';
import { UserService } from './user/user.service';
@Controller('user')
export class UserController {
  constructor(public readonly Userservice: UserService) {}
  @Get()
  @HttpCode(200)
  getall() {
    return this.Userservice.getall();
  }
  @Post()
  @HttpCode(201)
  create(@Body() createuser: CreateUserDto) {
    if (
      createuser.hasOwnProperty('login') == false ||
      createuser.hasOwnProperty('password') == false
    ) {
      throw new BadRequestException({
        status: HttpStatus.BAD_REQUEST,
        message: 'BAD_REQUEST',
      });
    }

    return this.Userservice.create(createuser);
  }
  @Get(':id')
  @HttpCode(200)
  getById(@Param('id') id: string) {
    if (id.split('-').length !== 5) {
      console.log(id.split('-').length);
      throw new BadRequestException({
        status: HttpStatus.BAD_REQUEST,
        error: 'BAD_REQUEST',
      });
    }

    if (this.Userservice.getById(id)) {
      return this.Userservice.getById(id);
    } else {
      throw new NotFoundException({
        status: HttpStatus.NOT_FOUND,
        error: 'NOT_FOUND',
      });
    }
  }
  @Put(':id')
  @HttpCode(200)
  updatePass(
    @Param('id') id: string,
    @Body() updatePassdto: UpdatePasswordDto,
  ) {
    if (id.split('-').length !== 5) {
      console.log(id.split('-').length);
      throw new BadRequestException({
        status: HttpStatus.BAD_REQUEST,
        error: 'BAD_REQUEST',
      });
    }
    if (this.Userservice.updatePass(id, updatePassdto)) {
      return this.Userservice.updatePass(id, updatePassdto);
    } else {
      throw new NotFoundException({
        status: HttpStatus.NOT_FOUND,
        error: 'NOT_FOUND',
      });
    }
  }
  @Delete(':id')
  @HttpCode(204)
  delUser(@Param('id') id: string) {
    if (id.split('-').length !== 5) {
      console.log(id.split('-').length);
      throw new BadRequestException({
        status: HttpStatus.BAD_REQUEST,
        error: 'BAD_REQUEST',
      });
    }
    if (this.Userservice.deleteUser(id)) {
      return this.Userservice.deleteUser(id);
    } else {
      throw new NotFoundException({
        status: HttpStatus.NOT_FOUND,
        error: 'NOT_FOUND',
      });
    }
  }
}
