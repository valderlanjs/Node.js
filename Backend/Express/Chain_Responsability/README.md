<h1>Cadeia de Responsabilidade no Express</h1>

<h2>Introdução</h2>


<p>A cadeia de responsabilidade (chain of responsibility) é um padrão de projeto de software muito utilizado em frameworks web como o Express. Ele permite que você encadeie diferentes middlewares em sua aplicação para lidar com as requisições HTTP de forma modular.</p><p>Neste ebook, vamos explorar em detalhes como a cadeia de responsabilidade funciona no Express, os seus benefícios e como aplicá-la na prática para construir APIs robustas e escaláveis.</p>

<h2>O que é cadeia de responsabilidade?</h2>

<p>A cadeia de responsabilidade é um padrão comportamental que permite que você passe uma requisição por uma corrente de handlers (middlewares no caso do Express). Cada handler decide se processa a requisição ou a passa adiante na cadeia.</p>

<p>Isso evita o acoplamento da requisição a um handler específico, permitindo que handlers diferentes tratem a requisição de forma independente.</p>

<p>Algumas características-chave da cadeia de responsabilidade:</p>

<ul>
    <li>Existe uma corrente de handlers encadeados uns aos outros</li>
    <li>Cada handler decide se processa a requisição ou passa para o próximo</li>
    <li>A requisição entra em um lado da cadeia e sai processada do outro lado</li>
    <li>O cliente que faz a requisição não sabe ou se importa com os detalhes dos handlers</li>
</ul>

<p>No Express, os middlewares funcionam exatamente assim, formando uma pipeline que processa as requisições HTTP antes de enviá-las para o manipulador de rota final.</p>

<h2>Benefícios da cadeia de responsabilidade</h2>

<p>Utilizar a cadeia de responsabilidade traz vários benefícios para uma aplicação web:</p>

<p><strong>1. Modularidade</strong></p>

<p>Cada middleware tem uma responsabilidade única, o que torna fácil entender, modificar e manter o código.</p>

<p><strong>2. Reutilização</strong></p>

<p>Os middlewares podem ser reutilizados em diferentes rotas e aplicações.</p>

<p><strong>3. Desacoplamento</strong></p>

<p>Os middlewares são desacoplados uns dos outros. Você pode adicionar, remover ou reordená-los facilmente.</p><p><strong>4. Extensibilidade</strong></p>

<p>É fácil estender a funcionalidade adicionando novos middlewares à cadeia.</p>

<p><strong>5. Refatoração simplificada</strong></p>

<p>Como os middlewares são independentes, você pode refatorar partes da aplicação sem impactar o todo.</p>

<p>Esses benefícios fazem da cadeia de responsabilidade um padrão muito poderoso para construir APIs escaláveis e de fácil manutenção.</p>

<h2>Middlewares no Express</h2>

<p>No Express, os middlewares são funções que tem acesso ao objeto de requisição (req), ao objeto de resposta (res) e à próxima função middleware na cadeia.</p>

<p>Essa é a assinatura de uma função middleware:</p>

