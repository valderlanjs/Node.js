# Módulos CommonJS

1. **Criação de um Módulo**

    * Criação de um arquivo sum.js

    * Definição de uma função sum que recebe parâmetros e retorna o resultado.

    * Exportação da função sum usando module.exports.


2. **Importação de um Módulo**

    * Criação de um arquivo main.js.

    * Importação da função sum do módulo sum.js usando require().

    * Utilização da função sum importada para realizar uma operação de soma.

3. **Execução do Código**

    * Execução do arquivo main.js usando o comando node main.js.

    * Exibição do resultado da soma no console.

# Módulos ES (ESM)

1. **Criação de um Módulo ESM**

    * Criação de um arquivo sum.mjs.

    * Definição da função sum e exportação usando export default.

2. **Importação de um Módulo ESM**

    * Criação de um arquivo main.js.

    * Importação da função sum do módulo sum.mjs usando import.

3. **Configuração do Projeto para Módulos ESM**

    * Alteração do type no package.json para "module".
    * Necessidade de usar a extensão .mjs para arquivos ESM.

4. **Execução do Código ESM**

    * Execução do arquivo main.js usando o comando node main.js.
    * Exibição do resultado da operação de subtração no console.


#### O CommonJS ainda é o formato mais amplamente suportado, mas os ESM estão sendo adotados gradualmente.

#### Ao utilizar ESM, é importante estar atento à compatibilidade com bibliotecas de terceiros.