import { AuthGuard } from '../guards/auth.guard';
import { guardMock } from '../testing/guard.mock';
import { AuthController } from './auth.controller';
import { authServiceMock } from '../testing/auth-service.mock';
import { fileServiceMock } from '../testing/file-service.mock';
import { TestingModule, Test } from '@nestjs/testing';
import { authLoginDTO } from '../testing/auth-login-dto.mock';
import { accessToken } from '../testing/acess-token.mock';
import { authRegisterDTO } from '../testing/auth-register-dto.mock';
import { authForgetDTO } from '../testing/auth-foget-dto.mock';
import { authResetDTO } from '../testing/auth-reset-dto.mock';
import { userEntityList } from '../testing/user-entity-list.mock';
import { getPhoto } from '../testing/get-photo.mock';

describe('AuthController', () => {
  let authController: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [authServiceMock, fileServiceMock],
    })
      .overrideGuard(AuthGuard)
      .useValue(guardMock)
      .compile();

    authController = module.get<AuthController>(AuthController);
  });

  test('must be able to validate the definition', () => {
    expect(authController).toBeDefined();
  });

  describe('Authentication flow', () => {
    test('login method', async () => {
      const result = await authController.login(authLoginDTO);

      expect(result).toEqual({ accessToken });
    });

    test('register method', async () => {
      const result = await authController.register(authRegisterDTO);

      expect(result).toEqual({ accessToken });
    });

    test('forget method', async () => {
      const result = await authController.forget(authForgetDTO);

      expect(result).toEqual({ success: true });
    });

    test('reset method', async () => {
      const result = await authController.reset(authResetDTO);

      expect(result).toEqual({ accessToken });
    });
  });

  describe('Authenticated routes', () => {
    test('me method', async () => {
      const result = await authController.me(userEntityList[0]);

      expect(result).toEqual(userEntityList[0]);
    });

    test('uploadPhoto method', async () => {
      const photo = await getPhoto();
      const result = await authController.uploadPhoto(userEntityList[0], photo);

      expect(result).toEqual(photo);
    });
  });
});