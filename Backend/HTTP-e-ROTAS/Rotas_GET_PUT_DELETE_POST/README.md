<h1>Criando Rotas POST no Express</h1>

<h2>Introdução</h2>

<p>Neste vídeo, aprendemos a criar rotas POST no Express. As rotas POST são essenciais em qualquer aplicação web, pois permitem que os usuários enviem dados para o servidor.</p>

<p>Até agora, vimos apenas rotas GET, que buscam e retornam dados, mas não alteram nada no servidor. Já as rotas POST recebem dados do cliente e podem criar, editar ou excluir recursos no banco de dados.</p>

<h2>Rotas POST vs Rotas GET</h2>

<p>A principal diferença entre rotas POST e GET é:</p>

<p><strong>Rotas GET:</strong></p>

<ul>
    <li>Buscam e retornam dados do servidor</li>
    <li>Não alteram nada no servidor</li>
    <li>Os parâmetros são passados pela URL</li>
</ul>

<p><strong>Rotas POST:</strong></p>

<ul>
    <li>Recebem dados do cliente via request body</li>
    <li>Podem criar, editar ou excluir recursos no servidor</li>
    <li>Os dados enviados não ficam expostos na URL</li>
</ul>

<p>Além do verbo HTTP (POST ou GET), o Express também diferencia as rotas pelo caminho (route path). Podemos ter uma rota POST e outra GET com o mesmo caminho.</p>

<h2>Criando uma Rota POST</h2>

<p>Para criar uma rota POST no Express, basta usar o verbo POST ao invés de GET:</p>

<pre><code class="language-js">app.post('/cadastrar', (req, res) =&gt; {  // lógica aqui  });</code></pre>

<p>Assim, toda requisição POST para o caminho <code>/cadastrar</code> cairá nesta rota.</p>

<h2>Lendo dados do Body</h2>

<p>Os dados enviados em uma requisição POST estão disponíveis em <code>req.body</code>. Por exemplo:</p>

<pre><code class="language-js">app.post('/usuarios', (req, res) =&gt; {  console.log(req.body); });</code></pre>

<p>Isso imprimirá no console todos os dados JSON enviados pelo cliente.</p>

<h2>Retornando uma Resposta</h2>

<p>Em uma rota POST também precisamos retornar uma resposta com <code>res.send()</code>, informando se a requisição deu certo ou não:</p>

<pre><code class="language-js">app.post('/usuarios', (req, res) =&gt; {  const usuario = req.body;    // salva no banco de dados  salvarUsuario(usuario);     res.send('Usuário cadastrado!');});</code></pre>

<p>Podemos também retornar o código de status HTTP junto:</p>

<pre><code class="language-js">res.status(201).send('Usuário cadastrado!');</code></pre>

<h2>Testando com Postman</h2>

<p>O Postman permite testar facilmente requisições POST.</p>

<p>Basta selecionar o verbo POST, informar a URL do caminho da rota no Express, adicionar a estrutura JSON com os dados no Body e enviar a requisição.</p>

<p>A resposta aparecerá na aba Body ou Raw, dependendo de como foi configurado.</p>

<h2>Conclusão</h2><p>Neste vídeo vimos didaticamente como criar e testar uma rota POST no Express.</p>

<p>As rotas POST recebem dados do cliente e podem criar, editar e excluir recursos no servidor. Elas são essenciais em qualquer aplicação web.</p><p>Já as rotas GET buscam e retornam dados sem alterar nada no servidor.</p>

<p>O Express diferencia as rotas pelo verbo HTTP e pelo caminho. Podemos ter GET e POST com o mesmo caminho.</p><p>E com o Postman fica fácil simular requisições AJAX e testar nossas rotas.</p>

<p>Espero que este material tenha sido útil! As rotas POST são simples de criar mas muito poderosas.</p>

<h2>Perguntas Frequentes</h2>

<p><strong>Como criar uma rota POST no Express?</strong></p>

<p>Basta usar o verbo POST ao invés de GET ao definir a rota:</p>

<pre><code>app.post('/cadastrar', (req, res) =&gt; {  //lógica aqui});</code></pre>

<p><strong>Onde estão os dados enviados numa requisição POST?</strong></p>

<p>Os dados estão disponíveis na propriedade <code>req.body</code>.</p>

<p><strong>Como enviar uma resposta numa rota POST?</strong></p>

<p>Com <code>res.send()</code> ou <code>res.json()</code>:</p>

<pre><code>res.status(200).json({ mensagem: 'Dados recebidos!' }); </code></pre>

<p><strong>Como testar requisições POST?</strong></p>

<p>Usando o Postman! Basta:</p>

<ul>
    <li>Selecionar o verbo POST</li>
    <li>Informar a URL da rota</li>
    <li>Adicionar JSON com dados no Body</li>
    <li>Enviar a requisição</li>
</ul>

<p><strong>Posso ter rotas POST e GET com o mesmo caminho?</strong></p>

<p>Sim! O Express diferencia pelo verbo HTTP.</p>

<h2>Glossário</h2>

<p><strong>Express</strong> - Framework web mais popular do Node.js, usado para criar APIs e aplicações web.</p>
<p><strong>Rotas</strong> - Caminhos em uma aplicação que respondem às requisições HTTP. Ex: <code>/clientes</code>, <code>/produtos</code>.</p>
<p><strong>GET</strong> - Verbo HTTP usado para buscar recursos do servidor.</p>
<p><strong>POST</strong> - Verbo HTTP usado para enviar dados ao servidor.</p>
<p><strong>req.body</strong> - Propriedade do objeto <code>request</code> que contém os dados enviados em requisições POST e PUT.</p>
<p><strong>res.send()</strong> - Método usado para enviar uma resposta ao cliente.</p>
<p><strong>res.json()</strong> - Método usado para enviar uma resposta em formato JSON.</p>
<p><strong>Postman</strong> - Ferramenta usada para testar APIs enviando requisições HTTP.</p>
<p><strong>Status Code</strong> - Códigos de resposta HTTP que indicam o resultado de uma requisição. Ex: 200 (OK), 404 (Não encontrado).</p>