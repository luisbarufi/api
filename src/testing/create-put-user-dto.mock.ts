import { Role } from '../enums/role.enum';
import { UpdatePutUserDTO } from '../user/dto/update-put-user.dto';

export const updatePutUserDTO: UpdatePutUserDTO = {
  name: 'John Doe',
  email: 'johndoe@example.com',
  birthAt: '2000-01-30',
  password: '123@456',
  role: Role.User,
};
