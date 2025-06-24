const mongoose = require('mongoose');
const routeSchema = new mongoose.Schema({
  nombre_ruta: String,
  puntos: String,
  dias: String,
  hora: String
});
module.exports = mongoose.model('Route', routeSchema);
