const mongoose = require('mongoose');
const contributionSchema = new mongoose.Schema({
  nombre_participante: String,
  material: String,
  kilos: Number,
  punto_recoleccion: String,
  fecha_entrega: Date,
  hora: String
});
module.exports = mongoose.model('Contribution', contributionSchema);
