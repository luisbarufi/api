# API

API (Application Programming Interface) significa Interface de Programação de Aplicação. Uma interface é a parte visível ou acessível para que uma aplicação possa ser usada ou acessada. No caso uma API é criada de uma forma que outras aplicações possam ser programadas para usar a aplicação.

# REST

REST (Representational State Transfer) significa Transferência Representacional de Estado e é um estilo de arquitetura de software ou convenções de regras para a criação de uma API servida na Web pois depende dos recursos do protocolo HTTP como por exemplo URI e Método.

# CRUD

CRUD (Create, Read, Update e Delete) significa criar uma aplicação que consiga criar, ler, alterar e excluir um registro que está gravado de forma persistente como em um banco de dados.

# CRUD em uma API REST

### Registro de Usuários

1- Criar
```shell
  POST /users
```
2- Ler
```shell
  GET /users
  GET /users/:id
```
3- Alterar
```shell
  PUT /users/:id
  PATCH /users/:id
```
4- Excluir
```shell
  DELETE /users/:id
```
