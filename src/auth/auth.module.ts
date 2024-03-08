import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [
    JwtModule.register({
      secret: `U2|;cfU-^6uG@nYUwslut,xtdp3DmP$G`,
    }),
    UserModule,
    PrismaService,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
