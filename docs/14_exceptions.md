# Exceptions

No Nest as Exceptions ou exceções são capturadas automaticamente por uma camada da aplicação que é responsável por transformá-las em mensagens amigáveis.

Essas mensagens sempre irão ser respondidas como um objeto JSON contendo o Status Code HTTP e uma mensagem descrevendo de forma resumida o código de status.

Embora possamos usar as exceções que já existem no Nest, ainda podemos criar exceções personalizadas criando uma classe que deve se estender da classe `HttpException`.

# Exceptions Filters

Além de personalizar exceções, podemos criar filtros de exceções que deverão ser classes com o decorador `@Catch(T)`, onde o `T` é a exceção que estamos filtrando.

Essa classe deve implementar a interface `ExceptionFilter` que obrigará a declaração do método `catch` que nos dará acesso a exceção e o host que pode por exemplo nos fornecer o contexto de execução com o `Request` e `Response`.

# Built-in Exceptions

Já está disponível para pronto uso várias exceções comuns que seguem o padrão do protocolo HTTP:

- BadRequestException  
- UnauthorizedException  
- NotFoundException  
- ForbiddenException  
- NotAcceptableException  
- RequestTimeoutException  
- ConflictException  
- GoneException  
- HttpVersionNotSupportedException  
- PayloadTooLargeException  
- UnsupportedMediaTypeException  
- UnprocessableEntityException  
- InternalServerErrorException  
- NotImplementedException  
- ImATeapotException  
- MethodNotAllowedException  
- BadGatewayException  
- ServiceUnavailableException  
- GatewayTimeoutException  
- PreconditionFailedException  
