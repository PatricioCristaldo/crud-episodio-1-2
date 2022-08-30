/* Livereload */
const livereload = require('livereload');
const liveReloadServer = livereload.createServer();

/* Entry point */
const express = require('express');
const app = express();
const port = 3000;
const connectLivereload = require('connect-livereload');
const path = require('path');

/*Requerir Rutas */
const mainRouter = require('./routes/main')



/* Archivos estaticos monitoreados */
liveReloadServer.watch(path.join(__dirname, 'public'));
app.use(connectLivereload());
//View Engine
app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs')

//Middlewares
app.use(express.json()); //si se usa JSON CLASE54, 1:10:48
app.use(express.static(path.resolve(__dirname,'public')));

//Rutas
app.use("/", mainRouter);


/* Levantamos el servidor con app listen */
app.listen(3000,function(){
    return console.log(`Se levanta el servidor en http://localhost:${3000}`)
});

