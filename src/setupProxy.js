const express = require('express');
const path = require('path');

module.exports = function(app) {
  app.use('/js/ForEmbedAngular', express.static(path.join(__dirname, '../public/js/ForEmbedAngular')));
};