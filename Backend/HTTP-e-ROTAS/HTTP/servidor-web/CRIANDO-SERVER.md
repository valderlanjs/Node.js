<h1>Criando o Primeiro Servidor HTTP com Node.js</h1>

<h2>Introdução</h2>

<p>Aqui vou explorar o módulo nativo <code>http</code> do Node.js, que permite criar um servidor web básico sem a necessidade de instalar dependências externas. Esse é um excelente ponto de partida para compreender os conceitos fundamentais do desenvolvimento web com Node.js antes de avançar para frameworks mais robustos, como o Express.js.</p>

<h2>Configurando o Ambiente</h2>

<p>Antes de começarmos, certifique-se de ter o Node.js instalado em seu sistema. Você pode baixá-lo gratuitamente em https://nodejs.org.</p>

<p>Em seguida, crie uma nova pasta para o projeto e abra-a em seu editor de código preferido.</p>

<h2>Criando o Servidor HTTP</h2>

<ol>
    <li>No VS Code, crie um novo arquivo chamado <code>server.js</code>.</li>
    <li>Importe o módulo <code>http</code> do Node.js no início do arquivo:</li>
</ol>

<pre><code class="language-javascript">const http = require('http');</code></pre>

<ol start="3">
    <li>Crie uma instância do servidor HTTP usando o método <code>createServer()</code> do módulo <code>http</code>. Este método aceita uma função de callback que será executada sempre que uma nova requisição for recebida pelo servidor:</li>
</ol>

