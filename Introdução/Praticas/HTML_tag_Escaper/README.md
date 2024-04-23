<h1>Tema Central</h1>
<p>Desenvolvimento de um projeto prático utilizando Node.js para escapar caracteres especiais de arquivos HTML.</p>

<h2>Tópicos Abordados</h2>
<h3>1. Escapar Caracteres Especiais</h3>
<ul>
    <li>Conceito de escapar caracteres</li>
    <li>Exemplo de escapar a barra invertida no JavaScript</li>
    <li>Escapar caracteres especiais do HTML (&lt; e &gt;)</li>
</ul>

<h3>2. Criar Função para Escapar HTML</h3>

<ul>
    <li>Criar função <code>escapeHTMLSpecialCharacters</code></li>
    <li>Utilizar expressão regular para substituir os caracteres especiais</li>
    <li>Retornar a string com os caracteres escapados</li>
</ul>

<h3>3. Ler e Escrever Arquivo</h3>

<ul>
    <li>Criar função <code>escapeHTMLFile</code></li>
    <li>Ler o conteúdo do arquivo de entrada usando <code>fs.readFileSync</code></li>
    <li>Escapar o conteúdo usando a função <code>escapeHTMLSpecialCharacters</code></li>
    <li>Escrever o conteúdo escapado no arquivo de saída usando <code>fs.writeFileSync</code></li>
</ul>

<h3>4. Interação com o Usuário</h3>

<ul>
    <li>Criar função <code>askFilePath</code> para perguntar o caminho dos arquivos</li>
    <li>Usar <code>readline</code> para interagir com o usuário</li>
    <li>Tratar casos em que o usuário fornece os caminhos via argumentos da linha de comando</li>
</ul>

<h3>5. Executar o Programa</h3>

<ul>
    <li>Criar função <code>run</code> que coordena a execução do programa</li>
    <li>Verificar se os argumentos foram fornecidos</li>
    <li>Chamar as funções necessárias para escapar o arquivo HTML</li>
    <li>Exibir mensagens de feedback ao usuário</li>
</ul>

<h3>6. Considerações Finais</h3>

<ul>
    <li>Importância de automatizar tarefas repetitivas</li>
    <li>Versatilidade do Node.js para além de aplicações web</li>
    <li>Possibilidade de utilizar pacotes do NPM para ampliar funcionalidades</li>
</ul>