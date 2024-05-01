<h1>Recebendo Parâmetros nas Rotas com Express</h1>

<h2>Introdução</h2>

<p>Receber parâmetros nas requisições é fundamental para que o back-end consiga interagir de forma dinâmica com o front-end. Isso permite, por exemplo, que o usuário faça consultas passando IDs específicos para receber dados ou deletar registros.</p>

<p>Neste guia, vamos aprender como receber parâmetros nas rotas no Express de forma simples, permitindo criar APIs mais completas e poderosas.</p>

<h2>Importância de Receber Parâmetros</h2>

<p>Ter a capacidade de receber parâmetros nas requisições é crucial para o desenvolvimento de APIs RESTful completas. Alguns exemplos de casos de uso:</p>

<ul>
    <li>Consultar um registro específico passando seu ID na URL</li>
    <li>Atualizar um registro passando seu ID e os novos dados no body</li>
    <li>Deletar um registro passando seu ID na URL ou body</li>
</ul>

<p>Sem essa funcionalidade, o back-end trabalharia sempre com todos os dados, o que muitas vezes não é necessário ou desejável. Isso traz ganhos importantes:</p>

<ul>
    <li><p><strong>Performance</strong>: ao consultar/atualizar/deletar registros específicos, menos dados precisam trafegar entre front e back-end.</p></li>
    <li><p><strong>Segurança</strong>: o acesso pode ser controlado para que um usuário só consiga modificar seus próprios dados.</p></li>
    <li><p><strong>Controle</strong>: os desenvolvedores podem decidir exatamente quais operações serão permitidas em cada registro.</p></li>
</ul>

<p>Portanto, dominar o recebimento de parâmetros é essencial para APIs que precisam ir além de simplesmente listar ou adicionar dados.</p>

<h2>Configurando Rotas para Receber Parâmetros</h2>

<p>No Express, receber parâmetros nas rotas é muito simples. Basta adicionar a sintaxe de parâmetros na definição da rota:</p>

