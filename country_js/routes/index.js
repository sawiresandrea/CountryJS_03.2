var express = require('express');
var router = express.Router();
var country = require('countryjs');
var createError = require('http-errors');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/pages/:state/', function(req, res, next){
 //Se countryjs non trova il codice state allora ritorna una variabile undefined.
 //In questo caso richiamiamo la funzione next che passa l'errore al gestore degli errori
 //Il gestore degli errori è stato definito nell'app.js
 if (typeof country.info(req.params.state) === "undefined") {
   return next(createError(422, 'OOPS! State not found'));
 }else{
   res.render('state', {state: country.info(req.params.state)}) ; //Rendiamo lo stato un parametro
 }
})

module.exports = router;
