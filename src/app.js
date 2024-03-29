// api-mascotas-seleccion-hackademy
// const morgan = require('morgan');
const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000)

// Middlewares
// app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
// Rutas
app.use('/api/pets/', require('./routes/index'));

app.listen(app.get('port'));
console.log('server on port: ', app.get('port'));