<pre><code class="language-js">function(req, res, next) {  // faz alguma coisa    next(); // chama o próximo middleware}</code></pre><p>Alguns exemplos do que um middleware pode fazer:</p>

<ul>
    <li>Executar código antes das rotas serem chamadas</li>
    <li>Fazer alterações nos objetos req e res</li>
    <li>Terminar o ciclo de requisição-resposta</li>
    <li>Chamar o próximo middleware na cadeia</li>
</ul>

<p>Os middlewares podem executar qualquer código, como:</p>

<ul>
    <li>Log de requisições</li>
    <li>Autenticação</li>
    <li>Manipulação de erros</li>
    <li>Comunicação com bancos de dados</li>
    <li>Renderização de templates</li>
    <li>Validação de formulários</li>
    <li>etc.</li>
</ul>

<h2>Encadeando middlewares</h2>

<p>No Express, você define middlewares em nível de aplicação ou roteador utilizando os métodos <code>app.use()</code> e <code>router.use()</code>:</p>

<pre><code class="language-js">// middleware em nível de aplicaçãoapp.use(function(req, res, next) {  // faz alguma coisa  next();}); // middleware em nível de roteadorrouter.use(function(req, res, next) {  // faz alguma coisa    next(); });</code></pre>

<p>Os middlewares definidos são sempre executados sequencialmente, na ordem em que foram definidos.</p>

<p>Por exemplo:</p>

<pre><code class="language-js">app.use(middleware1); app.use(middleware2);app.use(middleware3);</code></pre>

<p>Quando uma requisição chega, o Express a passa por cada middleware na ordem: <strong>middleware1 &gt; middleware2 &gt; middleware3</strong>.</p>

<p>Cada middleware pode processar a requisição e então chamar <code>next()</code> para passar o controle para o próximo. Se algum middleware não chamar <code>next()</code>, a cadeia é interrompida.</p>

<p>Isso permite construir uma pipeline de processamento de requisições completamente customizável e modular.</p>

<h2>Exemplo prático</h2>

<p>Vamos ver um exemplo mais concreto para entender como encadear middlewares com Express:</p>

<pre><code class="language-js">const express = require('express');const app = express();// middleware que loga dados da requisição app.use((req, res, next) =&gt; {  console.log(`${req.method} ${req.url} ${Date.now()}`);    next();});// middleware que autentica o usuáriofunction auth(req, res, next) {  // lógica de autenticação    if (usuarioAutenticado) {    next();    } else {    res.sendStatus(401);  }}app.use(auth);// rota handlerapp.get('/', (req, res) =&gt; {  res.send('Bem-vindo à Home Page!'); });app.listen(3000);</code></pre>

<p>Neste exemplo, temos dois middlewares na cadeia:</p>

<ol>
    <li>Middleware de log, que registra informações sobre cada requisição</li>
    <li>Middleware de autenticação, que verifica se o usuário está autenticado</li>
</ol>

<p>Quando uma requisição chega para a rota raiz &quot;/&quot;:</p>

<ol>
    <li>O middleware de log é executado primeiro, imprimindo os detalhes da requisição</li>
    <li>Em seguida o middleware de autenticação verifica as credenciais do usuário</li>
    <li>Se o usuário estiver autenticado, a requisição prossegue para o handler da rota raiz</li>
    <li>O handler envia a resposta &quot;Bem-vindo à Home Page!&quot; de volta para o cliente</li>
</ol>

<p>Dessa forma a requisição passa por toda a cadeia de middlewares antes de ser tratada pela rota. Cada middleware tem uma responsabilidade única nesse processo.</p>

<p>E é assim que a cadeia de responsabilidade funciona no Express na prática!</p>

<h2>Padrões comuns de middleware</h2>

<p>Existem alguns padrões comuns de middlewares que você encontrará na maioria das aplicações Express:</p>

<p><strong>Logger</strong></p>

<ul>
    <li>Registra informações sobre cada requisição num arquivo de log</li>
    <li>Útil para debugar erros e monitorar métricas</li>
</ul>

<p><strong>Parser</strong></p>

<ul>
    <li>Analisa corpos de requisição em formatos como JSON</li>
    <li>Coloca os dados analisados em <code>req.body</code></li>
</ul>

<p><strong>Static</strong></p>

<ul>
    <li>Serve arquivos estáticos como imagens, CSS e JavaScript</li>
    <li>Evita overhead desnecessário nas rotas</li>
</ul>

<p><strong>Compression</strong></p>

<ul>
    <li>Compacta responses para diminuir o tráfego</li>
    <li>Acelera o tempo de resposta</li>
</ul>

<p><strong>CORS</strong></p>

<ul>
    <li>Habilita CORS (Compartilhamento de Recursos de Origem Cruzada)</li>
    <li>Permite que frontends em outros domínios acessem a API</li>
</ul>

<p><strong>Helmet</strong></p>

<ul>
    <li>Define vários headers de segurança</li>
    <li>Previne ataques como XSS, sniffing, etc</li>
</ul>

<p>Esses são só alguns exemplos. Você pode criar middlewares customizados para qualquer tipo de funcionalidade.</p>

<h2>Conclusão</h2>

<p>A cadeia de responsabilidade é um padrão poderoso que permite construir APIs Express escaláveis e desacopladas.</p>

<p>Entender como os middlewares são encadeados e processam as requisições é fundamental para dominar o framework Express.</p>

<p>Espero que este ebook tenha ajudado você a entender melhor como aplicar esse padrão na prática. Os middlewares são a chave para criar APIs modulares, flexíveis e fáceis de manter.</p>

<p>Utilize middlewares para tratar preocupações transversais como logs, erros, segurança, validação e muito mais. Dessa forma você mantém as rotas limpas e focadas na lógica de negócios.</p>

<p>A cadeia de responsabilidade é realmente um padrão essencial não apenas no Express, mas na maioria dos frameworks web modernos. Então vale a pena investir tempo para dominá-lo.</p>