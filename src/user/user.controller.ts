import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdatedPutUserDTO } from './dto/update-put-user.dto';
import { UpdatedPatchUserDTO } from './dto/update-patch-user.dto';

@Controller('users')
export class UserController {
  @Post()
  async create(@Body() { email, name, password }: CreateUserDTO) {
    return { email, name, password };
  }

  @Get()
  async list() {
    return { users: [] };
  }

  @Get(':id')
  async show(@Param('id', ParseIntPipe) id) {
    return {
      user: {},
      id,
    };
  }

  @Put(':id')
  async updated(
    @Body() { email, name, password }: UpdatedPutUserDTO,
    @Param('id', ParseIntPipe) id,
  ) {
    return {
      method: 'Put',
      email,
      name,
      password,
      id,
    };
  }

  @Patch(':id')
  async updatedPartial(
    @Body() { email, name, password }: UpdatedPatchUserDTO,
    @Param('id', ParseIntPipe) id,
  ) {
    return {
      method: 'Patch',
      email,
      name,
      password,
      id,
    };
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id) {
    return {
      id,
    };
  }
}
