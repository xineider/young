// PADRÃO
var express = require('express');
var router 	= express.Router();
var Control = require('./control.js');
var control = new Control;
var AreasdeAtuacaoModel = require('../model/areasdeatuacaoModel.js');
var model = new AreasdeAtuacaoModel;
var data = {};
var app = express();
app.use(require('express-is-ajax-request'));

/* GET pagina de login. */
router.get('/', function(req, res, next) {
	res.render(req.isAjaxRequest() == true ? 'api' : 'montador', {html: 'areasdeatuacao/areasdeatuacao', data: data, usuario: req.session.usuario});
});
// router.get('/', function(req, res, next) {
// 	res.render(req.isAjaxRequest() == true ? 'api' : 'montador', {html: 'areas_de_atuacao/index', data: data, usuario: req.session.usuario});
// });

module.exports = router;