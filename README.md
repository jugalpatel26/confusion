# Confusion

Web Application for a restaurant to display the basic information of restaurants like - menu, contact, history. Developed using technologies like React, Redux, JSON-server.   

## Basic setup and running 

Install [npm](https://www.npmjs.com/get-npm) 

### `npm install json-server -g`

Installing json-server globally
If you are using OSX or Linux, use sudo at the front of the command

In the json-server directory and run:

### `json-server --watch db.json -p 3001 -d 2000`

This should start up a server at port number 3001 on your machine

In the confusion directory, run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
App is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
