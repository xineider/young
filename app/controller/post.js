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
			'Olá,'+
			'<br><br>Prezado(a) ' + POST.nome +
			'<br><br>Parabéns por baixar o guia com informações importantes sobre os documentos iniciais necessários.'+
			'<br>Ao se ver na necessidade de entrar com alguma ação contra o seu plano de saúde, reúna seus documentos e procure um advogado de sua confiança.'+
			'<br>Veja também em nosso <a href="http://www.young.adv.br/areasdeatuacao" target="_blank">site</a> as áreas jurídicas onde podemos te ajudar.'+
			'<br><br>Atenciosamente,'+
			'<br><div style="float:left;text-align:left;border-right:2px solid #666;padding:0 10px;margin:0">'+
			'<img src="http://www.young.adv.br/assets/imgs/logo_assinatura.png" style="border:0px;max-width:100%;width:250px;margin:0px;margin:0;padding:0;height:auto" alt="Young Assinatura" width="450" height="150"></div>'+
			'<div><div style="width:50%;float:left;text-align:left;padding:9px 0 10px 9px;color:#000">'+
			'Young, Dias, Lauxen &amp; Lima.'+
			'<br>Fone: <a href="tel:+555135895507">(51) 3589-5507</a>'+
			'<br>E-mail: <a href="mailto:young@young.adv.br" target="_blank">young@young.adv.br</a>'+
			'<br>Facebook: <a href="http://facebook.com/YDLLAdvogados" target="_blank">facebook.com/YDLLAdvogados</a></div></div>'+
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