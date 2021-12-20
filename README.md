# server

## UML:

![Untitled%20Diagram.drawio%20(1) img](<https://github.com/MP-Project-Noorah/server/blob/main/images/Untitled%20Diagram.drawio%20(1).png>)

## ERD:

![Untitled%20Diagram-Page-2.drawio img](https://github.com/noorah15/server/blob/main/Untitled%20Diagram-Page-2.drawio.png)

## How work:

In this project, it has been created backend with Express server.

In command write:
npm init -y

It has been import these packages:
express:
The Express philosophy is to provide small, robust tooling for HTTP servers, making it a great solution for single page applications, web sites, hybrids, or public HTTP APIs.

        In command write:
        npm i express

        For more information visit:
        https://www.npmjs.com/package/express

    dotenv:
        Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.

        In command write:
        npm i dotenv

        For more information visit:
        https://www.npmjs.com/package/dotenv

    jsonwebtoken:
        JSON Web Tokens (JWT) are an RFC 7519 open industry standard for representing claims between two parties. For example, you can use jwt.io to decode, verify, and produce JWT.
        JWT specifies a compact and self-contained method for communicating information as a JSON object between two parties. Because it is signed, this information can be checked and trusted. JWTs can be signed using a secret (using the HMAC algorithm) or an RSA or ECDSA public/private key combination. In a moment, we’ll see some examples of how to use them.

        In command write:
        npm i jsonwebtoken

        For more information visit:
        https://www.npmjs.com/package/jsonwebtoken


    bcrypt:

        The bcrypt NPM package is a JavaScript implementation of the bcrypt password hashing function that allows you to easily create a hash out of a password string. Unlike encryption which you can decode to get back the original password, hashing is a one-way function that can’t be reversed once done.

        When the user submits a password, the password will be hashed and your JavaScript application needs to store the hash in the database. Later when the user wants to authenticate his or her account, you need to compare the password input with the hash stored in your database to see if it matches.

        In command write:
        npm i bcrypt


        For more information visit:
        https://www.npmjs.com/package/bcrypt


    mongoose:

        Mongoose is a Node.js-based Object Data Modeling (ODM) library for MongoDB. It is akin to an Object Relational Mapper (ORM) such as SQLAlchemy for traditional SQL databases. The problem that Mongoose aims to solve is allowing developers to enforce a specific schema at the application layer. In addition to enforcing a schema, Mongoose also offers a variety of hooks, model validation, and other features aimed at making it easier to work with MongoDB.

        In command write:
        npm i mongoose


        For more information visit:
        https://www.npmjs.com/package/mongoose

## Models:

### users:

| key      | type          | options        | default value |
| -------- | ------------- | -------------- | ------------- |
| email    | String        | required, trim | n/a           |
| password | String        | required       | n/a           |
| fav      | String        | required       | n/a           |
| role     | Schema <role> | required       | n/a           |
| isDel    | Boolean       | n/a            | false         |

### hotels:

| key   | type    | options        | default value |
| ----- | ------- | -------------- | ------------- |
| name  | String  | required, trim | n/a           |
| city  | String  | required, trim | n/a           |
| desc  | String  | required       | n/a           |
| imges | Array   | required       | n/a           |
| cost  | Number  | required       | n/a           |
| isDel | Boolean | n/a            | false         |

### festivals:

| key   | type    | options        | default value |
| ----- | ------- | -------------- | ------------- |
| name  | String  | required, trim | n/a           |
| city  | String  | required, trim | n/a           |
| desc  | String  | required       | n/a           |
| imges | Array   | required       | n/a           |
| cost  | Number  | required       | n/a           |
| isDel | Boolean | n/a            | false         |

### trips:

| key                   | type               | options        | default value |
| --------------------- | ------------------ | -------------- | ------------- |
| userId                | Schema <user>      | required       | n/a           |
| hotelId               | Schema <hotels>    | required       | n/a           |
| FestivalId            | Schema <festivals> | required       | n/a           |
| name                  | String             | required, trim | n/a           |
| city                  | String             | required, trim | n/a           |
| cost                  | Number             | required       | n/a           |
| days                  | Number             | required       | n/a           |
| catg                  | String             | required, trim | n/a           |
| isItSuitableForFamily | Boolean            | n/a            | true          |
| isDel                 | Boolean            | n/a            | false         |

### Orders:

| key    | type          | options  | default value |
| ------ | ------------- | -------- | ------------- |
| userId | Schema <user> | required | n/a           |
| tripId | Schema <trip> | required | n/a           |
| cost   | Number        | required | n/a           |
| isDel  | Boolean       | n/a      | false         |

## Routers:

| HTTP Method | URL                               | Request Body                                                                  | Success status | Error status | Description                  |
| ----------- | --------------------------------- | ----------------------------------------------------------------------------- | -------------- | ------------ | ---------------------------- |
| post        | "user/signup"                     | email, password,role                                                          | 201            | 400          | create account               |
| post        | "user/login"                      | email, password,                                                              | 201            | 400          | login account                |
| post        | "hotels/add"                      | name, city, desc, imges, cost,                                                | 201            | 400          | add hotel                    |
| put         | "hotels/edit"                     | id, name, city, desc, imges, cost,                                            | 201            | 400          | edit hotel                   |
| delete      | "hotels/del"                      | id                                                                            | 201            | 400          | delete hotel                 |
| post        | "touristPlaces/add"               | name, city, desc, imges, cost,                                                | 201            | 400          | add touristPlaces            |
| put         | "touristPlaces/edit"              | id,name, city, desc, imges, cost,                                             | 201            | 400          | edit touristPlaces           |
| delete      | "touristPlaces/del"               | id                                                                            | 201            | 400          | delete touristPlaces         |
| post        | "journey/add"                     | userId, hotelId, festivalId,name, city, cost,days,catg, isItSuitableForFamily | 201            | 400          | add journey                  |
| put         | "journey/edit"                    | id, hotelId, festivalId,name, city, cost,days,catg, isItSuitableForFamily     | 201            | 400          | edit journey                 |
| delete      | "journey/del"                     | id                                                                            | 201            | 400          | delete journey               |
| get         | "journey/get"                     |                                                                               | 201            | 400          | get the journey info         |
| get         | "journey/getInfo/:id"             | id                                                                            | 201            | 400          | get the specifc journey info |
| get         | "journey/getJourneyByCity/:city1" | city                                                                          | 201            | 400          | get the journey info by city |
| get         | "journey/getJourneyByCatg/:catg1" | catg                                                                          | 201            | 400          | get the journey info by catg |
| get         | "journey/getJourneyByDays/:days1" | days                                                                          | 201            | 400          | get the journey info by days |

## Links:

- [Link to server](https://github.com/MP-Project-Noorah/server)

- [Link to client](https://github.com/MP-Project-Noorah/client)

- [Link to presentation](https://www.google.com)

- [Link to Deployed App](https://www.google.com)
