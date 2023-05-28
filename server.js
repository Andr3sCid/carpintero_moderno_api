const express = require('express');
const app = express();

app.get('/api/hello', (req, res) => {
  res.send('¡Hola, mundo!');
});

const port = 8080;
app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});