<pre><code class="language-js">app.get('/users/:userId', (req, res) =&gt; {  // código para handler a requisição });</code></pre>

<p>Note o uso de <code>:userId</code> na rota. Isso define um parâmetro chamado <code>userId</code> que pode ser recebido nessa rota.</p>

<p>Agora, reqsições como <code>GET /users/1234</code> populariam o parâmetro <code>userId</code> com o valor <code>1234</code> para uso no handler da rota.</p>

<p>Podemos definir quantos parâmetros forem necessários numa rota:</p>

<pre><code class="language-js">app.get('/users/:userId/posts/:postId', (req, res) =&gt; {  // req.params teria userId e postId    });</code></pre>

<p>E nada impede de mesclarmos rotas com e sem parâmetros:</p>

<pre><code class="language-js">app.get('/users', (req, res) =&gt; {  // handler para listar todos usuários});app.get('/users/:userId', (req, res) =&gt; {  // handler para GET usuário por ID  });</code></pre>

<h3>Lendo Parâmetros</h3>

<p>Definida a rota com parâmetros, como ler esses valores no handler?</p>

<p>Basta acessar a propriedade <code>params</code> do objeto <code>req</code> (request):</p>

<pre><code class="language-js">app.get('/users/:userId', (req, res) =&gt; {  const userId = req.params.userId;    // encontrar e devolver usuário pelo id});</code></pre>

<p>Note que o nome do parâmetro na rota (<code>userId</code>) deve corresponder à propriedade de <code>req.params</code> que queremos ler.</p>

<p>Podemos imprimir todos parâmetros disponíveis com <code>console.log(req.params)</code>:</p>

<pre><code>{  &quot;userId&quot;: &quot;1234&quot;,  &quot;postId&quot;: &quot;456&quot; }</code></pre>

<p>E com isso temos os parâmetros prontos para uso na lógica da rota!</p>

<h2>Exemplo Prático</h2>

<p>Vamos ver na prática como receber e usar um parâmetro <code>id</code> numa rota de checklists:</p>

<pre><code class="language-js">app.get('/checklists/:id', (req, res) =&gt; {  // exibe parâmetro id no console  console.log(req.params.id);     // devolve id como resposta  res.send(req.params.id); })</code></pre>


<p>Testando no Postman:</p>

<pre><code>GET /checklists/99// retorno: 99</code></pre>

<p>Podemos passar qualquer valor, string ou número. Também funcionaria:</p>

<pre><code>GET /checklists/todo-list-1// retorno: todo-list-1</code></pre>

<p>O Express populou automaticamente <code>req.params.id</code> com o valor da URL.</p>

<p>Note também que poderíamos ter usado qualquer nome no lugar de <code>id</code>, por exemplo:</p>

<pre><code class="language-js">app.get('/checklists/:code', (req, res) =&gt; {  console.log(req.params.code);    res.send(req.params.code);})</code></pre>

<p>O handler leria de <code>req.params.code</code> ao invés de <code>id</code>.</p>

<h3>Lendo Query Params</h3>

<p>Além de ler parâmetros da própria URL, também podemos receber <em>query params</em>, que são valores passados na query string após o caminho:</p>

<pre><code>/users?role=admin&amp;name=joao</code></pre>

<p>A query string começa pelo <code>?</code> e contém pares <code>chave=valor</code> separados pelo <code>&amp;</code>.</p>

<p>Podemos lê-los em <code>req.query</code>, similar a <code>req.params</code>:</p>

<pre><code class="language-js">app.get('/users', (req, res) =&gt; {  console.log(req.query); // { role: 'admin', name: 'joao' }    const role = req.query.role;  const name = req.query.name;    // ...  })</code></pre>

<p>Assim podemos receber parâmetros tanto da URL como da query string!</p>

<h2>Recebendo Dados em Outros Verbos</h2>

<p>Até agora vimos exemplos com <code>GET</code>, mas receber parâmetros funciona para qualquer verbo HTTP (POST, PUT, DELETE, etc).</p>

<p>Por exemplo, numa rota PUT para atualizar um usuário por ID:</p>

<pre><code class="language-js">app.put('/users/:userId', (req, res) =&gt; {  const userId = req.params.userId; // ID na URL    const userData = req.body; // dados novos no body    // atualiza usuário  })</code></pre>

<p>Ou numa rota DELETE para remover por ID:</p>

<pre><code class="language-js">app.delete('/users/:userId', (req, res) =&gt; {  const userId = req.params.userId;     // deleta o usuário  })</code></pre>

<p>Portanto os parâmetros são úteis não só em GETs, mas em todos verbos HTTP.</p><h2>Boas Práticas</h2><p>Algumas boas práticas para trabalhar com parâmetros:</p>

<ul>
    <li><p><strong>Nomes descritivos</strong>: escolher nomes semânticos como <code>userId</code>, <code>productId</code>, etc ao invés de nomes genéricos tipo <code>id</code>. Ajuda a entender a função da rota.</p></li>
    <li><p><strong>Tipos</strong>: embora o Express aceite qualquer valor como parâmetro, convém tratá-los com o tipo certo no handler, convertendo para Number ou String se necessário.</p></li>
    <li><p><strong>Validação</strong>: antes de trabalhar com um parâmetro, validar se está presente e se faz sentido. Retornar erro se inválido.</p></li>
    <li><p><strong>Segurança</strong>: validar permissões do usuário antes de alterar/deletar dados identificados por parâmetros.</p></li>
</ul>

<p>Seguindo boas práticas, os parâmetros se tornam mais robustos e seguros.</p>

<h2>Conclusão</h2>

<p>Neste guia, vimos como receber parâmetros nas rotas do Express torna nossas APIs mais completas e flexíveis.</p>

<p>Podemos receber parâmetros tanto da própria URL como da query string, disponíveis em <code>req.params</code> e <code>req.query</code> respectivamente.</p>

<p>Além disso, os parâmetros funcionam para qualquer verbo HTTP (GET, POST, PUT, DELETE, etc).</p>

<p>Seguindo boas práticas de uso, nossas rotas se tornam muito mais poderosas para consultar, manipular e deletar dados de forma granular.</p>

<p>Isso permite construir APIs RESTful verdadeiramente CRUD, preparadas para casos de uso avançados.</p>

<p>Portanto, dominar o uso de parâmetros no Express é uma habilidade essencial para o desenvolvedor back-end.Cabe ao desenvolvedor evoluir os conceitos para criar APIs seguras, completas e robustas.</p>