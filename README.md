# server

## ERD:

![Untitled%20Diagram-Page-2.drawio img](https://github.com/noorah15/server/blob/main/Untitled%20Diagram-Page-2.drawio.png)

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

    email: { type: String, required: true, trim: true },
    password: { type: String, required: true },
    fav: { type: Array, required: false },
    role:{ref from role table},
    isDel:{type: Boolean, required: true, trim: true}

### hotels:

    name: { type: String, required: true, trim: true },
    city: { type: String, required: true, trim: true },
    desc: { type: String, required: true },
    imges: { type: Array, required: true },
    cost: { type: Number, required: true },
    isDel:{type: Boolean, required: true}

### festivals:

    name: { type: String, required: true, trim: true },
    city: { type: String, required: true, trim: true },
    desc: { type: String, required: true },
    imges: { type: Array, required: true },
    cost: { type: Number, required: true },
    isDel:{type: Boolean, required: true, trim: true}

### trips:

    userId:{ref from user table},
    hotelId:{ref from hotels table},
    FestivalId:{ref from Festivals table},
    name: { type: String, required: true, trim: true },
    city: { type: String, required: true, trim: true },
    cost: { type: Number, required: true },
    days: { type: Number, required: true },
    catg: { type: String, required: true, trim: true },
    isItSuitableForFamily:{type: Boolean, required: true}
    isDel:{type: Boolean, required: true}

### Orders:

    userId:{ref from user table},
    tripId:{ref from trips table},
    cost: { type: Number, required: true },
    isDel:{type: Boolean, required: true}

## Routers:

    post "user/signup"
    post "user/login"

    post "hotels/add"

    post "touristPlaces/add"

    post "journey/add"
    get "journey/get"
    get "journey/getInfo/:id"
    get "journey/getJourneyByCity/:city1"
    get "journey/getJourneyByCatg/:catg1"
    get "journey/getJourneyByDays/:days1"
