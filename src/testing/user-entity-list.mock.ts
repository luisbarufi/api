import { Role } from '../enums/role.enum';
import { UserEntity } from '../user/entity/user.entity';

export const UserEntityList: UserEntity[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'johndoe@example.com',
    birthAt: new Date('2000-01-30'),
    password: '$2b$10$2pbaCVzDPD4oB9cIZQTJcOyY5/p23czVnMkSckViVJfxi6n8UPyu2',
    role: Role.Admin,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'janedoe@example.com',
    birthAt: new Date('2000-01-30'),
    password: '$2b$10$2pbaCVzDPD4oB9cIZQTJcOyY5/p23czVnMkSckViVJfxi6n8UPyu2',
    role: Role.Admin,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 3,
    name: 'John Roe',
    email: 'johnroe@example.com',
    birthAt: new Date('2000-01-30'),
    password: '$2b$10$2pbaCVzDPD4oB9cIZQTJcOyY5/p23czVnMkSckViVJfxi6n8UPyu2',
    role: Role.Admin,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
