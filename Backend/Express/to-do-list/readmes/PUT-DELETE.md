<h1>Rotas e Métodos HTTP</h1>

<h2>Introdução</h2>

<p>Este ebook aborda os principais conceitos relacionados às rotas e métodos HTTP que foram discutidos na transcrição.</p><p>Inicialmente, são apresentados os métodos mais comuns do protocolo HTTP e suas funções. Em seguida, é explicado como criar rotas no Express para responder a esses diferentes métodos.</p>

<p>Por fim, são mostrados exemplos práticos de como utilizar os métodos GET, POST, PUT e DELETE em rotas no Express, utilizando o Postman para fazer requisições HTTP e testar o funcionamento.</p>

<h2>Métodos HTTP</h2>

<p>O protocolo HTTP define um conjunto de métodos que indicam a ação desejada ao fazer uma requisição a um determinado recurso em um servidor.</p>

<p>Os principais são:</p>

<ul>
    <li><strong>GET</strong>: Solicita a representação de um recurso. É utilizado para recuperar dados.</li>
    <li><strong>POST</strong>: Envia uma entidade para o recurso especificado, solicitando que o servidor aceite-a como subordinada. É comumente utilizado para criar novos recursos.</li>
    <li><strong>PUT</strong>: Substitui todas as atuais representações do recurso de destino pela carga de dados da requisição. É utilizado para atualizar um recurso.</li>
    <li><strong>DELETE</strong>: Remove um recurso específico.</li>
</ul>

<p>Além desses, existem também outros métodos como PATCH, OPTIONS, HEAD etc. Cada um tem sua semântica específica sobre o tipo de ação desejada.</p>

<h2>Rotas no Express</h2>

<p>No framework Express do Node.js, podemos criar rotas que respondem a requisições com diferentes métodos HTTP. Isso permite criar APIs RESTful de forma simples e prática.</p>

<p>Por exemplo, podemos ter uma rota <code>/users</code> que responde tanto a requisições GET para obter todos os usuários, quanto POST para criar um novo usuário:</p>

<pre><code class="language-js">app.get('/users', (req, res) =&gt; {  // lógica para retornar usuários});app.post('/users', (req, res) =&gt; {  // lógica para criar um usuário  });</code></pre>

<p>Além de especificar o caminho da rota, informamos também o método HTTP que queremos que ela atenda.</p>

<p>Podemos ter quantas rotas apontando para o mesmo caminho precisarmos, desde que se diferenciem pelo verbo HTTP.</p>

<h2>Exemplos Práticos</h2>

<p>Agora que entendemos sobre os principais métodos e como utilizá-los no Express, vamos ver alguns exemplos práticos.</p>

<h3>Rota GET</h3>

<p>Começando por uma rota simples que responde a requisições GET:</p>

<pre><code class="language-js">app.get('/produtos', (req, res) =&gt; {  res.send('Retornando todos os produtos'); });</code></pre>

<p>Essa rota retorna uma string statica com a mensagem &quot;Retornando todos os produtos&quot; para qualquer requisição GET feita para o caminho <code>/produtos</code>.</p>

<p>Poderíamos implementar a lógica de consultar os produtos no banco de dados e retorná-los de fato na resposta.</p><p>Vamos testar essa rota utilizando o Postman:</p>

<pre><code>GET /produtosRetornando todos os produtos</code></pre>

<p>Funcionou! Foi retornada a mensagem que configuramos.</p>

<h3>Rota POST</h3>

<p>Agora uma rota para lidar com requisições POST e criar um novo recurso:</p>

<pre><code class="language-js">app.post('/produtos', (req, res) =&gt; {  // lógica para criar um produto  res.status(201).send('Produto criado com sucesso'); });</code></pre>

<p>Nesse caso, ao receber uma requisição POST para essa rota, poderíamos processar os dados recebidos no body da requisição, salvar o novo produto no banco e retornar um status 201 (Created) junto com uma mensagem de sucesso.</p>

<p>Vamos testar com o Postman:</p>

<pre><code>POST /produtosProduto criado com sucesso (Status 201)</code></pre>

<p>O status code 201 confirma que o novo recurso foi criado com sucesso.</p>

<h3>Rota PUT</h3>

<p>Seguindo o mesmo princípio, podemos criar uma rota PUT para atualizar um recurso:</p>

<pre><code class="language-js">app.put('/produtos/:id', (req, res) =&gt; {  // lógica para atualizar produto    res.send('Produto atualizado com sucesso');});</code></pre>

<p>Nesse caso, como vamos atualizar um recurso específico, adicionamos o id do produto como parâmetro na rota.</p>

<p>No corpo da requisição PUT enviaremos os campos a serem atualizados e, no código, processaremos a atualização desse produto de id específico.</p>

<p>Testando no Postman:</p>

<pre><code>PUT /produtos/123 Produto atualizado com sucesso</code></pre>

<p>Requisição realizada com sucesso!</p>

<h3>Rota DELETE</h3>

<p>Por fim, uma rota DELETE para remover um recurso:</p>

<pre><code class="language-js">app.delete('/produtos/:id', (req, res) =&gt; {  // lógica para remover produto    res.send('Produto removido com sucesso'); });</code></pre>


<p>Mesma ideia das rotas anteriores, informando o id na URL para identificar o recurso a ser removido e retornando uma mensagem de sucesso.</p>

<p>No Postman:</p>

<pre><code>DELETE /produtos/123Produto removido com sucesso  </code></pre>

<p>Pronto! O produto 123 foi removido com essa requisição DELETE.</p>

<h3>Fixando os conceitos</h3>

<p>Conforme apresentado nesses exemplos, os principais métodos e suas utilizações são:</p>

<ul>
    <li><strong>GET</strong>: Obter recursos</li>
    <li><strong>POST</strong>: Criar novos recursos</li>
    <li><strong>PUT</strong>: Atualizar recursos</li>
    <li><strong>DELETE</strong>: Remover recursos</li>
</ul>

<p>E no Express, configuramos as rotas para responder a esses métodos de acordo com a necessidade da API.</p>

<p>Dessa forma, construímos uma API RESTful, com separação clara de responsabilidades para cada tipo de operação.</p>

<h2>Conclusão</h2>

<p>Os principais métodos HTTP e como utilizá-los no Express para criar uma API REST.</p>

<p>Vimos exemplos práticos de rotas respondenco aos verbos GET, POST, PUT e DELETE, além de fixar o conceito e uso de cada um.</p>
<p>Dominar esses conceitos é importante para desenvolver aplicações Node.js que expõem APIs para serem consumidas por clientes frontend ou mobile.</p>
<p>Além disso, uma API bem projetada, seguindo os padrões REST, tende a ser mais simples, intuitiva e escalável.</p>