# Node.js

## O que é o Node.js?

* É um ambiente de execução de código JavaScript fora do navegador.
    - Ele é baseado no motor V8 do google Chrome. (desenvolvido usando o núcleo do chrome)
    - Desenvolvido por Ryan Dahl, o Node permite a execução de código JavaScript no lado servidor. (aqui onde o javascript começa a ficar presente no backend na programação.)
    - Desenvolvido utilizando a linguagem C++, mais perfomática e de nível mais baixo.

* Principais características:
    - É um projeto open-source (de código aberto) e possui uma comunidade ativa que contribui com pacotes e soluções.
    - Inclui o **npm**, gerenciador de pacotes do Node.js que facilita a instalação e gerenciamento de bibliotecas e módulos.
    - É baseado em um modelo de evente não bloqueante que permite a execução eficiente de operações de I/O. 
    (No Node.js, a maioria das operações de I/O(Input/Output) é não bloqueante, o que significa que o código não precisa esperar a conclusão de uma operação antes de continuar.)

* Casos de uso comuns: 
    - **Ferramentas de linha de comandos:**
        - Desenvolvimento de utilitários de linha de comando para automação. (vite)
    - **Integração com Banco de Dados:** Aplicações e serviços web que necessitam utilizar banco de dados SQL ou NoSQL(como MySQL, PostgreSQL, MongoDB, Redis, etc)
    - **Servidores web:** Desenvolvimento de servidores web escaláveis e eficientes.
    - **APIs RESTful:** Criação de APIs para serviços web.
    - **Aplicações em Tempo Real:** Como bate-papo em tempo real, jogos e streaming de dados.

* Sistema de módulos:
    - O Node.js utiliza um sistema de módulos que permite modularização do código e reutilização de bibliotecas.
    - Seu principal sistema de módulos é o **CommonJS,**utilizado desde as primeiras varsões, mas o suporte aos ESModules está sendo adotado lentamente.
    - É possível utilizar módulos de terceiros do npm, mas o Node.js também conta com seus próprios módulos nativos (como **http**, **fs**, **os**).


# event loop

## O que é?

- É um conceito fundamental no Node.js que permite que o JavaScript seja executado de forma não bloqueante e eficiente.

- É a base da assincronia e da alta concorrência no Node.js.(executar várias tarefas de forma paralela)


### Eventos e Callbacks

- Eventos são a base do Event Loop. Exemplos de eventos incluem solicitações HTTP, temporizadores, eventos do sistema, ec.

- Callbacks são funções que são registradas para serem executadas quando um evento ocorrer.

- Os eventos são registrados em elementos, como um objeto HTTP Server, que emite eventos quando as solicitações são recebidas.

**Exemplo de código**

    const fs = require('node:fs');
    console.log('Início);

    fs.readFile('arquivo.txt', 'utf-8', (err, data) => {
        if(err) throw err;
        console.log(data)
    });

    console.log('Fim)

Nesse exemplo, o resultado será: 

        Início
        Fim
        Conteúdo do arquivo.txt

Por que essa operação: 

        fs.readFile('arquivo.txt', 'utf-8', (err
         data) => {
            if(err) throw err;
            console.log(data)
        });
É uma operação não bloqueante, ou seja, assíncrona, então depois que a leitura do arquivo terminou de ser feita, ele retornou o conteúdo. Mesmo que antes disso ele tenha jaá executado o 'Fim'.


### Funcionamento básico

- Gerencia a execução de tarefas assíncronas em JavaScript.

- Permite que várias operações sejam executadas concorrentemente sem bloquear a thread principal - (permite trabalhar com várias threads).

- Opera em loop infinito, constantemente verificando e executando tarefas na fila de eventos.

### Componentes

- **Call Stack (Pilha de Chamadas):** Responsável por rastrear as funções em execução e aguardando para serem chamadas.

 ![Event Loop Node.js](https://cdn.hashnode.com/res/hashnode/image/upload/v1620879089779/_yuMWLuic.gif?auto=format,compress&gif-q=60&format=webm)

- **Callback Queue (Fila de Callbacks):** Armazena as funções a serem executadas quando o Call Stack estiver  vazio.

![Event Loop Node.js](https://miro.medium.com/v2/resize:fit:720/format:webp/0*OvjuaHuqb0ZrTWhF.gif)

- **Event Loop:** Coordena a transferência de funções da Callback Queue para a Call Stack. Assim que a Call Stack desocupar, ele pega da fila para colocar na call stack assim que possível.

![Event Loop Node.js](https://miro.medium.com/v2/resize:fit:720/format:webp/0*3Soz0VoTAx2H9wvd.gif)
    
### Porém o event loop do Node.js, funciona de forma um pouco mais específica.

![Event Loop Node.js](https://miro.medium.com/v2/resize:fit:1358/1*GcbS54bJHWgvLDbUOhj_Eg.png)


**Explicação da imagem:** 
1. A aplicação está recebendo várias requisições de vários clientes, na Event Queue, no qual está enfileirando os eventos.

2. E o event loop do Node.js está funcionando infinitamento, e dá para vê que ele é single threaded, o event loop em si, funciona em uma única thread, porém para ele poder ter as operações não bloqueantes, ou seja, não ficar esperando as conclusão das tarefas.

3. Assim que ele recebe a requisição, ela é jogada, na caixinha do diagrama da imagem, chamada de Thread Pool, que é um conjunto de várias trheads, ou seja, já não é mais single thread, isso é interno do C++, do próprio C++, então ele joga essas tarefas para serem processadas em várias threads, por que o C++ permite trabalhar com várias threads.

4. Assim que isso for concluido, ele vai emitir uma resposta via Callback, e o event loop vai seguir o funcionamento e emitir uma resposta para o cliente.

5. Então vê que, o event loop, vai ser responável por tirar as coisas da fila, e jogar na pilha para ser executado, enquanto ele é executado, ele é gerenciado pela a thread pool, que é um conjunto de várias threads, interno do C++, para poder processar as coisas de forma não bloqueante. 

**Por isso que tem várias requisições sendo recebidas, quase que paralelamente, e vai processando de forma muito mais performática, com todo o gerenciamento sendo feito pelos componentes internos do Node.js.**


## Alguns dos assuntos estudados no Node.js, nessa pasta

* [Módulos no node.js](Introdução/modulos/)
* [Lidando com caminhos usando "path"](Introdução/caminhos_path/)
* [Informações SO](Introdução/informacoes_SO/)
* [Streams e buffers](Introdução/Streams_e_buffers/)
* [Interação no terminal](Introdução/manipulando_arquivos/)
* [Praticas](Introdução/Praticas/)
* [Backend](Backend/)
* [Verbos e status HTTP](verbos_e_statusHTTP/)
* [Servidor HTTP](servidor_HTTP/)
* [Arquitetura MVC](Arquitetura_MVC/)
* [Express](Express/)
* [Chain of Responsability](Chain_Responsability/)
* [Middlewares](Middlewares/)
* [Concentrando rotas](concentrando_rotas/)
* [Rotas POST, PUT, DELETE](Rotas_PUT_DELETE_POST/)
* [Parâmetros nas rotas](parametros_rotas/)
