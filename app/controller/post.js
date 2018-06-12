// PADRÃO
var express = require('express');
var router = express.Router();
var Control = require('./control.js');
var control = new Control;
var PostModel = require('../model/postModel.js');
var model = new PostModel;
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
			model.GetTodasCategorias().then(data_todas_categorias => {
				data['categorias'] = data_todas_categorias;
				console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& data post controler &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&');
				console.log(data);
				res.render(req.isAjaxRequest() == true ? 'api' : 'montador', { html: 'post/index', data: data });
			});
		});
	});
});

router.get('/gerenciar', function (req, res, next) {
	res.render(req.isAjaxRequest() == true ? 'api' : 'montador', { html: 'post/post_gerenciar', data: data });
});

router.get('/cadastrar', function (req, res, next) {
	res.render(req.isAjaxRequest() == true ? 'api' : 'montador', { html: 'post/post_cadastrar', data: data });
});

/* GET pagina de editar. */
router.get('/editar/:id', function (req, res, next) {
	id = req.params.id;
	model.Ver_Post(req.params.id).then(data_post => {
		res.render(req.isAjaxRequest() == true ? 'api' : 'montador', { html: 'post/post_editar', data: data_post });
	});
});

/* GET pagina de vizualizacao. */
router.get('/ver/:id', function (req, res, next) {
	id = req.params.id;
	model.Ver_Post(req.params.id).then(data_post => {
		data ['post'] = data_post;
		model.GetCategorias().then(data_categoria => {
			data ['categoria'] = data_categoria;
			res.render(req.isAjaxRequest() == true ? 'api' : 'montador', { html: 'post/post_ver', data: data });
		});
	});
});



router.post('/pedirebook', function(req, res, next) {
	POST = req.body;
	model.InsertContato('contatos_young',POST).then(data => {
		control.SendMailAttachment(POST.email,'Ebook Ação Contra Plano de Saúde Documentos Necessários','Obrigado por se cadastrar no site da Young, Dias Lauxen & Lima aqui está o seu ebook',
			'Olá, <br><br>'+
			'Prezado ' + POST.nome +
			'<br><br>Parabéns por baixar o guia com informações importantes sobre os documentos iniciais necessários.'+
			'<br>Ao se ver na necessidade de entrar com alguma ação contra o seu plano de saúde, reúna seus documentos e procure um advogado de sua confiança.'+
			'<br>Veja também em nosso <a href="http://www.young.adv.br/areasdeatuacao" target="_blank">site</a> as áreas jurídicas onde podemos te ajudar.'+
			'<br><br>Atenciosamente, Young, Dias, Lauxen & Lima.'+
			'<br><br>Não é necessário responder esta mensagem, pois ela é enviada automaticamente.<br>Obrigado.',
			'ebook_Acao_Contra_Plano_de_Saude_Documentos_Necessarios.pdf','./assets/ebook/ebook_Acao_Contra_Plano_de_Saude_Documentos_Necessarios.pdf');
		var ebook = 'ebook';
		res.json(ebook);
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
	var nome = 'blog_capa'+ control.DateTimeForFile()+'_'+sampleFile.name;
	sampleFile.mv('./assets/imgs/blog/' + nome,function(err){
		if(err)
			return res.status(500).send(err);
		res.json(nome);
	})
});

module.exports = router;