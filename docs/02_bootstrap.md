# Bootstrap

Em NestJS, o termo "bootstrap" é usado para descrever o processo de inicialização da aplicação Nest. O bootstrap é onde você configura e inicia a aplicação, incluindo a configuração de módulos, a conexão com bancos de dados, a definição de controladores e provedores, entre outras coisas

Ao criar uma aplicação NestJS, geralmente você terá um arquivo main.ts onde ocorre o bootstrap da aplicação. Este arquivo é o ponto de entrada da sua aplicação e é onde você configura e inicializa o módulo raiz da aplicação. Aqui está um exemplo básico de um arquivo main.ts em NestJS:


```typescript
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
```
Neste exemplo:

NestFactory.create() é usado para criar uma instância da aplicação, passando o módulo raiz AppModule.
app.listen(3000) inicia o servidor na porta 3000.
Dentro do AppModule, você pode definir os controladores, provedores e módulos que compõem a sua aplicação.

Então, o conceito de bootstrap em NestJS se resume a inicializar e configurar a aplicação Nest, permitindo que ela esteja pronta para lidar com as solicitações dos clientes.
