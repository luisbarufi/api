import { TestingModule, Test } from '@nestjs/testing';
import { UserController } from './user.controller';
import { AuthGuard } from '../guards/auth.guard';
import { guardMock } from '../testing/guard.mock';
import { RoleGuard } from '../guards/role.gurad';
import { UserService } from './user.service';
import { userServiceMock } from '../testing/user-service.mock';
import { createUserDTO } from '../testing/create-user-dto.mock';
import { UserEntityList } from '../testing/user-entity-list.mock';
import { updatePutUserDTO } from '../testing/create-put-user-dto.mock';

describe('UserController', () => {
  let userController: UserController;
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [userServiceMock],
    })
      .overrideGuard(AuthGuard)
      .useValue(guardMock)
      .overrideGuard(RoleGuard)
      .useValue(guardMock)
      .compile();

    userController = module.get<UserController>(UserController);
    userService = module.get<UserService>(UserService);
  });

  test('must be able to validate the definition', () => {
    expect(userController).toBeDefined();
    expect(userService).toBeDefined();
  });

  describe('Testing the application of Guards on this controller', () => {
    test('If Guards are applied', () => {
      const guards = Reflect.getMetadata('__guards__', UserController);

      expect(guards.length).toEqual(2);
      expect(new guards[0]()).toBeInstanceOf(AuthGuard);
      expect(new guards[1]()).toBeInstanceOf(RoleGuard);
    });
  });

  describe('Create', () => {
    test('create method', async () => {
      const result = await userController.create(createUserDTO);

      expect(result).toEqual(UserEntityList[0]);
    });
  });

  describe('Read', () => {
    test('list create', async () => {
      const result = await userController.list();

      expect(result).toEqual(UserEntityList);
    });

    test('show create', async () => {
      const result = await userController.show(1);

      expect(result).toEqual(UserEntityList[0]);
    });
  });

  describe('Update', () => {
    test('update method', async () => {
      const result = await userController.update(updatePutUserDTO, 1);

      expect(result).toEqual(UserEntityList[0]);
    });

    test('updatePartial method', async () => {
      const result = await userController.updatePartial(updatePutUserDTO, 1);

      expect(result).toEqual(UserEntityList[0]);
    });
  });

  describe('Delete', () => {
    test('delete method', async () => {
      const result = await userController.delete(1);

      expect(result).toEqual({ success: true });
    });
  });
});
