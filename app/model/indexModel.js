'use strict';
var express = require('express');
var app = express();
var Helper = require('./model.js');
var helper = new Helper;

class IndexModel {
	Inicio() {
		return new Promise(function(resolve, reject) {
			helper.Query('SELECT * FROM usuarios WHERE deletado = ?', [0]).then(data => {
				resolve(data);
			});
		});
	}
	GetPost() {
		return new Promise(function (resolve, reject) {
			helper.Query('SELECT a.id,\
				a.titulo,\
				a.escritor,\
				DATE_FORMAT(a.data_post, "%d/%m/%Y") as data_post,\
				a.link,\
				a.conteudo,\
				a.arquivo,\
				DATE_FORMAT(a.data_post_alteracao, "%d/%m/%Y") as data_post_alteracao,\
				a.status\
				FROM node_post as a WHERE a.deletado = ? ORDER BY a.id', [0]).then(data => {
				resolve(data);
			});
		});
	}
}
module.exports = IndexModel;
