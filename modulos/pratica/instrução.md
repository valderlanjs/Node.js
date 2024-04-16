## Criar um arquivo JavaScript que exporte, usando a sintaxe de ESModules, as 4 funções abaixo:

1. Uma função que deve criar um arquivo de texto chamado "meuarquivo.txt" no diretório atual contendo o texto informado como argumento.

2. Uma função que deve reescrever o texto no arquivo "meuarquivo.txt" substituindo o conteúdo pelo texto informado no argumento.

3. Uma função que deve ler o conteúdo do arquivo "meuarquivo.txt" e exibi-lo no console.

4. Uma função que deve excluir o arquivo "meuarquivo.txt" do sistema de arquivos.

Depois de criar as funções, importá-las em um outro arquivo e executá-las para fins de teste de acordo com o exemplo abaixo:


        createFile("Conteúdo inicial do arquivo.\nCriado com o módulo fs do Node.js.");
        showFile();
        updateFile("Conteúdo modificado!");
        showFile();
        deleteFile();