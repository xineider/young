// PADRÃO
var express = require('express');
var router 	= express.Router();
var Control = require('./control.js');
var control = new Control;
var ConfiguracoesModel = require('../../model/ward/configuracoesModel.js');
var model = new ConfiguracoesModel;
var data = '';
var app = express();
app.use(require('express-is-ajax-request'));

router.get('/', function(req, res, next) {
	model.GetConfiguracoes(req.session.usuario.id).then(data => {
		res.render(req.isAjaxRequest() == true ? 'api' : 'montadorSistema', {html: 'ward/configuracoes/configuracoes', data: data, usuario: req.session.usuario});
	});
});


router.get('/alterar-senha/', function(req, res, next) {
	res.render(req.isAjaxRequest() == true ? 'api' : 'montadorSistema', {html: 'ward/configuracoes/alterar_senha', data: data, usuario: req.session.usuario});
});



router.post('/atualizar/', function(req, res, next) {
	var POST = req.body;
	model.AtualizarUsuario(POST).then(data => {
		res.json(data);
	});
});


router.post('/alterar-senha', function(req, res, next) {
// Recebendo o valor do post
POST = req.body;
POST.senha = control.Encrypt(POST.senha);
POST.id = req.session.usuario.id;
POST.senha_atual = control.Encrypt(POST.senha_atual);
console.log('PPPPPPPPPPPPPPPPP POST ALTERAR SENHA PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP');
console.log(POST);
console.log('PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP');
model.GetUsuarioAlterarSenha(req.session.usuario.id,POST.senha_atual).then(data_usuario => {
	console.log('************* DADOS USUARIO *************');
	console.log(data_usuario);
	console.log('*****************************************');
	delete POST.senha_atual;
	if (data_usuario.length > 0){
		model.AtualizarUsuario(POST).then(data => {
			control.SendMail(data_usuario[0].email,'Sua senha foi Atualizada em Ward',
				'Olá sua senha foi alterada com sucesso no Ward.',
				'Olá Sua senha foi alterada com sucesso no Ward. Segue abaixo as informações sobre sua conta.'+
				'<br><b>Login</b>:'+data_usuario[0].login+ 
				'<br>Não mostre seu login e senha para ninguém. A sua conta é responsabilidade sua.'+
				'<br>Não responda esta mensagem, ela é enviada automaticamente.');
			res.json(POST.id);
		});	
	} else {
		var erro = 'Senha Atual errada.';
		res.json('errorsenha');
	}

});
});


module.exports = router;
