const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config();

// Servir los archivos estáticos desde la carpeta 'dist'
app.use(express.static(path.join(__dirname, 'dist/coworking-app')));

// Redirigir todas las rutas no definidas a index.html
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/coworking-app', 'index.html'));
});

// Configurar el puerto
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
