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

	control.SendMail('noreply@quorp.com.br','Contato - young.adv.br','Recebimento de contato do site Site Young.',
		'Recebimento de contato do site Young Site.							 <br><b>Nome</b>:' + POST.nome + 
							'<br><b>Email</b>:' + POST.email +
							'<br><b>Estado</b>:' + POST.estado +
							'<br><b>Cidade</b>:' + POST.cidade +
							'<br><b>Telefone</b>:' + POST.telefone1 +
							'<br><b>Telefone</b>:' + POST.telefone2 +
							'<br><b>Mensagem</b>:<br>'+ POST.mensagem +
							'<br>Não é necessário responder esta mensagem, pois ela é enviada automaticamente.<br>Obrigado.');
		res.json(data);
		console.log('UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU');
		console.log(POST);
		console.log('UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU');
		console.log(data);
		console.log('UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU');
		console.log(req.body);
		console.log('UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU');
});
module.exports = router;