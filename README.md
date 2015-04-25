# Built following @nicinabox tutorial/demo

# Setup a basic React project

## Create a package.json to manage dependencies and scripts

    npm init

## Install react

    npm install -S react

## Install some dev dependencies

    npm install -D webpack babel-loader connect serve-static

## Setup some folder structure

    mkdir -p public app/components
    touch app/main.js webpack.config.js server.js public/index.html

## Configure webpack

Edit `webpack.config.js`. This is a starting point for configuration.

    module.exports = {
      entry: './app/main.js',
      output: {
        filename: 'build/bundle.js'
      },
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: ['node_modules', 'bower_components']
          }
        ]
      }
    };

## Configure dev server

Copy this guy into `server.js`: https://gist.github.com/nicinabox/1cca035f391f4d75d5bc

If you're lazy and trust me:

    curl https://gist.githubusercontent.com/nicinabox/1cca035f391f4d75d5bc/raw/100855f746ee235076a49aba7a673de5414def4e/server.js > server.js

## Configure index.html

Here's a basic template to get started. The key parts here are an element to render into (`#app`) and the script we're building (`bundle.js`).

    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>React Starter</title>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
    </head>
    <body>
      <div id="app"></div>

      <script src="../build/bundle.js"></script>
    </body>
    </html>


## Configure basic tasks

Add to `package.json` `scripts` below `test`. Don't forget your commas.

    ...
    "start": "npm run server & webpack -wd",
    "server": "node server.js"
    ...

## Run it

    npm start

Open `http://localhost:8000`. You should see a blank page with the title "React Starter".

# Basic components

`app/main.js`

    var React = require('react');
    var App = require('./components/App');

    React.render(<App />, document.getElementById('app'));

`app/components/App.js`

    var React = require('react');

    var App = React.createClass({

      render: function() {
        return (
          <div>
            hello world
          </div>
        );
      }

    });

    module.exports = App;
