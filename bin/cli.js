#!/usr/bin/env node

// copy all template_dir to current dir
var path = require('path')
var cp = require('node-cp')

var template_dir = path.resolve(path.join(__dirname,'../template_dir/'))

cp(template_dir, process.cwd(), function(err, files) {
  if (err) {
    console.log('\n')
    console.log('\n')
    console.log('--- ERROR Copying template dir/files')
    console.log(err)
    console.log('\n')
    return
  }
  console.log('\n')
  console.log('+++ Done copying template files')
  console.log('\n')
  console.log('+++ Package Contains')
  console.log(' - babel')
  console.log(' - webpack')
  console.log(' - rollup')
  console.log(' - mocha')
  console.log(' - instanbul as nyc')
  console.log(' - standard.js eslint')
  console.log(' - .travis.yml config')
  console.log(' - semantic-release-cli // auto publish to NPM on `git push` via travis-ci')
  console.log('\n')
  console.log('+++ Commands Available')
  console.log(' - npm run watch // watches test/ src/ and runs tests')
  console.log(' - npm run dev // runs webpack dev server @ localhost:8080')
  console.log(' - npm run coverage // get code coverage report')
  console.log('\n')
  console.log('+++ Todo')
  console.log(' - git init && add git remote')
  console.log(' - rename the package in package.json & readme')
  console.log(' - add git repo in package.json')
  console.log(' - run `npm i`')
  console.log(' - Travis-ci setup/config for builds on git repo')
})
