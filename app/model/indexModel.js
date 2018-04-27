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
			helper.Query('SELECT a.*,\
			 (SELECT c.nome FROM node_categoria as c WHERE c.id=a.id_categoria) as categoria_nome,\
			 (SELECT b.titulo FROM node_post as b WHERE b.id=a.id_post) as titulo_post,\
			 (SELECT b.conteudo FROM node_post as b WHERE b.id=a.id_post) as conteudo,\
			 (SELECT DATE_FORMAT(b.data_post, "%d/%m/%Y") FROM node_post as b WHERE b.id=a.id_post) as data_post,\
			 (SELECT b.data_post_alteracao FROM node_post as b WHERE b.id=a.id_post) as data_post_alteracao_post\
               FROM node_post_categoria as a WHERE a.deletado = ? ORDER by data_post DESC', [0]).then(data => {
					resolve(data);
					// SELECT a.*, (SELECT b.nome FROM produtos as b WHERE b.id = a.id_produto) as nome_produto FROM estoque_obra as a WHERE a.deletado = 0 AND a.id_obra=6
				});
		});
	}
}
module.exports = IndexModel;
