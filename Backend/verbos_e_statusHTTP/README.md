# Verbos e Status HTTP

**HTTP** é um protocolo de comunicação Web. Esse protocolo possui "verbos".

- Estes verbos ajudam a identificar que tipo de ação queremos realizar numa determinada URL.
- Uma URL pode ter mais de um verbo e executar uma ação para cada um. Por exemplo: **GET/users** pode executar uma ação diferente de **POST/users**.

### HTTP possui vários verbos, mas os principais para as URLs são:

- **GET** - utilizados para solicitar dados.
- **POST** - utilizados para cadastrar dados.
- **PUT/PATCH** - utilizados para atualizar algum dado.
- **DELETE** - utilizado para deletar algum dado.

###  Um verbo junto com uma URL forma uma requisição

## Status de uma requisição HTTP

- Os status ajudam a definir como uma requimsição HTTP foi processada.

- Ao fazer uma requisição, o cliente sempre terá uma resposta.

- Os satus são códigos numéricos e cada um possui uma representação.

- Os status **100** são apenas respostas informativas ao cliente.

- Os da família **200**, são quando uma requisição foi processada com sucesso.

    - 200 - Requisição processada com sucesso, normalmente em resposta a um **GET**.
    - 201 - Registro criado com sucesso, normalmente em resposta a um **POST**.

- Os da família **300** apresentam mensagens de redirecionamento.

- Os da família **400** apresentam mensagem de erro que ocorreram no cliente.

    - 400 - Sintaxe inválida.
    - 401 - informa que o cliente precisa se autenticar.
    - 403 - Informa que o cliente, apesar de autenticado, não tem acesso permitido ao recurso.
    - 404 - Informação não encontrada no servidor.
    - 422 - Requisição bem formada, mas possui erros semânticos.

- Os da família 500 representam dados no servidor.