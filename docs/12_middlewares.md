# Middlewares

No Nest os `Middlewares` são funções que são chamadas antes do manipulador de rota.

Essas funções podem ser declaradas em uma classe com o decorador `@Injectable()` e implementando a interface `NestMiddleware` que irá obrigar a declaração da função middleware com o nome `use`.

Essas funções têm acesso aos objetos `Request` e `Response` e a função `next()` que irá chamar a próxima função middleware ou por fim o manipulador de rota, seguindo assim o design pattern “Chain of Responsibility”.

Com o uso dos middlewares podemos executar qualquer código, como por exemplo fazer alterações nos objetos de solicitação ou resposta, encerrar o ciclo de solicitação ou chamar a próxima função de middleware.

Visto que os middlewares são chamados sempre antes de uma rota é possível aplicá-los em algumas ou todas as rotas da nossa aplicação. E ainda também filtrar rotas que não devem usar o middleware.
