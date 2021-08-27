
# Vue Auth Boilerplate
![enter image description here](https://img.shields.io/github/issues/VPetar/vue-auth-boilerplate.svg) ![enter image description here](https://img.shields.io/github/license/VPetar/vue-auth-boilerplate.svg)

This is a starter app / boilerplate for any type of SPA application that you'd want to build with VueJS. If you use, say, Laravel / [laravel-api-boilerplate-jwt](https://github.com/francescomalatesta/laravel-api-boilerplate-jwt) (a package by # [francescomalatesta](https://github.com/francescomalatesta)), you'll feel right at home as it integrates with it's API Auth functions.

>[Looking for Vue 3 perhaps?](https://github.com/VPetar/vue-auth-boilerplate/tree/vue3) Here's the link. :)


## Snapshots
### Login page
![](https://i.imgur.com/DWpiAeP.jpg)
### Register page

![enter image description here](https://i.imgur.com/fixDwai.png)
*image get's clearer as you enter a more secure password. neat.*
### Home page
![enter image description here](https://i.imgur.com/sEkYlzz.png)
![enter image description here](https://i.imgur.com/bVmb31s.png)

## vue-cli 3
For scaffolding of this app, [vue-cli 3](https://cli.vuejs.org/guide/) has been used, meaning, you get to use latest vue-cli 3 features, like [plugins](https://cli.vuejs.org/guide/plugins-and-presets.html#plugins).

## UIkit
It would seem that [UIkit CSS framework](https://getuikit.com/) doesn't get as much attention as it deserves. I believe it's one of the most complete frameworks out there, fun to use, awesome when you master it. This boilerplate is built with UIKit, but you don't need to use it if you don't want to. Login and Register pages are self-contained, and contain their own style, just for this reason.

#### If you want to change and use Bootstrap:
```
npm remove uikit --save
npm install bootstrap --save
```
Also don't forget to cleanup `main.js` file.

## Project setup

```
npm install
```

  

### Compiles and hot-reloads for development

```
npm run serve
```

  

### Compiles and minifies for production

```
npm run build
```

  

### Lints and fixes files

```
npm run lint
```
### Run your unit tests
*Tests are not really written, but you can use Jest built-in into this boilerplate. Pull requests are welcome, as well. :)*
```
npm run test:unit
```
### Additional settings
Please visit /src/settings.js and change the params there to suite your app. It's kinda important since `API_SERVER` will be used to contact Auth functions of your API.
```
APP_NAME:  "Pure Awesomeness",
API_SERVER:  "http://192.168.10.10/api/"
```
### File structure
This is pretty much the default file structure that you get from scaffolding app from `vue-cli 3`, added stuff to suit the needs of the boilerplate.
```
.
|____.browserslistrc
|____.eslintrc.js
|____.gitignore
|____babel.config.js
|____jest.config.js
|____LICENSE
|____package-lock.json
|____package.json
|____postcss.config.js
|____public
| |____favicon.ico
| |____index.html
| |____js
| | |____imagesloaded.pkgd.min.js
| | |____zxcvbn.js
|____README.md
|____src
| |____App.vue
| |____components
| | |____globals
| | | |____ButtonSpinner
| | | | |____index.vue
| |____main.js
| |____router
| | |____index.js
| |____settings.js
| |____store
| | |____actions
| | | |____auth.js
| | | |____user.js
| | |____index.js
| | |____modules
| | | |____auth.js
| | | |____settings.js
| | | |____user.js
| |____styles
| | |____index.scss
| | |_____variables.scss
| |____utils
| | |____api.js
| |____views
| | |____auth
| | | |____login
| | | | |____img
| | | | | |____login.jpg
| | | | |____index.vue
| | | |____register
| | | | |____img
| | | | | |____register.jpg
| | | | |____index.vue
| | | |____styles
| | | | |____auth-styles.scss
| | |____home
| | | |____index.vue
| | |____layouts
| | | |____App
| | | | |____index.vue
|____tests
| |____unit
| | |____.eslintrc.js
| | |____HelloWorld.spec.js
|____vue.config.js

```

## Credits

Mainly credits go to  [codrops](https://github.com/codrops)/**[PasswordStrengthVisualization](https://github.com/codrops/PasswordStrengthVisualization)**. This repo literally inspired me to make a nice Auth SPA with Vue and share it with the world.

If you like this package, please star it, fork it, I'm open for pull requests as well if I missed something. 

-   [Password Strength 'meter'](https://css-tricks.com/password-strength-meter/)  by Pankaj Parashar
-   [zxcvbn](https://github.com/dropbox/zxcvbn)  by Daniel Lowe Wheeler
-   Images from  [Unsplash.com](https://unsplash.com/)
-   [imagesLoaded](http://imagesloaded.desandro.com/)  by Dave DeSandro
-   [Pixelate](http://jsfiddle.net/u6apxgfk/390/)  by Ken Fyrstenberg, Epistemex, License:  [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/)
-   [Fullscreen image in Canvas](https://codepen.io/bassta/pen/OPVzyB)  by Chrysto Panayotov

## LICENSE
MIT
