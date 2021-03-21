## Evaluate News Article with Natural Language Processing

This project aims to build a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. When a user submits a URL of an article, the web page then dispalys sentiment analysis returned from [meaningcloud API](https://www.meaningcloud.com/products/sentiment-analysis), based on the contents of the article.

## technologies

- HTML
- CSS
- JavaScript
- Node
- Express
- Webpack
- meaningcloud API
- Jest
- Workbox

## Structure

```pash
.
├── package.json
├── package-lock.json
├── README.md
├── src
│ ├── client
│ │ ├── index.js
│ │ ├── js
│ │ │ ├── checkURL.js
│ │ │ └── formHandler.js
│ │ ├── styles
│ │ │ ├── base.scss
│ │ │ ├── footer.scss
│ │ │ ├── form.scss
│ │ │ ├── header.scss
│ │ │ └── resets.scss
│ │ ├── **test**
│ │ │ ├── testHandleSubmit.spec.js
│ │ │ └── testUrl.spec.js
│ │ └── views
│ │ └── index.html
│ └── server
│ ├── index.js
│ ├── mockAPI.js
│ └── **test**
│ └── server.spec.js
├── webpack.dev.js
└── webpack.prod.js
```

## How to run

Make sure Node and npm are installed from the terminal.

```
node -v
npm -v
```

1. Move to the project folder

```
cd <project directory>
```

2. install packages

```
npm i
```

3. you should create .env file and add your api key to it

   1. Create a the `.env` file in the root of the project
   2. Fill the `.env` file with your API key like this:

   ```
   API_KEY=**************************
   ```

4. run tests :

```
npm run test
```

5. Run in dev mode :

```
npm run build-dev
```

6. Run in production mode to generate a dist folder for prod:

```
npm run build-prod
```

7. run server by :

   1. - `npm run start` to run the Express server on port 8085 in watch mode

   2. - `node src/server/index.js` to run the Express server on port 8080

**Note:** The web page can be accessed with `localhost:8080` in dev mode

**Note:** The server is runing on `localhost:8085`

Open browser at http://localhost:8085/

---
