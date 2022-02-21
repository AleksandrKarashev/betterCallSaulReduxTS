![start image](https://i.ibb.co/9VZ81ZV/start.png)

### Introdução

Esse aplicativo é baseado na série "Better call Saul".

Usam-se React Native (Expo), Node.js e MySQL, Typescript e Redux.

Insira seu nome no formulário e clique no botão "Agendar ligação".

Em caso de sucesso, vai aparecer uma nova tela com uma saudação, caso contrário, uma mensagem de erro.

Você pode retornar da segunda tela para a primeira, mas já não poderia agendar uma nova ligação (os controles são desativados).

### Instalação

```
cd betterCallSaul
yarn install
yarn installServer
yarn dev     
```
e seguem as próximas instruções do Expo.


_Atenção!_

Antes de começar o projeto, é necessário inserir seus dados de banco de dados (DB) no arquivo `serverSide/config/default.json`. 

O DB do projeto usa a seguinte tabela `clients`:
  ```
  id int AUTO_INCREMENT PRIMARY KEY
  name VARCHAR(40)
  ```

![This is an image](https://i.ibb.co/4dD9LKM/db.png)

### Mais imagens

![success image](https://i.ibb.co/cyfvfBN/success.png)    ![final image](https://i.ibb.co/pfkyVRv/finish.png)
