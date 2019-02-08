// PADRÃO
var express = require('express');
var router 	= express.Router();
var Control = require('./control.js');
var control = new Control;
var CompromissosModel = require('../../model/ward/compromissosModel.js');
var model = new CompromissosModel;
var data = {};
var app = express();
app.use(require('express-is-ajax-request'));

/* GET pagina de login. */
router.get('/', function(req, res, next) {
	model.SelecionarEventos().then(data => {
		res.render(req.isAjaxRequest() == true ? 'api' : 'montadorSistema', {html: 'ward/compromissos/index', data: data, usuario: req.session.usuario});
	});
});


router.get('/criar_distribuicao', function(req, res, next) {
	model.SelecionarProcesso().then(data_processo => {
		data.processo = data_processo;
		model.SelecionarAdvogados().then(data_advogados =>{
			data.advogados = data_advogados;
			console.log(']]]]]]]]]]]]]]]]]]]]]]]] CRIAR COMPROMISSOS DATA ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]');
			console.log(data);
			console.log(']]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]');
			res.render(req.isAjaxRequest() == true ? 'api' : 'montadorSistema', {html: 'ward/compromissos/compromissos_criar_distribuicao', data: data, usuario: req.session.usuario});
		});
	});
});


router.get('/criar_pauta_compromissos', function(req, res, next) {
	model.SelecionarProcesso().then(data_processo => {
		data.processo = data_processo;
		model.SelecionarAdvogados().then(data_advogados =>{
			data.advogados = data_advogados;
			console.log(']]]]]]]]]]]]]]]]]]]]]]]] CRIAR COMPROMISSOS DATA ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]');
			console.log(data);
			console.log(']]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]');
			res.render(req.isAjaxRequest() == true ? 'api' : 'montadorSistema', {html: 'ward/compromissos/compromissos_criar_pauta_compromissos', data: data, usuario: req.session.usuario});
		});
	});
});

router.get('/criar_pauta_julgamento', function(req, res, next) {
	model.SelecionarProcesso().then(data_processo => {
		data.processo = data_processo;
		model.SelecionarAdvogados().then(data_advogados =>{
			data.advogados = data_advogados;
			console.log(']]]]]]]]]]]]]]]]]]]]]]]] CRIAR COMPROMISSOS DATA ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]');
			console.log(data);
			console.log(']]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]');
			res.render(req.isAjaxRequest() == true ? 'api' : 'montadorSistema', {html: 'ward/compromissos/compromissos_criar_pauta_julgamento', data: data, usuario: req.session.usuario});
		});
	});
});











router.get('/editar/:id', function(req, res, next) {
	var id = req.params.id;
	model.SelecionarEvento(id).then(data => {
		res.render(req.isAjaxRequest() == true ? 'api' : 'montadorSistema', {html: 'ward/compromissos/compromissos_editar', data: data, usuario: req.session.usuario});
	});
});

router.get('/eventos', function(req, res, next) {
	model.SelecionarEventos().then(data => {
		res.json(data);
	});
});

router.get('/pauta_compromisso', function(req, res, next) {
	model.SelecionarEventosPorTipoCompromisso(0).then(data => {
		res.render(req.isAjaxRequest() == true ? 'api' : 'montadorSistema', {html: 'ward/compromissos/pauta_compromisso', data: data, usuario: req.session.usuario});
	});
});


router.get('/controle_distribuicao', function(req, res, next) {
	model.SelecionarEventosPorTipoCompromisso(1).then(data => {
		res.render(req.isAjaxRequest() == true ? 'api' : 'montadorSistema', {html: 'ward/compromissos/controle_distribuicao', data: data, usuario: req.session.usuario});
	});
});

router.get('/pauta_julgamento', function(req, res, next) {
	model.SelecionarEventosPorTipoCompromisso(2).then(data => {
		res.render(req.isAjaxRequest() == true ? 'api' : 'montadorSistema', {html: 'ward/compromissos/pauta_julgamento', data: data, usuario: req.session.usuario});
	});
});




router.post('/cadastrar', function(req, res, next) {
		// Recebendo o valor do post
		POST = req.body;
		console.log('GGGGGGGGGGGGGGGGGG CADASTRAR COMPROMISSO GGGGGGGGGGGGGGGG');
		console.log(POST);
		console.log('GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG');
		model.CadastrarCompromisso(POST).then(data => {
			res.json(data);
		});
	});

router.post('/atualizar/', function(req, res, next) {
		// Recebendo o valor do post
		POST = req.body;
		console.log('=============== Atualizar ===================');
		console.log(POST);
		console.log('=============================================');

		model.AtualizarCompromisso(POST).then(data => {
			res.json(data);
		});
	});

router.post('/desativar', function(req, res, next) {
		// Recebendo o valor do post
		POST = req.body;
		console.log('---------------- Desativar ------------------------');
		console.log(POST);
		console.log('---------------------------------------------------');
		model.DesativarCompromisso(POST).then(data=> {
			res.json(data);
		});
	});

module.exports = router;
