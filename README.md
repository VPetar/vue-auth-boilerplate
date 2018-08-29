
# Vue Auth Boilerplate
This is a starter app / boilerplate for any type of SPA application that you'd want to build with VueJS. If you use, say, Laravel / [laravel-api-boilerplate-jwt](https://github.com/francescomalatesta/laravel-api-boilerplate-jwt) (a package by # [francescomalatesta](https://github.com/francescomalatesta)), you'll feel right at home as it integrates with it's API Auth functions.

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
It would seem that [UIkit CSS framework](https://getuikit.com/) doesn't get as much attention as it deserves. I believe it's one of the most complete frameworks out there, fun to use, awesome when you master it. This boilerplate is built has included UIKit, but you don't need to use it if you don't want to. Login and Register pages are self-contained, and contain their own style, just for this reason.

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

## Credits

Mainly credits go to  [codrops](https://github.com/codrops)/**[PasswordStrengthVisualization](https://github.com/codrops/PasswordStrengthVisualization)**. This repo literally inspired me to make a nice Auth SPA with Vue and share it with the world.

If you like this package, please star it, fork it, I'm open for pull requests as well if I missed something. 

-   [Password Strength 'meter'](https://css-tricks.com/password-strength-meter/)  by Pankaj Parashar
-   [zxcvbn](https://github.com/dropbox/zxcvbn)  by Daniel Lowe Wheeler
-   Images from  [Unsplash.com](https://unsplash.com/)
-   [imagesLoaded](http://imagesloaded.desandro.com/)  by Dave DeSandro
-   [Pixelate](http://jsfiddle.net/u6apxgfk/390/)  by Ken Fyrstenberg, Epistemex, License:  [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/)
-   [Fullscreen image in Canvas](https://codepen.io/bassta/pen/OPVzyB)  by Chrysto Panayotov