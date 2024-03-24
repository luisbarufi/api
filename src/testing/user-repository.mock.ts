import { getRepositoryToken } from '@nestjs/typeorm';
import { UserEntity } from '../user/entity/user.entity';
import { UserEntityList } from './user-entity-list.mock';

export const usersRepositoryMock = {
  provide: getRepositoryToken(UserEntity),
  useValue: {
    exists: jest.fn(),
    create: jest.fn(),
    save: jest.fn().mockResolvedValue(UserEntityList[0]),
    find: jest.fn(),
    findOneBy: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  },
};
