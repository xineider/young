// PADRÃO
var express = require('express');
const fileUpload = require('express-fileupload');
var router 	= express.Router();
var Control = require('./control.js');
var control = new Control;
var TarefasModel = require('../../model/ward/tarefasModel.js');
var model = new TarefasModel;
var data = {};
var app = express();
router.use(fileUpload());
app.use(require('express-is-ajax-request'));

/* GET pagina de login. */
router.get('/', function(req, res, next) {
	model.SelecioneTarefas(req.session.usuario.id).then(data => {
		res.render(req.isAjaxRequest() == true ? 'api' : 'montadorSistema', {html: 'ward/tarefas/index', data: data, usuario: req.session.usuario});
	});
});

router.get('/tarefas', function(req, res, next) {
	model.SelecioneTarefas(req.session.usuario.id).then(data => {
		res.render(req.isAjaxRequest() == true ? 'api' : 'montadorSistema', {html: 'ward/tarefas/tarefas', data: data, usuario: req.session.usuario});
	});
});




router.get('/criar', function(req, res, next) {
	model.SelecioneUsuarios().then(data_usuarios => {
		data['usuarios'] = data_usuarios;
		model.SelecioneGerentes().then(data_gerentes => {
			data['gerentes'] = data_gerentes;
			res.render(req.isAjaxRequest() == true ? 'api' : 'montadorSistema', {html: 'ward/tarefas/tarefas_criar', data: data, usuario: req.session.usuario});
		});
	});
});


router.get('/sac', function(req, res, next) {
	model.SelecioneRequisicoes().then(data_requisicoes => {
		data['requisicao'] = data_requisicoes;
		res.render(req.isAjaxRequest() == true ? 'api' : 'montadorSistema', {html: 'ward/tarefas/pipeline', data: data, usuario: req.session.usuario});
	});
});



router.get('/administracao', function(req, res, next) {
	model.SelecioneRequisicoes().then(data_requisicoes => {
		data['requisicao'] = data_requisicoes;
		res.render(req.isAjaxRequest() == true ? 'api' : 'montadorSistema', {html: 'ward/tarefas/indexAdministracao', data: data, usuario: req.session.usuario});
	});
});






router.get('/gettopico', function(req, res, next) {
	res.render(req.isAjaxRequest() == true ? 'api' : 'montadorSistema', {html: 'ward/tarefas/tarefas_topico', data: data, usuario: req.session.usuario});
});

router.get('/ver/topico/:id', function(req, res, next) {
	var id = req.params.id;
	model.SelecioneTopicos(id).then(data_topicos => {
		data.topicos = data_topicos;
		model.SelecioneInfos(id).then(data_infos => {
			data.infos = data_infos;
			model.SelecioneUploads(id).then(data_uploads => {
				data.uploads = data_uploads;
				model.SelecioneComentarios(id).then(data_comentarios => {
					data.comentarios = data_comentarios;
					res.render(req.isAjaxRequest() == true ? 'api' : 'montadorSistema', {html: 'ward/tarefas/tarefas_topicos_index', id_tarefa: id, data: data, usuario: req.session.usuario});
				});
			});
		});
	});
});
router.get('/ver/tarefas/:id', function(req, res, next) {
	var id = req.params.id;
	model.SelecioneTarefas(id).then(data => {
		res.render(req.isAjaxRequest() == true ? 'api' : 'montadorSistema', {html: 'ward/tarefas/tarefas_usuario', id_tarefa: id, data: data, usuario: req.session.usuario});
	});
});

// POSTS
router.post('/tarefas/concluir', function(req, res, next) {
	var id = req.session.usuario.id;
	var POST = req.body;
	model.FinalizarTarefas(POST, id).then(data => {
		res.render(req.isAjaxRequest() == true ? 'api' : 'montadorSistema', {html: 'ward/tarefas/tarefas_usuario', id_tarefa: id, data: data, usuario: req.session.usuario});
	});
});
router.post('/uploadarquivo', function(req, res, next) {
	var sampleFile = req.files.arquivo;
	var nome = control.DateTimeForFile()+'_'+sampleFile.name;
	var id = req.headers['authority-optima-id'];

	model.CadastraArquivo(id, nome).then(data => {
		  // Use the mv() method to place the file somewhere on your server
		  sampleFile.mv('./assets/uploads/'+nome, function(err) {
		  	if (err) {
		  		return res.status(500).send(err);
		  	}

		  	res.json(nome);
		  });
		});
});

router.post('/cadastrar', function(req, res, next) {
		// Recebendo o valor do post
		POST = req.body;
		model.CadastrarTarefa(POST).then(data => {
			res.json(data);
		});
	});

router.post('/cadastrar/comentario', function(req, res, next) {
		// Recebendo o valor do post
		POST = req.body;
		model.CadastrarTarefaComentario(POST, req.session.usuario.id).then(data => {
			res.json(data);
		});
	});

router.post('/atualizar/topico/:id', function(req, res, next) {
		// Recebendo o valor do post
		POST = req.body;
		model.AtualizarTopico(POST).then(data => {
			model.GetPorcentagem(POST).then(data => {
				res.json(data);
			});
		});
	});

router.post('/atualizar/tempo_contado', function(req, res, next) {
		// Recebendo o valor do post
		POST = req.body;
		model.AtualizarTarefa(POST).then(data => {
			res.json(data);
		});
	});

router.post('/desativar', function(req, res, next) {
		// Recebendo o valor do post
		POST = req.body;
		model.DesativarTarefa('tarefas', POST).then(data=> {
			res.json(data);
		});
	});


module.exports = router;
