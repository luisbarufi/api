# JWT

## O que é JWT?

JWT (JSON Web Token) é um padrão aberto RFC 7519 que fornece um método seguro para comunicar informações entre duas partes.

Um token JWT é uma string composta de 3 partes separadas pelo caractere ponto. Cada uma das partes respectivamente são:

- Header  
- Payload  
- Signature  

## Exemplo de JWT

eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwibmFtZSI6Ikhjb2RlIiwiaWF0IjoxNTE2MjM5MDIyfQ. i1VKMyI7KhNZUhwoZ14U-QMySEV6D_Tgea0WguIud9yX7QIpT15vI3B266wwUsboTOrO2hnHVPKhL6AqXYdURA

## Header

O `header` do token JWT é um JSON codificado em Base64 que contém a informação do algoritmo usado na criptografia da assinatura e o tipo do token.

Existem várias opções de algoritmos que são aceitos no padrão JWT. O mais comum atualmente é o HS256, mas você pode escolher outros para aumentar a segurança ou devido aos recursos disponíveis da linguagem de programação escolhida.

## Payload

O `payload` do token JWT também é um JSON codificado em Base64 que contém os dados de fato que você deseja transportar. Embora qualquer dado possa ser colocado nesta parte do token é importante frisar que a codificação Base64 é facilmente revertida, por isso qualquer informação colocada aqui não deve ser sensível ou crítica caso seja exposta.

Alguns nomes de chaves  no payload são reservados e ajudam o funcionamento da verificação do token, como por exemplo as chaves `iss`, `sub`, `aud`, `exp`, `nbf`, `iat` e `jti`.

“`iss`”: Esta chave que é a abreviação da palavra issuer serve para identificar o principal emissor do JWT e o seu uso é opcional.

“`sub`”: Esta chave que é a abreviação da palavra subject serve para identificar o principal assunto do JWT e o emissor deve encarar esse valor como exclusivo, o uso é opcional.

“`aud`”: Esta chave que é a abreviação da palavra audience serve para identificar o destinatário do token, o uso é opcional.

“`exp`”: Esta chave que é a abreviação da expressão expiration time serve para identificar o tempo de expiração do token, o uso é opcional.

“`nbf`”: Esta chave que é a abreviação da expressão not before serve para identificar o tempo de inicio da validade do token, seu uso é opcional.

“`iat`”: Esta chave que é a abreviação da expressão issued at serve para identificar o momento da criação do token e assim saber qual a sua idade, o seu uso é opcional.

“`jti`”: Esta chave que é a abreviação da expressão JWT ID serve para identificar de forma única um token, isso é útil para uma aplicação que possui mais de um emissor de tokens, o seu uso é opcional.

## Signature

A assinatura do token é a string em Base64 do resultado da criptografia com o algoritmo escolhido e identificado no header. A string que será criptografada é a string do header codificada em Base64 concatenada com um ponto e com a string codificada em Base64 do payload.

Isso fará com que qualquer alteração no header ou payload mude o valor da assinatura, que por sua vez só pode ser obtida de forma válida com uma chave secreta que apenas o emissor deve possuir.

