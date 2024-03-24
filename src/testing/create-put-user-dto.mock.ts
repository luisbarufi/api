import { Role } from '../enums/role.enum';
import { UpdatedPutUserDTO } from '../user/dto/update-put-user.dto';

export const updatedPutUserDTO: UpdatedPutUserDTO = {
  name: 'John Doe',
  email: 'johndoe@example.com',
  birthAt: '2000-01-30',
  password: '123@456',
  role: Role.User,
};
