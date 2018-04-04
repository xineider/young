// PADRÃO
var express = require('express');
var router 	= express.Router();
var Control = require('./control.js');
var control = new Control;
var LoginModel = require('../model/loginModel.js');
var model = new LoginModel;
var data = '';
var app = express();
app.use(require('express-is-ajax-request'));

/* GET pagina de login. */
router.get('/', function(req, res, next) {
	if (typeof req.session.usuario != 'undefined' && req.session.usuario.id != 0) {
		res.redirect('/admin');
	} else {
		res.render('login/index');
		// res.render({html: 'login/index'});
		// console.log('------------------------ MÃE, TO NO ELSE ---------------------------');
	}
});


/* POST enviando o login para verificação. */
router.post('/', function(req, res, next) {
	// Recebendo o valor do post
	POST = req.body;
	POST.senha = control.Encrypt(POST.senha);
	console.log('--------------------');
	console.log(POST.senha);
	console.log('--------------------');
	model.Login(POST).then(data => {
		console.log(data[0]);
	  if (data.length > 0) {
			req.session.usuario = {};
			req.session.usuario.id = data[0].id;
			req.session.usuario.hash_login = data[0].hash_login;
			res.redirect('/admin');
	  } else {
  		res.render('login/index', { erro: 'Login ou senha incorreto(s).', tipo_erro: 'login' });
	  }
	});
});

/* GET pagina de login. */
router.get('/logout', function(req, res, next) {
	req.session.destroy(function(err) {
  	console.log(err);
	});
	res.render('login/index', {});
});

module.exports = router;
