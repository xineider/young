'use strict';
var express = require('express');
var app = express();
var Helper = require('./model.js');
var helper = new Helper;

class NotificacoesModel {
	GetNotificacoes(id_usuario) {
		return new Promise(function(resolve, reject) {
			helper.Query('SELECT * FROM notificacoes WHERE id_usuario = ? AND deletado = ?', [id_usuario, 0]).then(data => {
				resolve(data);
			});
		});
	}
}
module.exports = NotificacoesModel;