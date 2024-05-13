<h1>Renderizando HTML Dinâmico com EJS e Express</h1>

<h2>Introdução</h2>

<p>Renderizar arquivos HTML no servidor utilizando o EJS (Embedded JavaScript) junto com o Express, um framework web para Node.js. Isso permitirá criar páginas web dinâmicas, onde o conteúdo é gerado no servidor com base em dados e lógica de programação.</p>

<p>A capacidade de renderizar HTML dinâmico é uma das principais vantagens de usar um framework server-side como o Express. Ao contrário de arquivos estáticos, que sempre retornam o mesmo conteúdo, o HTML dinâmico pode ser personalizado e atualizado com base em diferentes fatores, como entrada do usuário, dados de banco de dados ou cálculos em tempo real.</p>

<h2>Configurando o Projeto</h2>

<p>Antes de começar a trabalhar com o EJS, precisamos configurar um novo projeto Node.js e instalar as dependências necessárias. Siga estes passos:</p>

<ol>
    <li>Crie uma nova pasta para o projeto e acesse-a no terminal.</li>
    <li>Inicialize um novo projeto Node.js executando <code>npm init -y</code>.</li>
    <li>Instale o Express e o EJS como dependências do projeto: <code>npm install express ejs</code>.</li>
</ol>

<p>Com as dependências instaladas, podemos começar a configurar o servidor Express e o mecanismo de visualização EJS.</p>

<h2>Configurando o Express e o EJS</h2>

<p>No arquivo principal do seu servidor (geralmente <code>app.js</code> ou <code>index.js</code>), importe o Express e o módulo <code>path</code> do Node.js:</p>

<pre><code class="language-javascript">const express = require('express');const path = require('path');const app = express();</code></pre>

<p>Em seguida, defina o EJS como o mecanismo de visualização padrão e especifique o diretório onde os arquivos de modelo EJS serão armazenados:</p>

<pre><code class="language-javascript">app.set('view engine', 'ejs');app.set('views', path.join(__dirname, 'views'));</code></pre>

<p>Aqui, estamos definindo o EJS como o mecanismo de visualização padrão e informando que os arquivos de modelo estarão localizados no diretório <code>views</code>.</p>

<h2>Renderizando um Arquivo EJS</h2>

<p>Com o Express e o EJS configurados, podemos criar nossa primeira rota e renderizar um arquivo EJS. Adicione o seguinte código ao seu arquivo principal:</p>

<pre><code class="language-javascript">app.get('/', (req, res) =&gt; {  res.render('index', { title: 'Página Inicial', message: 'Olá, Mundo!' });});app.listen(3000, () =&gt; {  console.log('Servidor rodando na porta 3000');});</code></pre>

<p>Neste exemplo, criamos uma rota para a URL raiz (<code>/</code>) que renderiza o arquivo <code>index.ejs</code> localizado no diretório <code>views</code>. Também passamos alguns dados para o modelo através do segundo argumento do método <code>res.render()</code>.</p>

<p>Agora, crie o arquivo <code>views/index.ejs</code> com o seguinte conteúdo:</p>

<pre><code class="language-html">&lt;!DOCTYPE html&gt;&lt;html lang=&quot;en&quot;&gt;&lt;head&gt;  &lt;meta charset=&quot;UTF-8&quot;&gt;  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;  &lt;title&gt;&lt;%= title %&gt;&lt;/title&gt;&lt;/head&gt;&lt;body&gt;  &lt;h1&gt;&lt;%= message %&gt;&lt;/h1&gt;&lt;/body&gt;&lt;/html&gt;</code></pre>

<p>Observe que estamos usando a sintaxe <code>&lt;%= variavel %&gt;</code> para exibir os valores das variáveis <code>title</code> e <code>message</code> passadas do servidor.</p>

<p>Inicie o servidor com <code>node app.js</code> (ou o nome do seu arquivo principal) e acesse <code>http://localhost:3000</code> no navegador. Você deverá ver a página renderizada com o título &quot;Página Inicial&quot; e a mensagem &quot;Olá, Mundo!&quot;.</p>

<h2>Trabalhando com Código JavaScript no EJS</h2>

