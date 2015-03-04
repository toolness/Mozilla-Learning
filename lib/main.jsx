var React = require('react');
var Router = require('react-router');

var config = require('./config');
var windowUtil = require('./window-util');
var pages = require('./pages.jsx');

function startRunningSite() {
  var url = document.querySelector('meta[name=url]').getAttribute('value');
  var baseEl = document.querySelector('base[href]');
  var pageHolder = document.getElementById('page-holder');

  baseEl.setAttribute('href', windowUtil.getAbsoluteURL('/'));

  if (config.ENABLE_PUSHSTATE) {
    pages.run(Router.HistoryLocation, pageHolder);
  } else {
    if (!window.location.hash.slice(1))
      window.location.hash = '#' + url;
    pages.run(Router.HashLocation, pageHolder);
  }
}

if (config.IN_STATIC_SITE) {
  startRunningSite();
}