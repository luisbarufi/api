# Controllers

No NestJS, um "controller" é uma classe responsável por lidar com as requisições HTTP que chegam à sua aplicação. Ele atua como um intermediário entre as requisições do cliente e a lógica de negócios da sua aplicação. Os controllers são parte fundamental da arquitetura de um aplicativo NestJS, que segue o padrão MVC (Model-View-Controller).

Em termos gerais, o controller recebe as requisições HTTP, extrai os dados necessários da requisição (como parâmetros da URL, corpo da requisição etc.), chama os serviços apropriados para processar esses dados e, em seguida, retorna uma resposta ao cliente (geralmente no formato de uma resposta HTTP com um código de status e, opcionalmente, um corpo de resposta).

Os controllers no NestJS são decorados com o @Controller() decorator, e cada método dentro do controller pode ser decorado com outros decoradores fornecidos pelo NestJS, como @Get(), @Post(), @Put(), @Delete(), entre outros, para indicar qual tipo de requisição HTTP o método manipula.

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