<p>Uma das principais vantagens do EJS é a capacidade de incorporar código JavaScript diretamente nos arquivos de modelo. Isso permite criar conteúdo dinâmico com base em cálculos, condicionais e loops.</p>

<h3>Expressões JavaScript</h3>

<p>Para exibir o resultado de uma expressão JavaScript no HTML, use a sintaxe <code>&lt;%= expressao %&gt;</code>. Por exemplo:</p>

<pre><code class="language-html">&lt;p&gt;2 + 2 = &lt;%= 2 + 2 %&gt;&lt;/p&gt;</code></pre>

<p>Isso renderizará <code>&lt;p&gt;2 + 2 = 4&lt;/p&gt;</code> na página.</p>

<h3>Blocos de Código JavaScript</h3>

<p>Para executar blocos de código JavaScript sem exibir nada na página, use a sintaxe <code>&lt;% codigo %&gt;</code>. Por exemplo:</p>

<pre><code class="language-html">&lt;% const nome = 'João'; %&gt;&lt;h1&gt;Olá, &lt;%= nome %&gt;!&lt;/h1&gt;</code></pre>

<p>Isso renderizará <code>&lt;h1&gt;Olá, João!&lt;/h1&gt;</code> na página.</p>

<h3>Condicionais</h3>

<p>Você pode usar condicionais <code>if</code>, <code>else if</code> e <code>else</code> em seus arquivos EJS:</p>

<pre><code class="language-html">&lt;% if (idade &gt;= 18) { %&gt;  &lt;p&gt;Você é maior de idade.&lt;/p&gt;&lt;% } else { %&gt;  &lt;p&gt;Você é menor de idade.&lt;/p&gt;&lt;% } %&gt;</code></pre>

<h3>Loops</h3>

<p>O EJS também suporta loops <code>for</code> e <code>forEach</code>:</p>

<pre><code class="language-html">&lt;ul&gt;  &lt;% frutas.forEach(fruta =&gt; { %&gt;    &lt;li&gt;&lt;%= fruta %&gt;&lt;/li&gt;  &lt;% }); %&gt;&lt;/ul&gt;</code></pre>

<p>Esse código renderizará uma lista não ordenada com cada item da array <code>frutas</code>.</p>

<h2>Passando Dados do Servidor para o EJS</h2>

<p>Como vimos anteriormente, você pode passar dados do servidor para o arquivo EJS através do segundo argumento do método <code>res.render()</code>. Esses dados podem ser objetos, arrays ou qualquer outro tipo de dados JavaScript.</p>

<p>Por exemplo, digamos que você tenha uma rota que busca dados de um banco de dados e deseja exibir esses dados em uma página. Você pode fazer isso da seguinte forma:</p>

<pre><code class="language-javascript">app.get('/usuarios', (req, res) =&gt; {  const usuarios = [    { nome: 'João', idade: 25 },    { nome: 'Maria', idade: 32 },    { nome: 'Pedro', idade: 18 }  ];  res.render('usuarios', { usuarios });});</code></pre>

<p>Em seguida, no arquivo <code>views/usuarios.ejs</code>, você pode iterar sobre a array <code>usuarios</code> e exibir as informações de cada usuário:</p>

<pre><code class="language-html">&lt;ul&gt;  &lt;% usuarios.forEach(usuario =&gt; { %&gt;    &lt;li&gt;      &lt;h2&gt;&lt;%= usuario.nome %&gt;&lt;/h2&gt;      &lt;p&gt;Idade: &lt;%= usuario.idade %&gt;&lt;/p&gt;    &lt;/li&gt;  &lt;% }); %&gt;&lt;/ul&gt;</code></pre>

<p>Isso renderizará uma lista não ordenada com o nome e a idade de cada usuário.</p>

<h2>Layouts e Partials</h2>

<p>À medida que seus aplicativos crescem, você pode querer reutilizar partes comuns do HTML, como cabeçalhos, rodapés ou barras de navegação, em várias páginas. O EJS oferece suporte para layouts e partials, que facilitam essa reutilização de código.</p>

<h3>Layouts</h3>

<p>Um layout é um arquivo EJS que define a estrutura básica de uma página, como o <code>&lt;head&gt;</code>, o <code>&lt;body&gt;</code> e outras seções comuns. Outros arquivos EJS podem então ser renderizados dentro desse layout.</p>

