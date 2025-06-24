const mongoose = require('mongoose');
const materialSchema = new mongoose.Schema({
  tipo: String,
  descripcion: String,
  fecha_registro: Date
});
module.exports = mongoose.model('Material', materialSchema);
