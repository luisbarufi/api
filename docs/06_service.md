# Service

Em NestJS, o conceito de "Service" refere-se a uma classe que contém a lógica de negócios da sua aplicação. Os serviços são responsáveis por lidar com operações específicas, como acessar o banco de dados, executar lógica de negócios complexa ou integrar-se a sistemas externos.

Os serviços em NestJS são injetáveis, o que significa que podem ser facilmente utilizados em outros componentes, como controladores, módulos ou outros serviços, por meio do mecanismo de injeção de dependência do NestJS.

Quando você cria um serviço em NestJS, geralmente segue os seguintes passos:

1. **Criar o Serviço**: Você pode criar um serviço usando o comando de linha de comando do NestJS (`nest g service nome-do-servico`) ou simplesmente criando manualmente um arquivo TypeScript para o serviço.

2. **Implementar a Lógica de Negócios**: Dentro do serviço, você implementa as operações necessárias para atender aos requisitos da sua aplicação. Isso pode incluir chamadas ao banco de dados, operações de arquivo, chamadas de API externas, etc.

3. **Injetar o Serviço**: Depois de criar o serviço, você pode injetá-lo em outros componentes do NestJS, como controladores, utilizando a anotação `@Injectable()` no serviço e o mecanismo de injeção de dependência do NestJS.


```typescript
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
```
