# Burger is built by reactJS
Using realtime database of google firebase.

## How to run the app

Run the app
```
$>npm install
$>npm start
```

## Testing
```
$>npm test
```

## Builds the app for production to the `build` folder.

It correctly bundles React in production mode and optimizes the build for the best performance.

```
$>npm run build
```
The build is minified and the filenames include the hashes.<br />

## Deploy to firebase

Install Firebase CLI:
```
$>npm install -g firebase-tools
```

Sign in to Google
```
$>firebase login
```

Initiate project
```
$>firebase init
```

Deploy to firebase hosting
```
$>firebase deploy
```

Your app is ready to be deployed!

Go to firebase -> Hosting to see the url of the deployment.

## One way operation

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

```
$>npm run eject
# You can not go back after run the command
```

## Install webpack in developement

```
$>npm install --save-dev webpack webpack-dev-server
```

Change scripts.start in package.json to `webpack-dev-server`

```
$>npm install --save-dev webpack-cli

Then
$>npm start
We will see the app start by webpack-dev-server
```

Configure for webpack: create webpack.config.js in `src` folder with content:
```
const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
        publicPath: ''
    },
    devtool: 'cheap-module-eval-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'style-loader'},
                    { loader: 'css-loader', options: {
                        importLoaders: 1,
                        modules: {
                            localIdentName: '[name]__[local]__[hash:base64:5]'
                        }
                    }},
                    { loader: 'postcss-loader', options: {
                        ident: 'postcss',
                        plugins: () => [autoprefixer()]
                    }}
                ]
            },
            { test: /\.(png|jpe?g|gif)$/, loader: 'url-loader?limit=8000&name=images/[name].[ext]'}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.html',
            filename: 'index.html',
            inject: 'body'
        })
    ]
};
```

```
Install babel
$>npm install --save-dev @babel/core @babel/preset-env @babel/preset-react @babel/preset-stage-2 babel-loader @babel/plugin-proposal-class-properties
```

Create file `.babelrc` with content:
```
{
    "presets": [
        ["@babel/preset-env", {
            "targets": {
                "browsers": ["> 1%", "last 2 versions"]
            }
        },
        "useBuiltIns": "usage"
        ],
        "@babel/preset-react"
    ],
    "plugins": [
        "@babel/plugin-proposal-class-properties"
    ]
}
```

```
Install packages for configure style
$>npm install --save-dev style-loader css-loader
$>npm install --save-dev postcss-loader
$>npm install --save-dev autoprefixer
```

In `package.json`, input the below line after `license`:
```
"browserslist":"> 1%, last 2 versions",
```

```
Install package for config image url
$>npm install --save-dev url-loader
```

```
$>npm install --save-dev html-webpack-plugin
$>npm install --save-dev file-loader
```

For production, create `webpack.config.prod.js`, include content:
```
const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
        publicPath: ''
    },
    devtool: 'none',
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'style-loader'},
                    { loader: 'css-loader', options: {
                        importLoaders: 1,
                        modules: {
                            localIdentName: '[name]__[local]__[hash:base64:5]'
                        }
                    }},
                    { loader: 'postcss-loader', options: {
                        ident: 'postcss',
                        plugins: () => [autoprefixer()]
                    }}
                ]
            },
            { test: /\.(png|jpe?g|gif)$/, loader: 'url-loader?limit=8000&name=images/[name].[ext]'}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.html',
            filename: 'index.html',
            inject: 'body'
        })
    ]
};
```

Input below content into `package.json` for production
```
"scripts": {
    "build:prod": "webpack --config webpack.config.prod.js"
}
```