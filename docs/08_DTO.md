# O que é DTO?

DTO (Data Transfer Object) significa Objeto de Transferência de Dados e é um padrão de projeto de software usado para transferir dados em uma aplicação de um ambiente para outro.

Normalmente obtemos um objeto de dados ao acessar um banco de dados ou no `NestJS` podemos obter um objeto de dados recebido de um request.

# Validação

Ao usar o padrão de DTO facilitamos a validação de dados, uma vez que podemos verificar e até alterar os dados que estão em um objeto. Ou até mesmo lançar uma exceção caso o objeto não possua a estrutura ou os tipos de dados que nós estamos esperando.

No `NestJS` podemos validar os Objetos de Transferência de Dados usando uma biblioteca de decorators chamada `class-validator` e alterar os dados usando outra biblioteca chamada `class-transformer`.

# Instalação

Após instalar as dependências com o comando:

```bash

npm i class-validator class-transformer

```
Devemos “ensinar” nossa aplicação a usar essas bibliotecas ao receber solicitações (Request). Essa configuração deve ser feita no bootstrap da nossa aplicação.

# Uso de DTO

Para usar o padrão de DTO é necessário criar a definição dos nossos objetos usando classes com os decoradores disponíveis de validação ou transformação.

É possível obter uma lista de todos decoradores na documentação da biblioteca `class-validator` no endereço: `https://github.com/typestack/class-validator#validation-decorators`