<pre><code class="language-javascript">const server = http.createServer((req, res) =&gt; {  // Lógica para lidar com as requisições e respostas});</code></pre>

<p>A função de callback recebe dois parâmetros: <code>req</code> (a requisição recebida) e <code>res</code> (a resposta a ser enviada).</p>

<ol start="4">
    <li>Dentro da função de callback, você pode acessar e manipular os dados da requisição e definir a resposta a ser enviada. Por exemplo, você pode enviar uma mensagem simples:</li>
</ol>

<pre><code class="language-javascript">const server = http.createServer((req, res) =&gt; {  res.statusCode = 200; // Código de status HTTP 200 (OK)  res.setHeader('Content-Type', 'text/plain');  res.end('Olá, mundo!');});</code></pre>

<p>Neste exemplo, estamos definindo o código de status HTTP como 200 (OK), configurando o cabeçalho <code>Content-Type</code> como <code>text/plain</code> (texto simples) e enviando a mensagem &quot;Olá, mundo!&quot; como resposta.</p>

<ol start="5">
    <li>Por fim, inicie o servidor usando o método <code>listen()</code> e especifique a porta em que ele deve escutar:</li>
</ol>

<pre><code class="language-javascript">const port = 3000; // Porta em que o servidor irá escutarserver.listen(port, () =&gt; {  console.log(`Servidor rodando em http://localhost:${port}`);});</code></pre>

<p>Neste exemplo, o servidor está configurado para escutar na porta 3000. Quando o servidor for iniciado com sucesso, a mensagem &quot;Servidor rodando em http://localhost:3000&quot; será exibida no console.</p>

<h2>Executando o Servidor</h2>

<p>Para executar o servidor, abra um terminal na pasta do projeto e execute o seguinte comando:</p>

<pre><code>node server.js</code></pre>

<p>Você verá a mensagem &quot;Servidor rodando em http://localhost:3000&quot; no console. Agora, abra um navegador da web e acesse <code>http://localhost:3000</code>. Você deverá ver a mensagem &quot;Olá, mundo!&quot; exibida na página.</p>

<h2>Manipulando Requisições e Respostas</h2>

<p>O módulo <code>http</code> do Node.js fornece acesso aos objetos <code>req</code> (requisição) e <code>res</code> (resposta), que contêm informações úteis e métodos para manipular as requisições e respostas HTTP.</p>

<h3>Objeto <code>req</code> (Requisição)</h3>

<p>O objeto <code>req</code> representa a requisição HTTP recebida pelo servidor. Ele contém informações como o método HTTP utilizado (GET, POST, PUT, DELETE, etc.), os cabeçalhos da requisição, os parâmetros de consulta (query string) e os dados do corpo da requisição (para requisições POST, PUT, etc.).</p>

<p>Algumas propriedades e métodos úteis do objeto <code>req</code> incluem:</p>

<ul>
    <li><code>req.method</code>: O método HTTP utilizado na requisição (GET, POST, PUT, DELETE, etc.).</li>
    <li><code>req.url</code>: A URL completa da requisição.</li><li><code>req.headers</code>: Um objeto contendo os cabeçalhos da requisição.</li>
    <li><code>req.query</code>: Um objeto contendo os parâmetros de consulta (query string).</li>
</ul>

<h3>Objeto <code>res</code> (Resposta)</h3>

<p>O objeto <code>res</code> representa a resposta HTTP que será enviada pelo servidor. Ele fornece métodos para definir o código de status, os cabeçalhos da resposta e o corpo da resposta.</p><p>Alguns métodos úteis do objeto <code>res</code> incluem:</p>

<ul>
    <li><code>res.statusCode</code>: Define o código de status HTTP da resposta.</li>
    <li><code>res.setHeader(name, value)</code>: Define um cabeçalho de resposta.</li>
    <li><code>res.getHeader(name)</code>: Obtém o valor de um cabeçalho de resposta.</li>
    <li><code>res.write(data)</code>: Envia uma parte do corpo da resposta.</li>
    <li><code>res.end(data)</code>: Envia o restante do corpo da resposta e finaliza a resposta.</li>
</ul>

<h2>Roteamento Básico</h2>

<p>No exemplo anterior, enviamos a mesma resposta para todas as requisições recebidas pelo servidor. No entanto, em aplicações web reais, geralmente precisamos lidar com diferentes rotas (URLs) e enviar respostas diferentes com base na rota acessada.</p>

<p>Para ilustrar um exemplo básico de roteamento, vamos modificar o código do servidor para lidar com três rotas diferentes: a página inicial (<code>/</code>), a página de artigos (<code>/artigos</code>) e qualquer outra rota não mapeada.</p>

<pre><code class="language-javascript">const http = require('http');const server = http.createServer((req, res) =&gt; {  const path = req.url; // Obtém a rota (URL) da requisição  switch (path) {    case '/':      res.statusCode = 200;      res.setHeader('Content-Type', 'text/plain');      res.write('Você está na página inicial.');      res.end();      break;    case '/artigos':      res.statusCode = 200;      res.setHeader('Content-Type', 'text/plain');      res.write('Você está na página de artigos.');      res.end();      break;    default:      res.statusCode = 404;      res.setHeader('Content-Type', 'text/plain');      res.write('Caminho não encontrado.');      res.end();  }});const port = 3000;server.listen(port, () =&gt; {  console.log(`Servidor rodando em http://localhost:${port}`);});</code></pre>

<p>Neste exemplo, utilizamos a propriedade <code>req.url</code> para obter a rota (URL) da requisição. Em seguida, usamos uma instrução <code>switch</code> para verificar a rota e enviar a resposta apropriada:</p>

<ul>
    <li>Se a rota for <code>/</code>, enviamos a mensagem &quot;Você está na página inicial.&quot;.</li>
    <li>Se a rota for <code>/artigos</code>, enviamos a mensagem &quot;Você está na página de artigos.&quot;.</li>
    <li>Para qualquer outra rota, enviamos um código de status HTTP 404 (Não Encontrado) e a mensagem &quot;Caminho não encontrado.&quot;.</li>
</ul>

<p>Observe que, para cada caso, definimos o código de status HTTP apropriado, configuramos o cabeçalho <code>Content-Type</code> e enviamos a resposta usando <code>res.write()</code> e <code>res.end()</code>.</p>

<h2>Próximos Passos</h2>

<p>Aqui dá para aprender a criação de um servidor HTTP com Node.js usando o módulo nativo <code>http</code>. No entanto, esse é apenas o início. Em aplicações web reais,  provavelmente será necessário lidar com requisições mais complexas, rotas dinâmicas, middleware, templates de renderização, gerenciamento de sessões e muito mais.</p>

<p>Para facilitar o desenvolvimento de aplicações web mais robustas, é recomendado utilizar um framework web como o Express.js. O Express.js é um framework minimalista e flexível que fornece recursos adicionais, como roteamento avançado, middleware, gerenciamento de requisições e respostas, e integração com mecanismos de template.</p>