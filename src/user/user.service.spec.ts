import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { usersRepositoryMock } from '../testing/user-repository.mock';
import { UserEntityList } from '../testing/user-entity-list.mock';
import { createUserDTO } from '../testing/create-user-dto.mock';

describe('UserService', () => {
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, usersRepositoryMock],
    }).compile();

    userService = module.get<UserService>(UserService);
  });

  test('must be able to validate the definition', () => {
    expect(userService).toBeDefined();
  });

  describe('Create', () => {
    test('method create', async () => {
      const result = await userService.create(createUserDTO);

      expect(result).toEqual(UserEntityList[0]);
    });
  });

  // describe('Read', () => {});

  // describe('Update', () => {});

  // describe('Delete', () => {});
});
