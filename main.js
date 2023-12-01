const express = require('express');
const path = require('path');

const app = express();
const staticPath = path.join(__dirname, 'static');

app.get('/data/:filename', (req, res) => {
  const filename = req.params.filename;
  res.sendFile(filename, { root: staticPath }, (err) => {
    if (err) {
      res.status(404).send('Archivo no encontrado');
    }
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor en ejecución en http://20.39.234.200:${port}`);
});
