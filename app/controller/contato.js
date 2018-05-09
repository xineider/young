// PADRÃO
var express = require('express');
var router 	= express.Router();
var Control = require('./control.js');
var control = new Control;
var ContatoModel = require('../model/contatoModel.js');
var model = new ContatoModel;
var data = {};
var app = express();
app.use(require('express-is-ajax-request'));

/* GET pagina de login. */
router.get('/', function(req, res, next) {
	res.render(req.isAjaxRequest() == true ? 'api' : 'montador', {html: 'contato/contato', data: data, usuario: req.session.usuario});
});

router.post('/enviarcontato', function(req, res, next) {
		// Recebendo o valor do post
	POST = req.body;

	control.SendMail('young@quorp.com.br','Contato - Young','Recebimento de contato do site Young.',
		'Recebimento de contato do site Young. \
							 <br><b>Nome</b>:' + POST.nome + 
							'<br><b>Email</b>:' + POST.email +
							'<br><b>Telefone</b>:' + POST.telefone1 +
							'<br><b>Telefone</b>:' + POST.telefone1 +
							'<br><b>Assunto</b>:' + POST.assunto +
							'<br><b>Mensagem</b>:<br>'+ POST.descricao +
							'<br>Não é necessário responder esta mensagem, pois ela é enviada automaticamente.<br>Obrigado.');
		res.json(data);
		console.log('UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU');
		console.log(POST);
		console.log('UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU');
});
module.exports = router;