const express = require('express');
const path = require('path');

module.exports = function(app) {
  // IMPORTANT: Serve wrapper HTML FIRST (before static files)
  app.get('/angular-wrapper.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/angular-wrapper.html'));
  });
  
  app.get('/itai-react-playground/angular-wrapper.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/angular-wrapper.html'));
  });
  
  // Serve Angular files at both paths
  app.use('/js/ForEmbedAngular', 
    express.static(path.join(__dirname, '../public/js/ForEmbedAngular')));
  
  app.use('/itai-react-playground/js/ForEmbedAngular', 
    express.static(path.join(__dirname, '../public/js/ForEmbedAngular')));
};