<h1>Introdução ao Express</h1>

<h2>O que é o Express?</h2>

<p>O Express é um framework web rápido, minimalista e flexível para Node.js. Ele fornece um conjunto robusto de recursos para aplicativos web e móvel.</p>

<p>O Express foi lançado em 2010 e rapidamente se tornou o framework Node.js mais popular. Ele tem uma comunidade enorme e é a base de inúmeras bibliotecas, ferramentas e templates de aplicativos Node.</p>

<h2>Características principais do Express</h2>

<p>Algumas das principais características e benefícios do Express incluem:</p>

<ul>
    <li><p>Fácil de começar - O Express fornece uma interface simples e minimalista para lidar com solicitações e respostas HTTP. Isso torna muito fácil começar a construir aplicativos web e APIs.</p></li>
    <li><p>Alto desempenho - O Express fornece uma camada fina sobre o Node.js para lidar com rotas e views, adicionando recursos mínimos ao Node. Isso resulta em aplicativos muito rápidos e eficientes.</p></li>
    <li><p>Extremamente flexível - O Express é desacoplado por design. Ele fornece funcionalidade central robusta para web e mobile, mas deixa a lógica do aplicativo para o desenvolvedor. Isso torna extremamente flexível e modular.</p></li>
    <li><p>Middleware robusto - O Express tem suporte interno para middleware na camada do aplicativo, camada de roteamento e camada de manipulação de erros. Isso facilita a adição de funcionalidade aos aplicativos Express.</p></li>
    <li><p>Compatível com muitos templates, databases, auth etc - O ecossistema Express tem bibliotecas e plugins para praticamente tudo que você precisa. Isso inclui templates, autenticação, banco de dados, etc.</p></li>
</ul>

<h2>Como o Express funciona?</h2>

<p>O Express funciona através de middlewares e uma estrutura de roteamento robusta.</p>

<p><strong>Middlewares</strong> permitem que você execute lógica em cada fase do ciclo de solicitação/resposta. Por exemplo, middlewares para análise de solicitação, autenticação de usuário, manipulação de erros, formatação de resposta, etc.</p>

<p>A <strong>estrutura de roteamento</strong> do Express fornece uma maneira fácil de mapear URLs para funções do aplicativo chamadas manipuladores de rota. Isso permite separar a lógica do aplicativo por rota.</p>

<p>Aqui está um resumo de como uma solicitação é processada no Express:</p>

<ol>
    <li>A solicitação entra no aplicativo Express</li>
    <li>Middlewares globais e de aplicativo são executados</li>
    <li>Roteamento e middlewares específicos da rota são executados</li>
    <li>Se nenhuma rota corresponder, um manipulador de erro é acionado</li>
    <li>A resposta é enviada de volta</li>
</ol>

<p>O Express cuida do roteamento básico e do fluxo de solicitação/resposta, mas deixa toda a lógica do aplicativo para o desenvolvedor. Isso torna extremamente flexível.</p>

<h2>Instalando e Configurando o Express</h2>

<p>Instalar o Express é muito simples com o npm. Basta executar:</p>

<pre><code>npm install express</code></pre><p>Depois disso, aqui está um aplicativo &quot;Hello World&quot; básico com Express:</p>

<pre><code class="language-js">const express = require('express')const app = express()app.get('/', (req, res) =&gt; {  res.send('Hello World!')})app.listen(3000) </code></pre>

<p>Vamos analisar o que está acontecendo aqui:</p>

<ul>
    <li><code>require('express')</code> carrega o módulo express</li>
    <li><code>express()</code> cria um aplicativo Express</li>
    <li><code>app.get()</code> define uma rota handler para caminhos GET '/'</li>
    <li><code>app.listen()</code> inicia o servidor na porta 3000</li>
</ul>

<p>E isso é tudo que você precisa para começar! Agora vamos explorar algumas funcionalidades centrais e middlewares comuns do Express.</p>

<h2>Rotas e Manipuladores de Rotas</h2>

<p>Rotas e manipuladores de rotas são a maneira como você define pontos de extremidade (URIs) e lógica do aplicativo no Express.</p>

<p>Aqui está um exemplo:</p>

