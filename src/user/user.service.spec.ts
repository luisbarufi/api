import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { usersRepositoryMock } from '../testing/user-repository.mock';
import { UserEntityList } from '../testing/user-entity-list.mock';
import { createUserDTO } from '../testing/create-user-dto.mock';
import { Repository } from 'typeorm';
import { UserEntity } from './entity/user.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { updatePatchUserDTO } from '../testing/create-patch-user-dto.mock';
import { updatePutUserDTO } from '../testing/create-put-user-dto.mock';

describe('UserService', () => {
  let userService: UserService;
  let usersRepository: Repository<UserEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, usersRepositoryMock],
    }).compile();

    userService = module.get<UserService>(UserService);
    usersRepository = module.get(getRepositoryToken(UserEntity));
  });

  test('must be able to validate the definition', () => {
    expect(userService).toBeDefined();
    expect(usersRepository).toBeDefined();
  });

  describe('Create', () => {
    test('method create', async () => {
      jest.spyOn(usersRepository, 'exists').mockResolvedValueOnce(false);

      const result = await userService.create(createUserDTO);

      expect(result).toEqual(UserEntityList[0]);
    });
  });

  describe('Read', () => {
    test('method list', async () => {
      const result = await userService.list();

      expect(result).toEqual(UserEntityList);
    });

    test('method show', async () => {
      const result = await userService.show(1);

      expect(result).toEqual(UserEntityList[0]);
    });
  });

  describe('Update', () => {
    test('method update', async () => {
      const result = await userService.update(1, updatePutUserDTO);

      expect(result).toEqual(UserEntityList[0]);
    });

    test('method updatePartial', async () => {
      const result = await userService.updatePartial(1, updatePatchUserDTO);

      expect(result).toEqual(UserEntityList[0]);
    });
  });

  describe('Delete', () => {
    test('method delete', async () => {
      const result = await userService.delete(1);

      expect(result).toEqual(true);
    });
  });
});
