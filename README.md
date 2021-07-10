# vue-phaser3

#### Webpack boilerplate that integrates Phaser 3 into a Vue 3 project.

This project template has been set up using the **Vue CLI 4** and includes:
* *Sass*
* *CSS Postprocessing*
* *Babel*
* *Source Minification*

## Build Setup

``` bash
# install dependencies
npm install

# serve with live reloading at localhost:8080
npm run serve

# build for production with transpilation / minification
npm run build

# serve your production build at localhost:5000
npm start
```

## Extending the project to your needs

If you want to add more features like *linting*, *unit testing* or *Typescript* to
your own project, you can do so quite easily via Vue CLI's plugin system. Read
the <a href="https://cli.vuejs.org/guide/" target="_blank">documentation</a>
if you want to know more.

## Converting into your own repository

If you want to maintain your own repo based on this boilerplate, you first need
to detach it from this repo. Here is what you need to do:

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

## Sharing data between Vue and Phaser

You might want to expose some game state that lives inside of your Phaser code
to your Vue components and vice versa, for example a highscore. Here are two
ways you can achieve sharing state between the frameworks.

* Import a Phaser <a href="https://photonstorm.github.io/phaser3-docs/Phaser.Events.EventEmitter.html" target="_blank">EventEmitter</a> instance in
both your Vue components and Phaser modules. Both sides can then listen to and
emit events on that emitter.

* Have both sides share a <a href="https://vuex.vuejs.org/guide/" target="_blank">
Vuex</a> store instance. It works like an event emitter, but can also hold
state. While the store is nicely integrated into your Vue components, on the
Phaser side you'll have to use the raw store
<a href="https://vuex.vuejs.org/api/#vuex-store-instance-properties" target="_blank">API</a>.
