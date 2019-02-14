// PADRÃO
var express = require('express');
var router 	= express.Router();
var Control = require('./control.js');
var control = new Control;
var AdversosModel = require('../../model/ward/adversosModel.js');
var model = new AdversosModel;
var data = {};
var app = express();
app.use(require('express-is-ajax-request'));

/* GET pagina de login. */
router.get('/', function(req, res, next) {
	model.SelecioneAdversos().then(data => {
		res.render(req.isAjaxRequest() == true ? 'api' : 'montadorSistema', {html: 'ward/adversos/index', data: data, usuario: req.session.usuario});
	});
});
router.get('/criar', function(req, res, next) {
	res.render(req.isAjaxRequest() == true ? 'api' : 'montadorSistema', {html: 'ward/adversos/adversos_criar', data: data, usuario: req.session.usuario});
});

router.get('/criar-simples/:idAdverso/:idProcesso', function(req, res, next) {	
	var idAdverso = req.params.idAdverso;
	var idProcesso = req.params.idProcesso;	
	data.idAdversoNaoEnvolvido = idAdverso;
	data.idProcesso = idProcesso;
	res.render(req.isAjaxRequest() == true ? 'api' : 'montadorSistema', {html: 'ward/adversos/adversos_criar_simples', data: data, usuario: req.session.usuario});
});







router.get('/editar/:id', function(req, res, next) {
	var id = req.params.id;
	model.SelecionarAdverso(id).then(data => {
		res.render(req.isAjaxRequest() == true ? 'api' : 'montadorSistema', {html: 'ward/adversos/adversos_editar', data: data, usuario: req.session.usuario});
	});
});


router.get('/selecionar-todos-modal', function(req, res, next) {
	model.SelecioneAdversosDescricao().then(data_adversos =>{
		data.dados = data_adversos;
		data.adicionar_link = '/adversos/adicionar-simples';
		console.log('************************** Dentro do Adverso Modal **************************');
		console.log(data);
		console.log('**************************************************************************');
		res.render(req.isAjaxRequest() == true ? 'api' : 'montadorSistema', {html: 'ward/processos/modal_crud_geral', data: data, usuario: req.session.usuario});
	});
});

router.get('/selecionar-todos-dados-modal', function(req, res, next) {
	model.SelecioneAdversosDescricao().then(data_adversos =>{
		console.log('^^^^^^^^^^^^^^^ data_adversos ^^^^^^^^^^^^');
		console.log(data_adversos)
		console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
		data.dados = data_adversos;
		data.adicionar_link = '/adversos/adicionar-simples';
		console.log('!!!!!!!!!!!!!!!!!!!!! Adverso Modal Todos !!!!!!!!!!!!!!!!!!!!!');
		console.log(data);
		console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
		res.render(req.isAjaxRequest() == true ? 'api' : 'montadorSistema', {html: 'ward/processos/modal_crud_geral_adverso', data: data, usuario: req.session.usuario});
	});
});


router.get('/listar_todos_processos/:id',function(req, res, next){
	var idAdverso = req.params.id;
	model.SelecionarTodosProcessosDoAdverso(idAdverso).then(data_processo =>{
		data.processos_adverso = data_processo;		
		console.log('======================== TODOS PROCESSOS ======================');
		console.log(data);
		console.log('===============================================================');
		res.render(req.isAjaxRequest() == true ? 'api' : 'montadorSistema', {html: 'ward/adversos/todos_processos', data: data, usuario: req.session.usuario});
	});
});


router.get('/ver_cadastro/:id',function(req, res, next){
	var id = req.params.id;
	model.SelecionarAdverso(id).then(data_adverso => {
		data.adverso = data_adverso;
		console.log('$$$$$$$$$$$$$$$$$$$$$$$$ ADVERSO $$$$$$$$$$$$$$$$$$$$$$$$$$$');
		console.log(data);
		console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$');
		res.render(req.isAjaxRequest() == true ? 'api' : 'montadorSistema', {html: 'ward/adversos/ver_cadastro', data: data, usuario: req.session.usuario});
	});

});


router.get('/pesquisar-adverso-por-cpf-cnpj/:pesquisa', function(req, res, next) {
	pesquisa = req.params.pesquisa;
	console.log('aaaaaaaaaaaaaa POST DA PESQUISA DO ADVERSO NO CLIENTE aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
	console.log(pesquisa);
	console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
	model.PesquisarAdversoPorCpfCnpj(pesquisa).then(data_adverso=> {
		console.log('bbbbbbbbbbbbbbbbbbbbbbbbbb resultado do post da pesquisa bbbbbbbbbbbbbbbbbbbbbbb');
		console.log(data_adverso);
		console.log('bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb');
		if (data_adverso != ''){
			data.adverso = data_adverso;
			res.render(req.isAjaxRequest() == true ? 'api' : 'montadorSistema', {html: 'ward/adversos/adversos_editar_no_cliente', data: data, usuario: req.session.usuario});

		}else{
			data.cpf_cnpj = pesquisa;
			console.log('nnnnnnnnnnnnnnnnnnnnnnn Nao existe cpf_cnpj nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn');
			console.log(data);
			console.log('nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn');
			res.render(req.isAjaxRequest() == true ? 'api' : 'montadorSistema', {html: 'ward/adversos/adversos_criar_no_cliente', data: data, usuario: req.session.usuario});
		}
	});
});


router.get('/pesquisar-adverso-por-cpf-cnpj-autocomplete/:cpf_cnpj', function(req, res, next) {

	cpf_cnpj = req.params.cpf_cnpj;
	console.log('FFFFFFFFFFFFFFFFFFFFFFFFFFF cpf_cnpj FFFFFFFFFFFFFFFFFFFFFFF');
	console.log(cpf_cnpj);
	console.log('FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF');

	model.PesquisarNomeAdversoPorCpfCnpjAutocomplete(cpf_cnpj).then(data => {
		console.log('========================= procurar faculdade ===================');
		console.log(data);
		console.log('===============================================================');
		res.json(data);
	});
});




router.post('/pesquisar', function(req, res, next) {
	// Recebendo o valor do post
	POST = req.body;
	model.ProcurarAdversos(POST).then(data => {
		res.render(req.isAjaxRequest() == true ? 'api' : 'montadorSistema', {html: 'ward/adversos/tabela_interna_only', data: data, usuario: req.session.usuario});
	});
});

router.post('/cadastrar', function(req, res, next) {
	// Recebendo o valor do post
	POST = req.body;
	model.CadastrarAdverso(POST).then(data => {
		res.json(data);
	});
});

router.post('/atualizar/', function(req, res, next) {
	// Recebendo o valor do post
	POST = req.body;
	model.AtualizarAdverso(POST).then(data => {
		res.json(data);
	});
});

router.post('/desativar', function(req, res, next) {
	// Recebendo o valor do post
	POST = req.body;
	model.DesativarAdverso(POST).then(data=> {
		res.json(data);
	});
});







module.exports = router;
