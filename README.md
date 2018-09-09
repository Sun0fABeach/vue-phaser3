# vue-phaser3

#### Webpack boilerplate that integrates Phaser 3 into a Vue project.

This project template has been set up using the **Vue CLI 3** and includes:
* *Sass*
* *CSS Postprocessing*
* *Babel*
* *Source Minification*

## Build Setup

``` bash
# install dependencies
npm install

# serve with live reloading at localhost:8080
npm run dev

# build for production with transpilation / minification
npm run build

# serve your production build at localhost:5000
npm run serve
```

## Extending the project to your needs

If you want to add more features like *linting*, *unit testing* or *Typescript* to
your own project, you can do so quite easily via Vue CLI's plugin system. Check
out the <a href="https://cli.vuejs.org/guide/" target="_blank">documentation</a>
if you want to know more.

## Converting into your own repository

If you want to maintain your own repo based on this boilerplate, you first need to detach it from this repo. Here is what you need to do:

1. edit these files and enter your own project info
	* *package.json*
	* *README.md*
	* *public/index.html*

2. delete *LICENSE* (and perhaps add your own)

3. reinitialize git
<pre><code>rm -rf .git
git init
git add .
git commit -m "Initial commit"
</code></pre>
