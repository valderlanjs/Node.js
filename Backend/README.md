<h1>O que é Back-end?</h1>

<p>O back-end é a parte do desenvolvimento web que lida com o servidor, banco de dados e toda a lógica por trás de um site ou aplicativo. Enquanto o front-end (parte visual que o usuário vê) é importante, o back-end é o que faz tudo funcionar.</p><p>Sem um back-end, sites e aplicativos não teriam funcionalidades além de mostrar informações estáticas. O back-end permite salvar, processar e recuperar dados, além de conectar o front ao banco de dados.</p>

<p>Algumas das principais tecnologias e linguagens de back-end incluem:</p>

<ul>
    <li>Node.js</li>
    <li>PHP</li>
    <li>Ruby</li>
    <li>Python</li>
    <li>Java</li>
    <li>C#</li>
</ul>

<p>O desenvolvedor back-end escreve códigos e lógicas que permitem o funcionamento completo de um sistema. Isso inclui desde a conexão ao banco de dados, passando pela definição de rotas e endpoints da API, até processamento em background e envio de e-mails.</p>

<h2>O que é Node.js?</h2>

<p>Node.js é uma plataforma de código aberto para executar códigos JavaScript no lado do servidor. Isso permite usar JS tanto no front quanto no back-end de uma aplicação.</p>

<p>O Node é muito popular porque utiliza JavaScript, uma linguagem dominante entre os desenvolvedores front-end. Isso diminui a curva de aprendizado de quem já conhece o JS.</p>

<p>Além disso, o Node se destaca por ser muito rápido, escalável e assíncrono. Isso significa que ele consegue lidar com muitas requisições ao mesmo tempo sem travar. Por isso é uma ótima opção para aplicações em tempo real.</p>

<p>Outras vantagens do Node.js:</p>

<ul>
    <li>Comunidade ativa e ecossistema rico de pacotes</li>
    <li>Fácil interação com bancos de dados não-relacionais como MongoDB</li>
    <li>Ideal para APIs REST, microsserviços e sites dinâmicos</li>
</ul>

<p>Alguns casos de uso comuns do Node:</p>

<ul>
    <li>APIs REST</li>
    <li>Apps em tempo real (chats, streaming etc)</li>
    <li>Sites de alto tráfego</li>
    <li>Ferramentas de linha de comando</li>
    <li>Web scraping</li>
    <li>Automação de tarefas</li>
</ul>

<h2>Por que Node.js é importante?</h2>

<p>O Node é uma das tecnologias back-end mais utilizadas atualmente. Algumas razões que explicam essa popularidade:</p>

<p><strong>1. Baseado em JavaScript</strong></p>

<p>Usar a mesma linguagem no front e back aumenta a produtividade dos times e diminui a curva de aprendizagem de novos membros.</p>

<p><strong>2. Assíncrono e rápido</strong></p>

<p>Graças à sua arquitetura assíncrona não-bloqueante, o Node consegue lidar com muitas requisições simultâneas sem perda de performance. Ideal para apps em tempo real.</p>

<p><strong>3. Ecossistema rico</strong></p>

<p>O npm (Node Package Manager) possui mais de 1 milhão de pacotes que agilizam o desenvolvimento. É fácil integrar bibliotecas de terceiros.</p>

<p><strong>4. Facilidade com bancos não-relacionais</strong></p>

<p>O Node tem ótima integração com bancos NoSQL como MongoDB e Redis, muito populares em apps modernos.</p>

<p><strong>5. Microsserviços e escalabilidade</strong></p>

<p>A arquitetura modular do Node trabalha bem com abordagens de microsserviços, permitindo escalar diferentes partes da aplicação.</p>

<p>Portanto, dominar o Node.js é essencial para qualquer desenvolvedor back-end que queira entregar aplicações modernas, escaláveis e de alta performance.</p>

<h2>Como rodar códigos no servidor com Node.js</h2>

<p>Antes de mais nada, é preciso ter o Node.js instalado na máquina. Você pode baixá-lo em nodejs.org.</p>

<p>Com o Node instalado, criamos arquivos JavaScript com a extensão .js contendo nosso código back-end.</p>

<p>Por exemplo, um arquivo app.js com o seguinte código:</p>

<pre><code class="language-js">const http = require('http');const server = http.createServer((req, res) =&gt; {  res.write('Hello World');  res.end();});server.listen(3000);</code></pre>

<p>Para executar, basta abrir o terminal na pasta do projeto e digitar:</p>

<pre><code>node app.js</code></pre>

<p>Isso vai inicializar o servidor e executar a aplicação na porta 3000. Agora o back-end já está no ar, aguardando requisições HTTP.</p>

<p>Podemos evoluir o exemplo acima para:</p>

