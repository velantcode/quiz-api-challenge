# Quiz API Challenge

## Install

- Clone this repository: `git clone https://github.com/velantcode/quiz-api-challenge.git`

- You must have MongoDB installed.

- Create a `.env` file from `.env.example`.

- The database's params must be indicates in the .env file.

- Use `npm` or `yarn` to install packages and run the project.

- Build Setup

      # Install dependencies
      $ npm i

      # Build for production server
      $ npm run build

      # Generate documentation API
      $ npm run docs

      # Review, preformatted and build the code and generate docs before create commit
      $ npm run precommit

      # Serve with hot reload at localhost:9000 to dev
      $ npm run dev

      # Run Server in production
      $ npm run start

      # Confirms that the server works
      http://localhost:9000/api
      http://yourdomain.com/api

      # Access to documentation in the broswer
      http://localhost:9000/apidoc
      http://yourdomain.com/apidoc

## Commands to migrations base to develop

## Server config

    # SERVER API PORT
    API_PORT=9000

## Database params

    DDB_HOST=0.0.0.0
    DDB_PORT=27017
    DDB_NAME=quiz
    DDB_USER=
    DDB_PASSWORD=

## To use API as user mode, the session token is required, to verify Authenticated in the Middleware of the API

    # Add in the headers the value to check session logged:

    x-access-token: token-session

    # where, token is a recived value for the login action.

## Contribute

¡The contributions are always welcome! Please, first read the steps to [contribute] (https://github.com/DeliiApp/server_delii_db/blob/master/CONTRIBUTING.md).

## More documentation about Express.js

Official documentation [Express.js docs](https://expressjs.com).

## Others docs

[APIDocs](https://apidocjs.com/).

[MongoDB Docs](https://docs.mongodb.com/drivers/node/current/).

[Mongoose Docs](https://mongoosejs.com/docs/).
