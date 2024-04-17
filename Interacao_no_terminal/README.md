<h1>Criando Interações no Terminal com Node.js</h1>

<h2>Introdução</h2>

<p>Como criar interações no terminal utilizando o Node.js e seus módulos nativos. Isso permite criar aplicações de linha de comando interativas, onde o usuário pode inserir entradas e receber respostas adequadas.</p>

<h2>Usando o process para entrada e saída</h2>

<p>A forma mais simples de criar interações de entrada e saída no terminal é utilizando o objeto global <code>process</code> do Node.js. Esse objeto faz referência ao processo que está executando a sua aplicação.</p>

<h3>Escrevendo no Terminal</h3>

<p>Para escrever no terminal, você pode usar a propriedade <code>stdout</code> (standard output) do objeto <code>process</code>. Por exemplo:</p>

<pre><code class="language-javascript">process.stdout.write('Olá Mundo');</code></pre>

<p>Isso exibirá a mensagem &quot;Olá Mundo&quot; no terminal.</p>

<h3>Lendo do Terminal</h3>

<p>Para ler a entrada do usuário no terminal, você pode usar a propriedade <code>stdin</code> (standard input) do objeto <code>process</code>. Por exemplo:</p>

<pre><code class="language-javascript">process.stdin.on('data', (data) =&gt; {  process.stdout.write(`Você digitou: ${data}`);});</code></pre>

<p>Neste exemplo, estamos adicionando um listener para o evento <code>data</code> do <code>stdin</code>. Sempre que o usuário digitar algo e pressionar Enter, o callback será chamado com os dados inseridos pelo usuário. Em seguida, escrevemos esses dados no terminal usando o <code>stdout</code>.</p>

<p>No entanto, trabalhar diretamente com o <code>stdin</code> e <code>stdout</code> pode ser um pouco trabalhoso. Por isso, geralmente utilizamos o módulo nativo <code>readline</code> para criar interações no terminal de forma mais fácil.</p>

<h2>Usando o módulo readline</h2>

<p>O módulo <code>readline</code> fornece uma interface para ler as entradas do usuário linha por linha. Vamos importá-lo primeiro:</p>

<pre><code class="language-javascript">const readline = require('node:readline');</code></pre>

<p>Em seguida, podemos criar uma interface <code>readline</code> usando o método <code>createInterface</code>:</p>

<pre><code class="language-javascript">const rl = readline.createInterface({  input: process.stdin,  output: process.stdout});</code></pre>

<p>Aqui, estamos passando o <code>stdin</code> como a entrada e o <code>stdout</code> como a saída para a nossa interface <code>readline</code>.</p>

<h3>Lendo uma linha</h3>

<p>Para ler uma linha de entrada do usuário, podemos usar o evento <code>line</code>:</p>

<pre><code class="language-javascript">rl.on('line', (input) =&gt; {  console.log(`Você digitou: ${input}`);});</code></pre>

<p>Neste exemplo, sempre que o usuário digitar algo e pressionar Enter, o callback será chamado com a linha digitada como argumento.</p>

<h3>Fazendo perguntas</h3>

<p>O módulo <code>readline</code> também fornece um método conveniente chamado <code>question</code> para fazer perguntas ao usuário:</p>

<pre><code class="language-javascript">rl.question('Qual é o seu nome? ', (answer) =&gt; {  console.log(`Olá, ${answer}!`);  rl.close();});</code></pre>

<p>Aqui, estamos exibindo a pergunta &quot;Qual é o seu nome?&quot; no terminal. Quando o usuário digitar sua resposta e pressionar Enter, o callback será chamado com a resposta fornecida. Em seguida, exibimos uma saudação e fechamos a interface <code>readline</code> com <code>rl.close()</code>.</p>

<h3>Encerrando a aplicação</h3>

<p>Quando você adiciona listeners com <code>on</code> ou <code>question</code>, o programa não encerra automaticamente. Você precisa encerrar manualmente quando desejar. Existem algumas opções para fazer isso:</p>

<ol>
    <li><p>Chamar <code>rl.close()</code>: Isso fechará a interface <code>readline</code>, e se não houver nada mais pendente, o programa encerrará.</p></li>
    <li><p>Chamar <code>process.exit(0)</code>: Isso encerrará o processo atual (sua aplicação) com um código de saída 0, indicando que não houve erros.</p></li>
    <li><p>Tratar o evento <code>SIGINT</code> (Ctrl+C): Você pode adicionar um listener para o evento <code>SIGINT</code> (interrupção do sistema, geralmente causada por Ctrl+C) e encerrar o programa adequadamente quando esse evento ocorrer.</p></li>
</ol>

<pre><code class="language-javascript">rl.on('SIGINT', () =&gt; {  rl.question('Deseja realmente sair? (s/n) ', (answer) =&gt; {    if (answer.trim().toLowerCase() === 's') {      console.log('Encerrando...');      process.exit(0);    } else {      console.log('Continuando...');    }  });});</code></pre>

<p>Neste exemplo, quando o usuário pressionar Ctrl+C, a aplicação perguntará se ele deseja realmente sair. Se a resposta for &quot;s&quot; (ignorando maiúsculas/minúsculas e espaços em branco), a aplicação encerrará com <code>process.exit(0)</code>. Caso contrário, continuará em execução.</p>

<h2>Conclusão</h2>

<p>criar interações no terminal usando o Node.js e seus módulos nativos, como <code>process</code> e <code>readline</code>. Pode-se usar essas técnicas para criar aplicações de linha de comando interativas, desde simples utilitários até ferramentas mais complexas.</p><p>Lembrando de que o módulo <code>readline</code> oferece muitos outros recursos além dos mencionados aqui, como autocompletar, histórico de comandos e muito mais. Consulte a documentação oficial do Node.js para obter mais informações.</p>