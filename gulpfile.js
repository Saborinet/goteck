const elixir = require('laravel-elixir');

require('laravel-elixir-vue');
var gulp = require('gulp'),
browserSync = require('browser-sync');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var livereload = require('gulp-livereload');
var watch = require('gulp-watch');
var minifycss = require('gulp-minify-css');
/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */


elixir(mix => {
    mix.sass('app.scss')
       .webpack('app.js');
});
