// PADRÃO
var express = require('express');
var router 	= express.Router();
var Control = require('./control.js');
var control = new Control;
var UsuariosModel = require('../../model/ward/usuariosModel.js');
var model = new UsuariosModel;
var data = {};
var app = express();
app.use(require('express-is-ajax-request'));


/* GET pagina de login. */
router.get('/', function(req, res, next) {
	model.SelecionarUsuarios().then(data => {
		res.render(req.isAjaxRequest() == true ? 'api' : 'montadorSistema', {html: 'ward/usuarios/index', data: data, usuario: req.session.usuario});
	});
});
router.get('/criar', function(req, res, next) {
	model.SelecionarSetores().then(data_setores => {
		data['setores'] = data_setores;
		console.log(data);
		res.render(req.isAjaxRequest() == true ? 'api' : 'montadorSistema', {html: 'ward/usuarios/usuarios_criar', data: data, usuario: req.session.usuario});
	});
});
router.get('/editar/:id', function(req, res, next) {
	model.SelecionarSetores().then(data_setores => {
		data['setores'] = data_setores;
		model.SelecionarUsuario(req.params.id).then(data_usuario => {
			data['usuario'] = data_usuario;
			res.render(req.isAjaxRequest() == true ? 'api' : 'montadorSistema', {html: 'ward/usuarios/usuarios_editar', data: data, usuario: req.session.usuario});
		});
	});
});

router.get('/permissoes/', function(req, res, next) {
	model.SelecionarSetores().then(data_setores => {
		data['setores'] = data_setores;
		model.SelecionarUsuario(req.params.id).then(data_usuario => {
			data['usuario'] = data_usuario;
			res.render(req.isAjaxRequest() == true ? 'api' : 'montadorSistema', {html: 'ward/usuarios/usuario_permissoes', data: data, usuario: req.session.usuario});
		});
	});
});



router.get('/editar/perfil/:id', function(req, res, next) {
	model.SelecionarUsuario(req.params.id).then(data_usuario => {
		data['usuario'] = data_usuario;
		res.render(req.isAjaxRequest() == true ? 'api' : 'montadorSistema', {html: 'ward/usuarios/usuarios_perfil_editar', data: data, usuario: req.session.usuario});
	});
});

// POSTS
	router.post('/cadastrar', function(req, res, next) {
		// Recebendo o valor do post
		POST = req.body;
		POST.senha = control.Encrypt('optima');
		model.CadastrarUsuario(POST).then(data => {
			var to = 'leonardopeixe42@gmail.com';
			var subject = 'Você foi registrado com sucesso em Optima - QUORP';
			var html = 'Bem vindo ao sistema de tarefas Optima. Segue abaixo as informações sobre sua conta. \
									<br> <b>Login: leopeixe42</b> <br> \
						 			<br> <b>Senha: rr43233</b> <br>Acesse via o link "bla"';
			var text = 'Bem vindo ao sistema de tarefas Optima. Seu login é: leopeixe42 e sua senha é rr43233. Acesse via o link "bla"';
			control.SendMail(to, subject, html, text);
			res.json(data);
		});
	});

	router.post('/atualizar', function(req, res, next) {
		// Recebendo o valor do post
		POST = req.body;
		model.AtualizarUsuario(POST).then(data => {
			res.json(data);
		});
	});

	router.post('/desativar', function(req, res, next) {
		// Recebendo o valor do post
		POST = req.body;
  	model.DesativarUsuario(POST).then(data=> {
  		res.json(data);
  	});
	});

	router.post('/ver/perfil/', function(req, res, next) {
		// Recebendo o valor do post
		POST = req.body;
		model.LoadPerfil(POST.id).then(data => {
			res.render(req.isAjaxRequest() == true ? 'api' : 'montadorSistema', {html: 'ward/usuarios/usuarios_perfil_header', data: data});
		});
	});

module.exports = router;
