import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
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
  async show(@Param() params) {
    return {
      user: {},
      params,
    };
  }

  @Put(':id')
  async updated(
    @Body() { email, name, password }: UpdatedPutUserDTO,
    @Param() params,
  ) {
    return {
      method: 'Put',
      email,
      name,
      password,
      params,
    };
  }

  @Patch(':id')
  async updatedPartial(
    @Body() { email, name, password }: UpdatedPatchUserDTO,
    @Param() params,
  ) {
    return {
      method: 'Patch',
      email,
      name,
      password,
      params,
    };
  }

  @Delete(':id')
  async delete(@Param() params) {
    return {
      params,
    };
  }
}
