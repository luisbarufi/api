# Param Decorators

O Nest já nos oferece um conjunto de decoradores de parâmetros úteis para usar junto com os manipuladores de rota HTTP, são eles:

- @Request(), @Req()  
- @Response(), @Res()  
- @Next()  
- @Session()  
- @Param()  
- @Body()  
- @Query()  
- @Headers  
- @Ip()  
- @HostParam()  

# Custom Decorators

Nós também podemos criar os nossos decoradores personalizados.

Isso pode ser útil para obtermos informações formatadas que serão comuns em nossa aplicação, como por exemplo os dados do usuário que está logado, permissões contidas em um token de acesso ou parâmetros de paginação e filtros.
