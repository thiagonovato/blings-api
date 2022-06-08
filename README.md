## Getting Started

First, run to install dependencies

```bash
npm install
# or
yarn install
```

Firstly start the API Server and after the web application. Is the same command to both.

```bash
npm run start
# or
yarn start
```

The web application will run in `http://localhost:3000` and the API Server will run in `http://localhost:5000`. Open the web application in your web browser to use.

## How works it?

API Server has only one endpoint that receives parameters via query params

- /contacts - Endpoint that return the list of contacts filtered

The identification of each parameter is:

- The text will be considered a contact name and will be used to find by name
- Number up to 3 (three) digits will be considered age and will be used to find by age
- Number more than 4 (four) digits will be considered a contact phone number and will be used to locate by phone

You can combine all options and the filter will be applied based on your specification. For example, if you search for "Lou 60", all contacts with the name "Lou" and age "60" will be searched. Both criteria will be considered in the same search.

## Using online

Both applications are available online on the follow links to use:

- Web Application: [https://blings-web.vercel.app/](https://blings-web.vercel.app/)
- API Server: [https://blings-api.herokuapp.com/](https://blings-api.herokuapp.com/)

## Repositories on GitHub

Both applications are available on the follow links to use:

- Web Application: [https://github.com/thiagonovato/blings-web](https://github.com/thiagonovato/blings-web)
- API Server: [https://github.com/thiagonovato/blings-api](https://github.com/thiagonovato/blings-api)
