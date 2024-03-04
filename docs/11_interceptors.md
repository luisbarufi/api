# Interceptors

No Nest os Interceptors são classes com o decorator `@Injectable()` e devem implementar a interface `NestInterceptor`.

A técnica de interceptadores é inspirada na AOP (Aspect Oriented Programming) que é a Programação Orientada a Aspectos.

Esta técnica possibilita adicionar lógicas extras antes ou depois da execução de métodos, transformar o resultado retornado de uma função ou exceção lançada pela função, estender o comportamento de uma função ou até mesmo substituir completamente uma função dependendo de condições específicas.

A interface `NestInterceptor` por sua vez irá obrigar a declaração do método `intercept` que receberá o contexto da execução (`ExecutionContext`) e o manipulador da chamada final (`CallHandler`).

# Uso dos Interceptors

Podemos usar os interceptadores em um controle, método ou até mesmo globalmente em nossa aplicação.

Para isso usamos o decorador `@UseInterceptors()` ou o método `useGlobalInterceptors` da nossa aplicação na função bootstrap.