<ul>
    <li>Ler parâmetros da requisição (route, query params etc)</li>
    <li>Interagir com banco de dados</li>
    <li>Renderizar templates HTML</li>
    <li>Retornar JSON</li>
    <li>Autenticar rotas</li>
    <li>E muito mais!</li>
</ul>

<p>Tudo isso utilizando JavaScript no lado do servidor.</p>

<h2>O que é ExpressJS?</h2>

<p>Express é o framework Node.js mais popular, utilizado por mais de 70% dos usuários Node.</p>

<p>Um framework fornece funcionalidades e recursos pré-construídos que agilizam o desenvolvimento, sem precisar reinventar a roda.</p>

<p>O Express, especificamente, é focado na criação de aplicações web e APIs REST. Seu lema é &quot;web applications made easy&quot; (aplicações web fáceis de fazer).</p>

<p>Alguns dos benefícios do ExpressJS:</p>

<ul>
    <li>Fácil de aprender e usar</li>
    <li>Ótimo suporte a rotas e requests HTTP</li>
    <li>Integração com diversos templates engines</li>
    <li>Muito leve e minimalista</li>
    <li>Ecossistema enorme de pacotes middleware</li>
    <li>Padronização na comunidade NodeJS</li>
</ul>

<p>Por ser tão simples e minimalista, o Express é altamente customizável para qualquer necessidade.</p>
<p>Uma aplicação básica Express se parece com:</p>
<pre><code class="language-js">const express = require('express');const app = express();app.get('/', (req, res) =&gt; {  res.send('Hello World');});app.listen(3000); </code></pre>

<p>Bem parecido com o exemplo &quot;puro&quot; de Node que vimos antes. A grande diferença é que o Express torna muito mais simples lidar com requests, responses, rotas e middlewares.</p>

<h2>O que é REST e Rotas?</h2>

<p>REST (Representational State Transfer) é um estilo de arquitetura muito usado na web, especialmente em APIs.</p>

<p>Uma API RESTful expõe endpoints (URLs) que representam recursos. A manipulação desses recursos é feita por operações padronizadas dos protocolos HTTP:</p>

<ul>
    <li><strong>GET</strong>: Lê dados de 1 ou mais registros</li>
    <li><strong>POST</strong>: Cria um novo registro</li>
    <li><strong>PUT</strong>: Atualiza um registro existente</li>
    <li><strong>PATCH</strong>: Atualiza parte de um registro</li>
    <li><strong>DELETE</strong>: Remove 1 ou mais registros</li>
</ul>

<p>Por exemplo, em uma API de gerenciamento de produtos, poderíamos ter:</p>

<pre><code>GET /api/products (lê todos produtos)GET /api/products/1 (lê dados do produto de id 1) POST /api/products (cria novo produto)PUT /api/products/1 (atualiza produto de id 1)PATCH /api/products/1 (atualiza parcialmente) DELETE /api/products/1 (remove produto 1)</code></pre>

<p>Já rotas mapeiam URLs para funções que são executadas quando aquele endpoint é acessado com um verbo HTTP específico.</p><p>Exemplo de rotas numa aplicação Express:</p>

<pre><code class="language-js">app.get('/produtos', getProducts); app.post('/produtos', createProduct);app.put('/produtos/:id', updateProduct);app.delete('/produtos/:id', deleteProduct);</code></pre>

<p>Onde getProducts, createProduct etc são funções JavaScript que lidam com a requisição e resposta.</p><h2>O que é MongoDB?</h2><p>MongoDB é um banco de dados NoSQL muito popular para aplicações web modernas. Ao invés de tabelas e linhas, como bancos relacionais, o MongoDB armazena dados em documentos no formato JSON.</p>

<p>Algumas vantagens do MongoDB:</p>

<ul>
    <li>Schema flexível e dinâmico</li>
    <li>Alto desempenho e horizontalmente escalável</li>
    <li>Fácil integração com Node.js e outros languages</li>
    <li>Ótimo para apps web, mobile e IoT</li>
    <li>Rico ecossistema de ferramentas</li>
    <li>Código aberto e gratuito</li>
</ul>

<p>O MongoDB é classificado como um banco NoSQL do tipo document store. Cada registro é um documento JSON com campos e valores.</p><p>Exemplo de documento:</p>

<pre><code class="language-json">{   &quot;_id&quot;: &quot;607cf06ce3dc62b3f4990415&quot;,   &quot;name&quot;: &quot;Camiseta Azul&quot;,    &quot;price&quot;: 29.9,   &quot;category&quot;: &quot;Camisetas&quot;,   &quot;size&quot;: &quot;P&quot;}  </code></pre>

<p>Podemos ter documentos com esquemas flexíveis, adicionando e removendo campos conforme necessário.</p><p>Principais recursos do MongoDB:</p>

