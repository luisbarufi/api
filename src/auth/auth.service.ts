import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
  ) {}

  async createToken() {
    // return this.jwtService.sign();
  }

  async checkToken() {
    // return this.jwtService.verify();
  }

  async login(email: string, password: string) {
    const user = await this.prisma.user.findFirst({
      where: {
        email,
        password,
      },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid password or email.');
    }

    return user;
  }

  async forget(email: string) {
    const user = await this.prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      throw new UnauthorizedException('Email is incorrect.');
    }

    // TODO: Send the email.

    return true;
  }

  // async reset(password: string, token: string) {
  //   // TODO: Validate the token.

  //   const id = 0;

  //   await this.prisma.user.update({
  //     where: { id },
  //     data: { password },
  //   });

  //   return true;
  // }
}
