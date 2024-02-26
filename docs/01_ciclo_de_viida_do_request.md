# Ciclo de Vida do Request

Quando o NestJS recebe um request, está solicitação entra por uma linha de processamento onde cada etapa recebe um nome diferente e tem um objetivo.

1 - Request
2 - Validação
3 - Modificação
4 - Response

Em geral o ciclo de vida completo de uma solicitação em ordem é:

01 - Incoming request
02 - Globally bound middleware
03 - Module bound middleware
04 - Global guards
05 - Route guards
07 - Global interceptors (pre-controller)
08 - Controller interceptors (pre-controller)
09 - Route interceptors (pre-controller)
10 - Global pipes
11 - Controller pipes
12 - Route pipes
13 - Route parameter pipes
14 - Controller (method handler)
15 - Service (if exists)
16 - Route interceptor (post-request)
17 - Controller interceptor (post-request)
18 - Global interceptors (post-request)
19 - Exception filters (route, then controller, then global)
20 - Server response
