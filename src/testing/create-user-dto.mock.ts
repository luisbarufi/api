import { Role } from '../enums/role.enum';
import { CreateUserDTO } from '../user/dto/create-user.dto';

export const createUserDTO: CreateUserDTO = {
  name: 'John Doe',
  email: 'johndoe@example.com',
  birthAt: '2000-01-30',
  password: '123@456',
  role: Role.User,
};
