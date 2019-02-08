// PADRÃO
var express = require('express');
var router 	= express.Router();
var Control = require('./control.js');
var control = new Control;
var LoginModel = require('../../model/ward/loginModel.js');
var model = new LoginModel;
var data = '';
var app = express();
app.use(require('express-is-ajax-request'));

/* GET pagina de login. */
router.get('/', function(req, res, next) {
	console.log('PELO MENOS TO CAINDO AQUI NO GET DO LOGIN!!!!!!!!!!!!!!!!');
	console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');

	if (typeof req.session.id_usuario != 'undefined' && req.session.id_usuario != 0) {
		res.redirect('/sistema');
	} else {
		console.log('caindo aqui no else @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
		res.render('ward/login/index', {});
	}
});


/* POST enviando o login para verificação. */
router.post('/', function(req, res, next) {
	// Recebendo o valor do post
	POST = req.body;
	POST.senha = control.Encrypt(POST.senha);
	console.log('DDDDDDDDDDDDDDDDD CAI DENTRO DO SISTEMA DDDDDDDDDDDDDDDDDDDDDDDDDDDD');
	console.log(POST);
	console.log('DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD');
	model.Login(POST).then(data => {
		if (data.length > 0) {
			req.session.usuario = {};
			req.session.usuario.id = data[0].id;
			req.session.usuario.hash_login = data[0].hash_login;
			req.session.usuario.nivel = data[0].nivel;
			req.session.usuario.imagem = data[0].imagem;
			console.log('SENDO REDIRECIONADO !!!!!!!!!!!!!');
			model.LoadConfig(data[0].id).then(data => {
				req.session.usuario.config = data[0];
				res.redirect('/sistema');
			});
		} else {
			res.render('ward/login/index', { erro: 'Login ou senha incorreto(s).', tipo_erro: 'login' });
		}
	});
});

/* GET pagina de login. */
router.get('/logout', function(req, res, next) {
	console.log('------------------------ ESTOU DESLOGANDO --------------------------------')
	req.session.destroy(function(err) {
		console.log(err);
	});
	res.render('ward/login/index', {});
});

router.get('/buscar_cpf/:cpf', function(req, res, next) {

	cpf = req.params.cpf;
	console.log('FFFFFFFFFFFFFFFFFFFFFFFFFFF NOME FACULDADE FFFFFFFFFFFFFFFFFFFFFFF');
	console.log(cpf);
	console.log('FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF');

	model.SelecioneClientesPorCpf(cpf).then(data => {
		console.log('========================= procurar faculdade ===================');
		console.log(data);
		console.log('===============================================================');
		res.json(data);
	});
});







module.exports = router;
