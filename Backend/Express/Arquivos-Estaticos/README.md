<h1>Retornando Arquivos Estáticos com Express</h1>

<h2>Introdução</h2>

<p>Retornar arquivos estáticos, como CSS, JavaScript, imagens e outros assets, em um servidor HTTP usando o Express, um framework web para Node.js. Retornar arquivos estáticos é uma tarefa comum no desenvolvimento web, pois os sites e aplicativos modernos dependem desses arquivos para fornecer estilos, interatividade e recursos multimídia.</p>

<h2>Configurando o Projeto</h2>

<p>Siga estas etapas:</p>
<ol>
    <li>Crie um novo diretório para o projeto e acesse-o no terminal.</li>
    <li>Inicialize o projeto com <code>npm init -y</code>.</li>
    <li>Instale o Express com <code>npm install express</code>.</li>
</ol>

<p>Depois de instalar as dependências, crie um novo arquivo <code>index.js</code> na raiz do projeto. Este será o arquivo principal do servidor.</p>

<h2>Criando o Servidor Express</h2>

<p>No arquivo <code>index.js</code>, siga estas etapas para criar um servidor Express básico:</p>

<ol>
    <li>Importe o Express com <code>const express = require('express')</code>.</li>
    <li>Crie uma instância do aplicativo Express com <code>const app = express()</code>.</li>
    <li>Configure o servidor para escutar em uma porta específica, como 3000, com <code>app.listen(3000, () =&gt; console.log('Servidor iniciado'))</code>.</li>
</ol>

<p>Seu arquivo <code>index.js</code> deve ficar assim:</p>

<pre><code class="language-javascript">const express = require('express');const app = express();app.listen(3000, () =&gt; console.log('Servidor iniciado'));</code></pre>

<p>Agora, você pode executar o servidor com <code>node index.js</code> e acessar <code>http://localhost:3000</code> no navegador. No entanto, você ainda não verá nada, pois não configuramos nenhuma rota.</p>

<h2>Servindo Arquivos Estáticos</h2>

<p>O Express fornece um middleware interno chamado <code>express.static</code> que serve arquivos estáticos de um diretório específico. Para usá-lo, siga estas etapas:</p>

<ol>
    <li>Crie um diretório chamado <code>public</code> na raiz do projeto. Este será o local onde armazenaremos nossos arquivos estáticos.</li>
    <li>No arquivo <code>index.js</code>, importe o middleware <code>express.static</code> com <code>const path = require('path')</code>.</li>
    <li>Configure o middleware para servir arquivos da pasta <code>public</code> com <code>app.use(express.static(path.join(__dirname, 'public')))</code>.</li>
</ol>

<p>Seu arquivo <code>index.js</code> deve ficar assim:</p>

<pre><code class="language-javascript">const express = require('express');const path = require('path');const app = express();app.use(express.static(path.join(__dirname, 'public')));app.listen(3000, () =&gt; console.log('Servidor iniciado'));</code></pre>

<p>Agora, qualquer arquivo que você colocar na pasta <code>public</code> será servido pelo Express. Por exemplo, se você criar um arquivo <code>public/teste.txt</code> com o conteúdo &quot;Hello World&quot;, poderá acessá-lo em <code>http://localhost:3000/teste.txt</code>.</p>

<h2>Servindo HTML, CSS e JavaScript</h2>

<p>Para servir arquivos HTML, CSS e JavaScript, siga estas etapas:</p>

<ol>
    <li>Crie uma pasta <code>views</code> dentro da pasta <code>public</code> para armazenar seus arquivos HTML.</li>
    <li>Crie um arquivo <code>index.html</code> dentro da pasta <code>views</code> com algum conteúdo HTML básico.</li>
    <li>Crie uma pasta <code>assets</code> dentro da pasta <code>public</code> para armazenar seus arquivos CSS e JavaScript.</li>
    <li>Crie um arquivo <code>style.css</code> dentro da pasta <code>assets</code> com algum estilo CSS.</li>
    <li>Crie um arquivo <code>script.js</code> dentro da pasta <code>assets</code> com algum código JavaScript.</li>
    <li>No arquivo <code>index.html</code>, vincule os arquivos CSS e JavaScript usando caminhos relativos, como <code>&lt;link rel=&quot;stylesheet&quot; href=&quot;/assets/style.css&quot;&gt;</code> e <code>&lt;script src=&quot;/assets/script.js&quot;&gt;&lt;/script&gt;</code>.</li>
</ol>

<p>Seu projeto deve ter a seguinte estrutura:</p>

<pre><code>projeto/  node_modules/  public/    assets/      style.css      script.js    views/      index.html  index.js  package.json</code></pre>

<p>Agora, quando você acessar <code>http://localhost:3000/</code>, o Express servirá o arquivo <code>index.html</code>, juntamente com os arquivos CSS e JavaScript vinculados.</p>

<h2>Renderizando Arquivos HTML</h2>

<p>Embora possamos servir arquivos HTML diretamente da pasta <code>public</code>, geralmente é melhor renderizá-los a partir de rotas no Express. Isso nos dá mais controle sobre o conteúdo e permite a geração dinâmica de páginas.</p><p>Para renderizar um arquivo HTML a partir de uma rota, siga estas etapas:</p>

<ol>
    <li>No arquivo <code>index.js</code>, importe o módulo <code>path</code> com <code>const path = require('path')</code>.</li>
    <li>Defina uma rota com <code>app.get('/', (req, res) =&gt; { ... })</code>.</li>
    <li>Dentro da função de callback da rota, use <code>res.sendFile(path.join(__dirname, 'public', 'views', 'index.html'))</code> para enviar o arquivo HTML.</li>
</ol>

<p>Seu arquivo <code>index.js</code> deve ficar assim:</p>

<pre><code class="language-javascript">const express = require('express');const path = require('path');const app = express();app.use(express.static(path.join(__dirname, 'public')));app.get('/', (req, res) =&gt; {  res.sendFile(path.join(__dirname, 'public', 'views', 'index.html'));});app.listen(3000, () =&gt; console.log('Servidor iniciado'));</code></pre>

<p>Agora, quando você acessar <code>http://localhost:3000/</code>, o Express renderizará o arquivo <code>index.html</code> a partir da rota definida.</p>

<h2>Conclusão</h2>

<p>Lembre-se de que este é apenas o início. O Express oferece muitos outros recursos poderosos, como middlewares, gerenciamento de rotas, renderização de modelos e muito mais. Continue explorando a documentação oficial do Express e praticando para aprimorar suas habilidades de desenvolvimento web com Node.js.</p>