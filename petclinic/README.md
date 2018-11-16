# petclinic

1. Pour la base de données, dans le cmd :

`docker pull mysql:5.6`

`docker run --name petclinic -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root -d mysql:5.6`

Via mysql workbench : créer un user petclinic:petclinic et créer un schema liquibase_petclinic

2. Pour installer le tout (dans visual studio code) : 

`$ gradle build`

Rentrer dans petclinic-react

`$ npm install`

`$ yarn add react-router`

`$ yarn add react-router-dom`

`$ yarn add axios`

`$ npm start`

Ouvrir un deuxième prompt de commande

`$ gradle dev update`

`$ gradle bootrun`