<ul>
    <li>Collections (equivalente a tabelas em bancos relacionais)</li><li>Documents (equivalente a linhas)</li>
    <li>Rich queries, indexes e aggregations</li>
    <li>Replication e sharding para escalabilidade</li>
    <li>Transações ACID</li>
</ul>

<h2>Como integrar MongoDB com Node.js</h2>

<p>A integração entre MongoDB e Node.js é muito simples graças ao driver MongoDB oficial para Node.js, chamado mongodb.</p>

<p>Podemos instalá-lo via npm:</p>

<pre><code>npm install mongodb</code></pre>

<p>Exemplo de uso:</p>

<pre><code class="language-js">// import mongodb const MongoClient = require('mongodb').MongoClient;// conecta no bancoconst client = new MongoClient(uriDoBanco);// seleciona db e collection const db = client.db('nomeDoBanco');const products = db.collection('products');// insere documentoproducts.insertOne({name: &quot;Teclado&quot;, price: 69.9})// busca documentosproducts.find({}).toArray(callback);</code></pre>

<p>O código acima demonstra o básico para:</p>

<ul>
    <li>Conectar no MongoDB Atlas (ou outro cluster MongoDB)</li>
    <li>Selecionar um banco de dados e collection</li>
    <li>Inserir um documento (equivalente a INSERT do SQL)</li>
    <li>Buscar documentos (equivalente a SELECT do SQL)</li>
</ul>

<p>Podemos evoluir com:</p>

<ul>
    <li>Métodos de update, delete</li>
    <li>Queries mais avançadas</li>
    <li>Paginação, ordenação e projeção de campos</li>
    <li>Transações</li>
    <li>Aggregations (group by, count etc)</li>
</ul>

<p>E muito mais! Tudo de forma assíncrona e orientada a performance.</p>

<h2>Como renderizar templates no ExpressJS</h2>

<p>O Express por si só não possui capacidade de renderizar templates HTML. Para isso, utilizamos template engines compatíveis.</p><p>Os mais populares são Pug, Mustache e EJS. Por exemplo, para usar o EJS:</p>

<ol>
    <li>Instale o pacote EJS</li>
</ol>

<pre><code>npm install ejs</code></pre>

<ol start="2">
    <li>Defina o EJS como engine de views na aplicação</li>
</ol>

<pre><code class="language-js">app.set('view engine', 'ejs');</code></pre>

<ol start="3">
    <li><p>Crie uma pasta views com arquivos .ejs</p></li>
    <li><p>Renderize templates com res.render()</p></li>
</ol>

<pre><code class="language-js">app.get('/', (req, res) =&gt; {  res.render('index'); });</code></pre>

<p>No arquivo index.ejs podemos inserir HTML + lógica do EJS:</p>

<pre><code class="language-html">&lt;h1&gt;Lista de Produtos&lt;/h1&gt;&lt;% if(products.length &gt; 0) { %&gt;  &lt;% products.forEach(p =&gt; { %&gt;     &lt;div&gt; &lt;%= p.name %&gt; &lt;/div&gt;  &lt;% }) %&gt;&lt;% } else { %&gt;  &lt;p&gt;Nenhum produto encontrado!&lt;/p&gt; &lt;% } %&gt;</code></pre>

<p>Passando a variável products do Node/Express para o template.</p>

<p>Assim conseguimos mesclar a parte visual com a lógica do back-end.</p>

<h2>Como criar um To-do list com ExpressJS</h2>

<p>Vamos aplicar todo o conhecimento visto até aqui para criar um app de lista de tarefas (to-do list) com Node, Express e MongoDB.</p>

<ol>
    <li><p>Inicie um projeto Node com <code>npm init</code></p></li>
    <li><p>Instale as dependências</p></li>
</ol>

<pre><code>npm install express mongoose ejs</code></pre>

<ol start="3">
    <li>Configure o app Express básico em app.js</li>
</ol>

<pre><code class="language-js">const express = require('express');const app = express();app.set('view engine', 'ejs');app.listen(3000);</code></pre>

<ol start="4">
    <li><p>Crie uma rota GET / que renderiza a view index</p></li>
    <li><p>Na index, exiba um formulário para adicionar novas tasks</p></li>
    <li><p>Crie um model Task com mongoose para representar tasks</p></li>
</ol>

<pre><code class="language-js">const Task = mongoose.model('Task', {  name: String});</code></pre>

<ol start="7">
    <li><p>Lidar com submit do form criando nova task</p></li>
    <li><p>Listar todas as tasks salvas no MongoDB</p></li>
    <li><p>Criar rotas para marcar task como concluída e deletar tasks</p></li>
    <li><p>Formatar melhor a listagem de tasks com CSS</p></li>
</ol>