<p>Para usar layouts, primeiro crie um arquivo de layout, como <code>views/layout.ejs</code>:</p>

<pre><code class="language-html">&lt;!DOCTYPE html&gt;&lt;html lang=&quot;en&quot;&gt;&lt;head&gt;  &lt;meta charset=&quot;UTF-8&quot;&gt;  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;  &lt;title&gt;&lt;%= title %&gt;&lt;/title&gt;&lt;/head&gt;&lt;body&gt;  &lt;%- body %&gt;&lt;/body&gt;&lt;/html&gt;</code></pre>

<p>Observe a tag <code>&lt;%- body %&gt;</code>. Essa é a área onde o conteúdo de outras páginas será renderizado.</p>

<p>Em seguida, em seus outros arquivos EJS, use a função <code>layout</code> para especificar o layout a ser usado:</p>

<pre><code class="language-html">&lt;%- layout('layout') %&gt;&lt;h1&gt;Conteúdo da Página&lt;/h1&gt;&lt;p&gt;Este conteúdo será renderizado dentro do layout.&lt;/p&gt;</code></pre>

<h3>Partials</h3>

<p>Partials são pequenos fragmentos de código EJS que podem ser incluídos em outros arquivos EJS. Eles são úteis para reutilizar componentes comuns, como cabeçalhos, rodapés ou barras de navegação.</p>

<p>Para criar um partial, basta criar um novo arquivo EJS com o conteúdo desejado, como <code>views/partials/header.ejs</code>:</p>

<pre><code class="language-html">&lt;header&gt;  &lt;nav&gt;    &lt;ul&gt;      &lt;li&gt;&lt;a href=&quot;/&quot;&gt;Início&lt;/a&gt;&lt;/li&gt;      &lt;li&gt;&lt;a href=&quot;/sobre&quot;&gt;Sobre&lt;/a&gt;&lt;/li&gt;      &lt;li&gt;&lt;a href=&quot;/contato&quot;&gt;Contato&lt;/a&gt;&lt;/li&gt;    &lt;/ul&gt;  &lt;/nav&gt;&lt;/header&gt;</code></pre>

<p>Em seguida, em seus outros arquivos EJS, você pode incluir o partial usando a função <code>include</code>:</p>

<pre><code class="language-html">&lt;%- include('partials/header') %&gt;&lt;h1&gt;Conteúdo da Página&lt;/h1&gt;&lt;p&gt;Este conteúdo será renderizado abaixo do cabeçalho.&lt;/p&gt;</code></pre>

<h2>Boas Práticas e Dicas</h2>

<p>Ao trabalhar com o EJS e o Express, é importante seguir algumas boas práticas e dicas para manter seu código organizado e fácil de manter:</p>

<ul>
    <li><p><strong>Separe as preocupações</strong>: Mantenha a lógica de negócios e a manipulação de dados separadas dos arquivos de modelo EJS. Use os arquivos EJS apenas para renderizar o HTML com base nos dados fornecidos pelo servidor.</p></li>
    <li><p><strong>Reutilize código com partials</strong>: Sempre que possível, crie partials para componentes reutilizáveis, como cabeçalhos, rodapés e barras de navegação. Isso tornará seu código mais limpo e fácil de manter.</p></li>
    <li><p><strong>Utilize layouts</strong>: Use layouts para definir a estrutura básica de suas páginas e evitar a duplicação de código.</p></li>
    <li><p><strong>Mantenha os arquivos EJS limpos</strong>: Evite colocar muita lógica complexa dentro dos arquivos EJS. Em vez disso, faça os cálculos e manipulações de dados no servidor e passe os dados processados para os arquivos EJS.</p></li>
    <li><p><strong>Aproveite os recursos do JavaScript</strong>: O EJS permite que você use todo o poder do JavaScript em seus arquivos de modelo. Aproveite recursos como funções, arrays, objetos e módulos para tornar seu código mais modular e reutilizável.</p></li>
    <li><p><strong>Otimize para o SEO</strong>: Ao renderizar páginas no servidor, é importante otimizar o código HTML gerado para motores de busca. Certifique-se de incluir metadados relevantes, como títulos e descrições, e siga as melhores práticas de SEO.</p></li>
</ul>

