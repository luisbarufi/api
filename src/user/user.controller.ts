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
  // UseInterceptors,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdatedPutUserDTO } from './dto/update-put-user.dto';
import { UpdatedPatchUserDTO } from './dto/update-patch-user.dto';
import { UserService } from './user.service';
// import { LogInterceptor } from 'src/interceptors/log.interceptor';
// @UseInterceptors(LogInterceptor)
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() data: CreateUserDTO) {
    return this.userService.create(data);
  }

  @Get()
  async list() {
    return this.userService.list();
  }

  @Get(':id')
  async show(@Param('id', ParseIntPipe) id) {
    return this.userService.show(id);
  }

  @Put(':id')
  async updated(
    @Body() data: UpdatedPutUserDTO,
    @Param('id', ParseIntPipe) id,
  ) {
    return this.userService.update(id, data);
  }

  @Patch(':id')
  async updatedPartial(
    @Body() data: UpdatedPatchUserDTO,
    @Param('id', ParseIntPipe) id,
  ) {
    return this.userService.updatePartial(id, data);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id) {
    return this.userService.delete(id);
  }
}