<pre><code class="language-js">app.get('/', (req, res) =&gt; {  // mostrar página inicial})app.post('/users', (req, res) =&gt; {  // criar um novo usuário  })</code></pre>

<p>O Express suporta todos os métodos HTTP: get, post, put, delete, etc.</p>

<p>Você pode ter vários manipuladores de rota para uma mesma rota. Eles serão executados na ordem em que foram definidos.</p>

<p>Rotas também podem ter parâmetros, por exemplo:</p>

<pre><code class="language-js">app.get('/users/:userId', (req, res) =&gt; {  // obter usuário por id})</code></pre>

<h2>Static Files Middleware</h2>

<p>O middleware de arquivos estáticos do Express torna muito fácil servir arquivos como imagens, CSS e JavaScript:</p>


<pre><code class="language-js">app.use(express.static('public'))</code></pre>

<p>Agora você pode servir arquivos da pasta &quot;public&quot; diretamente:</p>

<pre><code>http://localhost:3000/images/kitten.jpghttp://localhost:3000/css/style.csshttp://localhost:3000/js/app.js</code></pre>

<p>Não é necessário escrever manipuladores de rota para cada arquivo!</p>

<h2>Template Engines Middleware</h2><p>Os template engines permitem renderizar templates com dados dinâmicos.</p>

<p>Alguns populares para Express são Pug, Mustache e EJS.</p><p>Aqui está um exemplo com EJS:</p>

<pre><code class="language-js">app.set('view engine', 'ejs')app.get('/', (req, res) =&gt; {  res.render('index', {user: 'John'})  })</code></pre>

<p>Isso renderizará o template &quot;index.ejs&quot; e passará a variável <code>user</code>.</p>

<p>Existem muitos outros middlewares úteis disponíveis também, como body-parser, cookie-parser, compression, etc.</p>

<h2>Debugging</h2>

<p>O Express vem com uma ferramenta de debugging útil para logs e troubleshooting.</p>

<p>Para habilitá-lo, basta definir a variável de ambiente <code>DEBUG</code>.</p>

<pre><code>DEBUG=express:* node app.js</code></pre>

<p>Isso mostrará todos os logs internos do Express, middlewares, erros, etc. Útil para solucionar problemas.</p>

<h2>Segurança</h2>

<p>Aqui estão algumas melhores práticas de segurança para aplicativos Express:</p>

<ul>
    <li>Use helmet para definir vários headers de segurança</li>
    <li>Valide entrada de usuário para prevenir ataques de injeção</li>
    <li>Use cors para habilitar CORS seletivamente</li>
    <li>Use encryption e jwt para lidar com autenticação segura</li>
    <li>Não armazene senhas ou segredos no código</li>
    <li>Use uma solução de segurança de banco de dados</li>
    <li>Mantenha dependências atualizadas</li>
</ul>

<p>O Express não vem com muitos recursos de segurança interna, então você precisa tomar cuidado com as melhores práticas.</p>

<h2>Deploying Express Apps</h2>

<p>Aplicativos Express podem ser implantados de várias maneiras. Aqui estão algumas opções populares:</p>

<ul>
    <li>Serviços de hospedagem Node.js como Heroku, AWS, Azure, etc</li>
    <li>Containeres Docker - excelente para escalar e isolar dependências</li>
    <li>Servidores virtuais Nginx - pode lidar com proxy reverso e load balancing</li>
    <li>Serviços sem servidor como AWS Lambda</li>
    <li>Ferramentas de deploy automatizado como Jenkins, TravisCI, etc</li>
</ul>

<p>As opções são vastas e dependem do seu caso de uso. Começar com Heroku ou Docker provavelmente é o mais fácil.</p>

<h2>Conclusão</h2>

<p>O Express fornece uma ótima maneira de construir aplicativos web e APIs com Node.js. Com uma comunidade enorme e ecossistema rico, ele será útil desde aplicativos simples até complexos aplicativos empresariais.</p>


##  O que é o EJS

- É uma ferramenta para renderização de páginas.
- Conseguimos embutir códigos JavaScript para renderizar as páginas.
    - Não são códigos que serão lidos no frontend.
    - São códigod que o EJS utilizará para montar o HTML que será enviado para o frontend.

- Possibilita a componetização das views com os dados gerados.
    - Conseguimos fazer reuso de códigos e deixar nosse app mais organizado.


<h1>EJS e Configuração com Express</h1>

<h2>Introdução</h2>

<p>Vamos entender o que é o EJS e como ele pode ser utilizado para criar páginas web dinâmicas utilizando o framework Express.</p>

<p>O EJS é uma ferramenta muito poderosa que permite embutir códigos JavaScript em arquivos HTML para renderizar páginas web de forma dinâmica. Isso significa que, com o EJS, podemos criar páginas que exibem conteúdos diferentes para cada usuário, de acordo com as variáveis que passamos do back-end.</p>

<p>Como configurar e utilizar o EJS no Express para:</p>

<ul>
    <li>Criar páginas dinâmicas</li>
    <li>Passar variáveis do back-end para o front-end</li>
    <li>Utilizar templates e organização de código</li>
    <li>E muito mais</li>
</ul>

<p>Portanto, dominar  essa skill é fundamental para qualquer desenvolvedor web que utilize JavaScript no back-end.</p>

<h2>O que é uma página dinâmica</h2>
<p>Antes de entrarmos nos detalhes do EJS, é importante entendermos a diferença entre uma página HTML estática e uma página dinâmica.</p>
<p>Uma página HTML estática é aquela que possui um conteúdo fixo, que nunca se altera. Ou seja, o mesmo arquivo HTML é servido de forma idêntica para todos os usuários, em todas as situações.</p>
<p>Já uma página dinâmica é gerada no momento em que o usuário faz uma requisição. Ou seja, o conteúdo dessa página pode mudar dependendo de certas variáveis e situações, como:</p>
<ul>
    <li>Dados do usuário logado (nome, email, etc)</li>
    <li>Conteúdos buscados no banco de dados</li>
    <li>Parâmetros passados na URL</li>
    <li>E muito mais</li>
</ul>
<p>Dessa forma, cada usuário pode receber uma página com conteúdo diferente, personalizado especificamente para ele. Isso traz uma experiência muito mais rica e interativa na web.</p>
<p>As páginas dinâmicas são processadas no servidor, normalmente utilizando algum interpretador ou linguagem como PHP, ASP, JSP ou Node.js.</p>
<p>E é justamente nessa parte que o <strong>EJS</strong> entra. Com ele, podemos criar templates HTML dinâmicos do lado do servidor utilizando o poder do JavaScript.</p>

<h2>O que é EJS</h2>
<p><strong>EJS</strong> significa <strong>Embedded JavaScript</strong>. Ele é uma linguagem de modelagem ou template engine para o Node.js que nos permite gerar marcação HTML com JavaScript do lado do servidor.</p>
<p>Em outras palavras, o EJS permite escrever códigos JavaScript diretamente dentro de arquivos HTML. Dessa forma, podemos incorporar variáveis JavaScript, funções, estruturas de controle como if, else, foreach e muito mais dentro dos templates HTML.</p>
<p>Isso traz toda a potência e dinamismo do JavaScript para a renderização de templates no servidor Node.js.</p>

<p>Alguns benefícios do EJS:</p>
<ul>
    <li>Código HTML mais limpo e fácil de entender</li>
    <li>Podemos reaproveitar partes do código (header, footer, etc)</li>
    <li>Manipular dados antes de renderizar a página</li>
    <li>Páginas web dinâmicas e interativas</li>
    <li>Integra perfeitamente com Express e Node.js</li>
</ul>

<p>Em resumo, o EJS facilita muito a geração de páginas HTML a partir de dados dinâmicos, direto no servidor Node.js.</p>

<h2>Configurando EJS no Express</h2>

<p>Agora que entendemos o que é o EJS e para que ele serve, configurá-lo em uma aplicação Express.</p>

<p>Primeiro, vamos iniciar um projeto Node.js com Express:</p>

<pre><code>npm initnpm install express</code></pre>

<p>Depois, instale o EJS como dependência do projeto:</p>

<pre><code>npm install ejs</code></pre>

<p>Em seguida, devemos configurar o Express para usar o EJS como engine de views (templates).</p>

<p>Isso é feito pelo método <code>app.set()</code>, passando a opção <code>view engine</code> com o valor <code>ejs</code>:</p>

<pre><code class="language-js">// index.jsconst express = require('express') const app = express()app.set('view engine', 'ejs')app.listen(3000)</code></pre>

<p>Agora, toda view renderizada pelo Express será processada primeiro pelo EJS antes de ser enviada ao navegador.</p>
<p>Por padrão, o Express vai procurar por arquivos EJS dentro do diretório <code>./views</code>, portanto vamos criar essa pasta e nosso primeiro template:</p>

<pre><code>mkdir viewstouch views/index.ejs</code></pre>

<p>Dentro de <code>index.ejs</code> podemos começar a escrever HTML normalmente, mas agora com a capacidade de inserir JavaScript quando quisermos:</p>

<pre><code class="language-html">&lt;!-- views/index.ejs --&gt;&lt;html&gt;  &lt;head&gt;    &lt;title&gt;Meu site com EJS&lt;/title&gt;  &lt;/head&gt;  &lt;body&gt;    &lt;h1&gt;Bem-vindo ao meu site!&lt;/h1&gt;    &lt;p&gt;Meu nome é &lt;%= nome %&gt;&lt;/p&gt;    &lt;% if(logado) { %&gt;      &lt;p&gt;Usuário logado!&lt;/p&gt;     &lt;% } %&gt;  &lt;/body&gt;&lt;/html&gt;</code></pre>

<p>Perceba no exemplo acima que inserimos variáveis e estruturas de controle JavaScript direto no HTML. Isso é a mágica do EJS!</p><p>Agora precisamos renderizar essa view nas rotas do Express:</p>

<pre><code class="language-js">// index.jsapp.get('/', (req, res) =&gt; {  const nome = &quot;João&quot;  const logado = true  res.render('index', {    nome,    logado      })})</code></pre>

<p>Pronto! Agora quando acessarmos a rota raiz, o Express vai renderizar o template <code>index.ejs</code>, substituir as variáveis por seus valores e retornar o HTML final para o navegador.</p>

<p>Perceba que além da view, também passamos um objeto com as variáveis que queremos disponibilizar dentro do template EJS. Essas variáveis podem vir do banco de dados, de uma API externa, input de usuário ou qualquer outra origem.</p>

<p>O EJS é responsável por processar o template + variáveis e retornar o HTML final, com todo o dinamismo que precisamos.</p>

