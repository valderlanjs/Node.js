# Manipulação de Arquivos com Node.js

## Aprender a manipular arquivos utilizando o módulo File System (FS) nativo do Node.js.

## Tópicos Abordados

1. **Escrita de Arquivos**

    * Usando o método fs.writeFileSync() (síncrono).
    * Usando o método fs.writeFile() (assíncrono).
    * Sobrescrevendo o conteúdo de um arquivo existente.

2. **Leitura de Arquivos**

 * Usando o método fs.readFileSync() (síncrono).
 * Usando o método fs.readFile() (assíncrono).
 * Tratamento de erros na leitura de arquivos.

3. **Renomeação de Arquivos**

    * Usando o método fs.rename() (assíncrono).

4. **Exclusão de Arquivos**

    * Usando o método fs.unlink() (assíncrono).

5. **Outros Métodos do FS**

    * fs.exists() (verifica se um arquivo existe).
    * fs.mkdir() (cria diretórios).
    * fs.rmdir() (exclui diretórios).

#### Boas Práticas

* Preferir métodos assíncronos para evitar bloqueio da aplicação.
* Evitar o "callback hell" (aninhamento excessivo de callbacks).
* Consultar a documentação do Node.js para conhecer todos os métodos disponíveis no FS.