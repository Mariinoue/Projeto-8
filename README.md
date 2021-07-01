# ProjetoS8-API-GET

# Projeto de API com método GET :woman_technologist:

Olá visitante, sou a Mari e estou muito contente em postar o meu segundo projeto de API. :happy:

A proposta do projeto é desenvolver uma API com método GET. 

O modelo de negócio pede :

- Quero poder consultar uma lista das
  séries do catálogo da {Reprograma}Flix por título, id e também a
  lista completa;

- Se o usuário digitar errado o nome da série

  quero retorno do erro.

----------------------------------------------------------------------

### Gerenciamento de pacotes - NPM

Dependências baixadas:

- express
- **express**. **Router**() é um gerenciador/manipulador de rotas do NodeJS. Ela serve para criar rotas de forma modularizada, assim possibilitando criar um arquivo separado de manipulação de rotas.
- nodemon 

---------------------------------------------------------------------------------

_Node.js versão 15.6.0_

----------------------------------------------------------------------------------------

### Arquitetura- MVC

O projeto foi dividido em arquivos distintos, seguindo a MVC um padrão de arquitetura de software. 

Com a exceção do não uso de views.

[x]server.js -configuração da porta e iniciando o servidor. 

[x]app.js -indicação das rotas e requisições.

[x]controllers/seriesController.js -criação da lógica da API

[x]routes/seriesRoutes.js - criação das rotas e verbo GET.

[x]models/series.json - está armazenado o catálogo das séries. 

_______

_Postman_ para testagem da API 



![ProgetoS8](https://user-images.githubusercontent.com/82849390/124197161-52963700-daa4-11eb-9af3-1988fff9e602.gif)
