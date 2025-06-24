const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

mongoose.connect('mongodb+srv://diego:Diegoo2008@cluster0.ggunn6e.mongodb.net/reciclaje?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Conectado a MongoDB Atlas'))
.catch(err => console.error('❌ Error al conectar con MongoDB:', err));


// Modelos
const Material = require('./models/Material');
const Participant = require('./models/Participant');
const Contribution = require('./models/Contribution');
const RouteModel = require('./models/Route');

// Rutas
app.get('/', (req, res) => {
  res.render('menu');
});

app.get('/Materials', async (req, res) => {
  const materials = await Material.find();
  res.render('Materials', { materials });
});
app.post('/Materials', async (req, res) => {
  await Material.create(req.body);
  res.redirect('/Materials');
});

app.get('/Participants', async (req, res) => {
  const participants = await Participant.find();
  res.render('Participants', { participants });
});
app.post('/Participants', async (req, res) => {
  await Participant.create(req.body);
  res.redirect('/Participants');
});

app.get('/contributions', async (req, res) => {
  const contributions = await Contribution.find();
  res.render('Contributions', { contributions });
});
app.post('/contributions', async (req, res) => {
  await Contribution.create(req.body);
  res.redirect('/contributions');
});

app.get('/Routes', async (req, res) => {
  const routes = await RouteModel.find();
  res.render('Routes', { routes });
});
app.post('/Routes', async (req, res) => {
  await RouteModel.create(req.body);
  res.redirect('/Routes');
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
