// PADRÃO
var express = require('express');
var router 	= express.Router();
var Control = require('./control.js');
var control = new Control;
var IndexModel = require('../../model/ward/indexModel.js');
var model = new IndexModel;
var data = {};
var app = express();
app.use(require('express-is-ajax-request'));

/* GET pagina de login. */
router.get('/', function(req, res, next) {
	// var id_usuario = req.session.usuario.id;
	res.render(req.isAjaxRequest() == true ? 'api' : 'montadorSistema', {html: 'ward/estatisticas/marketing', data: data, usuario: req.session.usuario});
});


router.get('/setor', function(req, res, next) {
	res.render(req.isAjaxRequest() == true ? 'api' : 'montadorSistema', {html: 'ward/estatisticas/setor', data: data, usuario: req.session.usuario});
});

router.get('/individual', function(req, res, next) {
	res.render(req.isAjaxRequest() == true ? 'api' : 'montadorSistema', {html: 'ward/estatisticas/individual', data: data, usuario: req.session.usuario});
});

router.get('/desempenho', function(req, res, next) {
	res.render(req.isAjaxRequest() == true ? 'api' : 'montadorSistema', {html: 'ward/estatisticas/desempenho', data: data, usuario: req.session.usuario});
});



module.exports = router;
