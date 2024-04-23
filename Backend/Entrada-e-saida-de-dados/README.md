<h1>Entrada e Saída de Dados em Node.js</h1>

<h2>Introdução</h2>

<p>Este ebook aborda os conceitos de entrada e saída de dados em aplicações Node.js, mostrando como enviar parâmetros para um script Node.js e como solicitar entradas de dados do usuário.</p>

<p>Serão explicados conceitos como:</p>

<ul>
    <li>Importação da biblioteca <code>process</code> do Node.js</li>
    <li>Obtenção de parâmetros passados na execução do script (<code>process.argv</code>)</li>
    <li>Exibição de dados para o usuário (<code>process.stdout</code>)</li>
    <li>Obtenção de entradas do usuário (<code>process.stdin</code>)</li>
</ul>

<p>Ao final do ebook, você será capaz de:</p>

<ul>
    <li>Passar parâmetros para seus scripts Node.js</li>
    <li>Exibir dados e mensagens para o usuário</li>
    <li>Obter entradas digitadas pelo usuário</li>
</ul>

<p>Vamos começar!</p>

<h2>Importando a Biblioteca Process</h2>

<p>O Node.js possui uma biblioteca chamada <code>process</code> que permite o acesso a funcionalidades relacionadas à entrada e saída de dados da aplicação.</p>

<p>Essa biblioteca não precisa ser instalada separadamente, podendo ser importada diretamente:</p>

<pre><code class="language-js">const process = require('process');</code></pre>

<p>Dessa forma, todas as funcionalidades da biblioteca <code>process</code> estarão disponíveis através da constante <code>process</code>.</p>

<h2>Obtendo Parâmetros de Entrada (process.argv)</h2>

<p>Quando executamos um script Node.js, podemos passar parâmetros que serão recebidos pelo script para processamento.</p>

<p>A obtenção desses parâmetros é feita através da propriedade <code>argv</code> do objeto <code>process</code>:</p>

<pre><code class="language-js">const params = process.argv;</code></pre>

<p>A propriedade <code>argv</code> retorna um array com todos os parâmetros passados quando o script foi executado.</p>

<p>Por exemplo, se executarmos:</p>

<pre><code>node script.js param1 param2</code></pre>

<p>Dentro do script, <code>process.argv</code> conterá:</p>

<pre><code class="language-js">['node', 'script.js', 'param1', 'param2']</code></pre>

<p>Note que os dois primeiros elementos do array são sempre o caminho do Node.js e o caminho do script executado. Os demais elementos são os parâmetros customizados.</p>

<p>Podemos iterar sobre esse array para obter os parâmetros:</p>

<pre><code class="language-js">process.argv.forEach(param =&gt; {  console.log(param); });</code></pre>

<p>Assim podemos processar cada parâmetro dentro do script.</p>

<h2>Exibindo Dados para o Usuário (process.stdout)</h2>

<p>Podemos exibir dados e mensagens para o usuário através do <code>stdout</code> (saída padrão) do objeto <code>process</code>:</p>


<pre><code class="language-js">process.stdout.write('Hello World!\n');</code></pre>

<p>Isso irá imprimir &quot;Hello World!&quot; no terminal para o usuário.</p>

<p>Outra forma é interpolando valores em uma string:</p>

<pre><code class="language-js">const name = &quot;João&quot;;process.stdout.write(`Hello ${name}!\n`) </code></pre>

<p>Resultando em:</p><pre><code>Hello João!</code></pre>

<h2>Obtendo Entradas do Usuário (process.stdin)</h2>

<p>Para obter entradas digitadas pelo usuário no terminal, podemos utilizar o <code>stdin</code> (entrada padrão) do objeto <code>process</code>:</p>

<pre><code class="language-js">process.stdin.on('data', (userInput) =&gt; {  // faz algo com a entrada do usuário  });</code></pre>

<p>O código acima define um listener de evento <code>'data'</code> em <code>process.stdin</code>, que será chamado sempre que o usuário digitar algo no terminal.</p>

<p>A entrada digitada pelo usuário é passada para a função de callback e pode ser acessada através do parâmetro <code>userInput</code>.</p>

<p>Exemplo solicitando o nome do usuário:</p>

<pre><code class="language-js">process.stdout.write('What is your name?\n');process.stdin.on('data', (name) =&gt; {  process.stdout.write(`Hello ${name.toString()}!\n`);  process.exit(); });</code></pre>

<p>Quando executado, o script imprime &quot;What is your name?&quot;, espera o usuário digitar o nome e depois responde com &quot;Hello {nomeDigitado}!&quot;.</p>

<p>Note o uso de <code>process.exit()</code> para encerrar o script depois de processada a entrada do usuário.</p>

<h2>Conclusão</h2>

<p>Manipular entradas e saídas de dados é algo muito comum em aplicações Node.js, seja para obter parâmetros, mostrar resultados ou pedir inputs do usuário.</p><p>A biblioteca <code>process</code> provê os métodos necessários para essas funcionalidades. Com <code>argv</code>, <code>stdout</code> e <code>stdin</code>, você pode criar scripts e aplicações Node.js muito mais interativas.</p><p>Espero que este material tenha sido útil para reforçar esses conceitos fundamentais.</p>