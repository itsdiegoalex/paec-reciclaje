require('dotenv').config(); // carga variables de entorno

const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

const uri = process.env.MONGODB_URI;
const PORT = process.env.PORT || 3000;

mongoose.connect(uri)
  .then(() => console.log('✅ Conectado a MongoDB Atlas'))
  .catch(err => console.error('❌ Error al conectar con MongoDB:', err));

// Modelos
const Material = require('./models/material');
const Participant = require('./models/participant');
const Contribution = require('./models/contribution');
const RouteModel = require('./models/route');

// Rutas
app.get('/', (req, res) => {
  res.render('menu');
});

app.get('/materials', async (req, res) => {
  const materials = await material.find();
  res.render('materials', { materials });
});
app.post('/materials', async (req, res) => {
  await material.create(req.body);
  res.redirect('/materials');
});

app.get('/participants', async (req, res) => {
  const participants = await participant.find();
  res.render('participants', { participants });
});
app.post('/participants', async (req, res) => {
  await participant.create(req.body);
  res.redirect('/participants');
});

app.get('/contributions', async (req, res) => {
  const contributions = await contribution.find();
  res.render('contributions', { contributions });
});
app.post('/contributions', async (req, res) => {
  await contribution.create(req.body);
  res.redirect('/contributions');
});

app.get('/routes', async (req, res) => {
  const routes = await routeModel.find();
  res.render('routes', { routes });
});
app.post('/routes', async (req, res) => {
  await routeModel.create(req.body);
  res.redirect('/routes');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
