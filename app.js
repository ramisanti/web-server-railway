const express = require('express');
const hbs = require('hbs');
const app = express ();
require ('dotenv').config();
const port = process.env.PORT;

//parciales y hbs
app.set ('view engine', 'hbs');
hbs.registerPartials ( __dirname + '/views/partials');

//servir contenido estático
app.use (express.static('public'));

app.get ('/', (req,res) => {
    res.render ('home');
})

app.get ('/generic', (req,res) => {
    res.render ('generic');

})

app.get ('/elements', (req,res) => {
    res.render ('elements');

})

app.get ('*', (req,res) => {
    res.render ('404');

})

app.listen(port, () => {
    console.log(`Aplicación corriendo en el puerto: ${port}`)
    console.log (__dirname);
});

