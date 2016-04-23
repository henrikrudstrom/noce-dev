process.env.LD_LIBRARY_PATH = '/usr/local/lib';
const noceWrap = require('oce-wrap');
const gulp = require('gulp');
noceWrap.init(gulp, {
  paths: { dist: '../noce' }
});
