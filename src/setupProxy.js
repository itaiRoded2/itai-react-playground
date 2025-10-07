const express = require('express');
const path = require('path');

module.exports = function(app) {
  // Serve Angular files
  app.use('/js/ForEmbedAngular', express.static(path.join(__dirname, '../public/js/ForEmbedAngular')));
  
  // Serve the Angular wrapper HTML directly
  app.get('/angular-wrapper.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/angular-wrapper.html'));
  });
};