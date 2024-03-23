import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdatedPutUserDTO } from './dto/update-put-user.dto';
import { UpdatedPatchUserDTO } from './dto/update-patch-user.dto';
import * as bcrypt from 'bcrypt';
import { UserEntity } from './entity/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  async create(data: CreateUserDTO) {
    if (this.usersRepository.exists({ where: { email: data.email } })) {
      throw new BadRequestException('Email already exists');
    }

    data.password = await bcrypt.hash(data.password, await bcrypt.genSalt());

    const user = this.usersRepository.create(data);

    return this.usersRepository.save(user);
  }

  async list() {
    return this.usersRepository.find();
  }

  async show(id: number) {
    await this.userExists(id);

    return this.usersRepository.findOneBy({ id });
  }

  async update(
    id: number,
    { email, name, password, birthAt, role }: UpdatedPutUserDTO,
  ) {
    await this.userExists(id);

    password = await bcrypt.hash(password, await bcrypt.genSalt());

    await this.usersRepository.update(id, {
      email,
      name,
      password,
      birthAt: birthAt ? new Date(birthAt) : null,
      role,
    });

    return this.show(id);
  }

  async updatePartial(
    id: number,
    { email, name, password, birthAt, role }: UpdatedPatchUserDTO,
  ) {
    await this.userExists(id);

    const data: any = {};

    if (email) data.email = email;
    if (name) data.name = name;
    if (password)
      data.password = await bcrypt.hash(password, await bcrypt.genSalt());

    if (birthAt) data.birthAt = new Date(birthAt);
    if (role) data.role = role;

    await this.usersRepository.update(id, data);

    return this.show(id);
  }

  async delete(id: number) {
    await this.userExists(id);

    return this.usersRepository.delete(id);
  }

  async userExists(id: number) {
    if (!(await this.usersRepository.exists({ where: { id } }))) {
      throw new NotFoundException(`User ${id} does not exist`);
    }
  }
}
