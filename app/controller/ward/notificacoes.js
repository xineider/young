// PADRÃO
var express = require('express');
var router 	= express.Router();
var Control = require('./control.js');
var control = new Control;
var NotificacoesModel = require('../../model/ward/notificacoesModel.js');
var model = new NotificacoesModel;
var data = '';
var app = express();
app.use(require('express-is-ajax-request'));

/* GET pagina de login. */
router.get('/', function(req, res, next) {
	model.GetNotificacoes(req.session.usuario.id).then(data => {
		res.render(req.isAjaxRequest() == true ? 'api' : 'montadorSistema', {html: 'ward/notificacoes/index', data: data, usuario: req.session.usuario});
	});
});




router.get('/remover_visto/:id', function(req, res, next) {
	var id = req.params.id;
	data_visto = {id:id,visto:1};
	console.log('=============== remover_visto ===================');
	console.log(data_visto);
	console.log('=============================================');
	model.AtualizarNotificacao(data_visto).then(data=>{
		res.json(data);
	});
});




module.exports = router;
