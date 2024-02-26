# Decoradores

Em NestJS, os decoradores são usados extensivamente para realizar várias tarefas, como definir módulos, controladores, provedores e muito mais. Decoradores são simplesmente funções que modificam a estrutura de classes, métodos, propriedades, etc. Eles são usados para adicionar metadados a essas estruturas, o que o NestJS usa para configurar e operar a aplicação.


```typescript

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

```

```typescript

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

```

```typescript

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

```
