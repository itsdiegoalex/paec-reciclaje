const mongoose = require('mongoose');
const participantSchema = new mongoose.Schema({
  nombre: String,
  rol: String,
  grupo: String,
  fecha_registro: Date
});
module.exports = mongoose.model('Participant', participantSchema);
