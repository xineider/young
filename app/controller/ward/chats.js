// PADRÃO
var express = require('express');
var router 	= express.Router();
var Control = require('./control.js');
var control = new Control;
var chatsModel = require('../../model/ward/chatsModel.js');
var model = new chatsModel;
var data = '';
var app = express();
app.use(require('express-is-ajax-request'));

/* GET pagina de login. */
router.get('/', function(req, res, next) {
	model.SelecioneChats(req.session.usuario.id).then(data => {
		res.render(req.isAjaxRequest() == true ? 'api' : 'montadorSistema', {html: 'ward/chats/index', data: data, usuario: req.session.usuario});
	});
});

// router.get('/novidades/', function(req, res, next) {
// 	// model.VerificarNovasMensagens(req.session.usuario.id).then(data => {
// 	// 	res.json(data);
// 	// });
// });

// POSTS
	router.post('/mensagens/', function(req, res, next) {
		POST = req.body;
		model.SelecioneMensagens(POST).then(data => {
			model.SetVisualizado(POST).then(data=>{});
			res.render(req.isAjaxRequest() == true ? 'api' : 'montadorSistema', {html: 'ward/chats/chats_conteudo', data: data, id_para: POST.id_usuario_enviado});
		});
	});
	router.post('/enviarmensagem/', function(req, res, next) {
		POST = req.body;
		model.AdicionarMensagens(POST).then(data => {
			res.render(req.isAjaxRequest() == true ? 'api' : 'montadorSistema', {html: 'ward/chats/chats_conteudo', data: data, id_para: POST.id_usuario_enviado});
		});
	});

module.exports = router;
