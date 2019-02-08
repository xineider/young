// PADRÃO
var express = require('express');
var router = express.Router();
var Control = require('./control.js');
var control = new Control;
var AdminModel = require('../model/adminModel.js');
var model = new AdminModel;
var data = {};
var app = express();
//var Boleto = require('node-boleto').Boleto;
app.use(require('express-is-ajax-request'));

/* GET pagina inicial. */


router.get('/', function (req, res, next) {
	model.Post().then(data_post => {
		data['post'] = data_post;
		model.GetCategorias().then(data_categoria => {
			data['categoria'] = data_categoria;
			res.render(req.isAjaxRequest() == true ? 'api' : 'montador', { html: 'admin/admin', data: data });
		})
	});
});

router.get('/cadastrar', function (req, res, next) {
	res.render(req.isAjaxRequest() == true ? 'api' : 'montador', { html: 'post/post_cadastrar', data: data });
});

/* GET pagina de editar. */
router.get('/editar/:id', function (req, res, next) {
	model.Ver_Post(req.params.id).then(data_post => {
		res.render(req.isAjaxRequest() == true ? 'api' : 'montador', { html: 'post/post_editar', data: data_post });
	});
});

/* GET pagina de vizualizacao. */
router.get('/ver/:id', function (req, res, next) {
	model.Ver_Post(req.params.id).then(data_post => {
		res.render(req.isAjaxRequest() == true ? 'api' : 'montador', { html: 'post/post_ver', data: data_post });
	});
});


router.post('/cadastrar', function (req, res, next) {
	// Recebendo o valor do post
	POST = req.body;
	model.InsertPost('node_post', POST).then(data => {
		res.json(data);
	});
});


router.post('/desativar', function (req, res, next) {
	// Recebendo o valor do post
	POST = req.body;
	model.DesativarPost('post', POST).then(data => {
		res.json(data);
	});
});

router.post('/atualizar/:id', function (req, res, next) {
	// Recebendo o valor do post
	POST = req.body;
	model.UpdatePost('node_post', POST).then(data_clientes => {
		res.json(data_clientes);
	});
});

router.post('/site/uploadarquivo', function(req, res, next) {
  var sampleFile = req.files.arquivo;
  var nome = 'curriculo_'+ control.DateTimeForFile()+'_'+sampleFile.name;
  sampleFile.mv('./assets/files/documentos/' + nome,function(err){
  	if(err)
    	return res.status(500).send(err);
   	res.json(nome);
  })
});

module.exports = router;