import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: `U2|;cfU-^6uG@nYUwslut,xtdp3DmP$G`,
    }),
  ],
})
export class AuthModule {}
