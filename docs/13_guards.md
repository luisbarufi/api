# Guards

No Nest os Guards são classes com o decorator `@Injectable()` e devem implementar a interface `CanActivate`.

Os Guards tem uma única responsabilidade de determinar se uma solicitação `Request` pode ser tratada pelo manipulador de rota ou não.

Este recurso é muito útil para criarmos rotas que só podem ser obtidas respostas caso o cliente esteja autenticado e/ou tenha permissões suficientes.
