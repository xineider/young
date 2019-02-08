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
	res.render(req.isAjaxRequest() == true ? 'api' : 'montadorSistema', {html: 'ward/estatisticas/index', data: data, usuario: req.session.usuario});
});



module.exports = router;
