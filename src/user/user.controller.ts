import { Body, Controller, Get, Param, Patch, Post, Put } from '@nestjs/common';

@Controller('users')
export class UserController {
  @Post()
  async create(@Body() body) {
    return { body };
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
  async updated(@Body() body, @Param() params) {
    return {
      method: 'Put',
      body,
      params,
    };
  }

  @Patch(':id')
  async updatedPartial(@Body() body, @Param() params) {
    return {
      method: 'Patch',
      body,
      params,
    };
  }
}
