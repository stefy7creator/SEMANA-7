const express = require('express');
const app = express();
// Middleware para entender formato JSON en el body
app.use(express.json());
// Array global para simular la base de datos en memoria
let reportes = [];
// Ruta GET para listar todos los reportes guardados
app.get('/reportes', (req, res) => {res.json(reportes);});
// Ruta POST para registrar un nuevo reporte e incluirlo en la lista
app.post('/reportes', (req, res) => {const reporte = {id: reportes.length + 1,tipo: req.body.tipo,descripcion: req.body.descripcion};
// Guardamos el nuevo reporte dentro del array
reportes.push(reporte);
res.json({mensaje: "Reporte registrado",reporte: reporte});});
// Servidor escuchando en el puerto 3000
app.listen(3000, () => {console.log('Servidor ejecutándose en puerto 3000');});
