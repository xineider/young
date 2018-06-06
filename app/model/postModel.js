'use strict';
var express = require('express');
var app = express();
var Helper = require('./model.js');
var helper = new Helper;

class PostModel {
	Post() {
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

	GetTodasCategorias() {
		return new Promise(function (resolve, reject) {
			helper.Query('SELECT * FROM node_categoria WHERE deletado = ?', [0]).then(data => {
				resolve(data);
			})
		})
	}

	GetCategorias() {
		return new Promise(function (resolve, reject) {
			helper.Query('SELECT a.*,\
			 (SELECT c.nome FROM node_categoria as c WHERE c.id=a.id_categoria) as categoria_nome,\
			 (SELECT b.titulo FROM node_post as b WHERE b.id=a.id_post) as titulo_post\
               FROM node_post_categoria as a WHERE a.deletado = ?', [0]).then(data => {
					resolve(data);
					// SELECT a.*, (SELECT b.nome FROM produtos as b WHERE b.id = a.id_produto) as nome_produto FROM estoque_obra as a WHERE a.deletado = 0 AND a.id_obra=6
				});
		});
	}

	Ver_Post(id) {
		return new Promise(function (resolve, reject) {
			helper.Query('SELECT * FROM node_post WHERE deletado = ? AND id = ?', [0, id]).then(data => {
				resolve(data);
			});
		});
	}



	UpdatePost(table, POST) {
		return new Promise(function (resolve, reject) {
			helper.Update(table, POST).then(data => {
				console.log(data);
				resolve(data);
			});
		});
	}
	DesativarPost(table, POST) {
		return new Promise(function (resolve, reject) {
			helper.Desativar(table, POST).then(data => {
				resolve(data);
			});
		});
	}

	InsertContato(table,POST){
		POST.tipo = 2
		return new Promise(function (resolve, reject) {
			helper.Insert(table,POST).then(data =>{
				resolve(data);
			});
		});
	}

	InsertPost(table, POST) {
		POST = helper.PrepareDates(POST, ['data_post']);
		var titulo = POST.titulo;
		POST.titulo = titulo.trim(titulo);
		POST.escritor = 'Mateus';
		POST.data_post_alteracao = POST.data_post;
		var link = POST.titulo;
		link = helper.ConverterCaracteresAcentuados(link);
		link = link.replace(/[_\W]+/g, "-");
		console.log('//////// link aqui ///////');
		console.log(link);
		console.log('//////////////////////////');
		link = link.toLowerCase();

		console.log('-------------- Link ----------------------');
		console.log(link);
		console.log('------------------------------------------');

		// POST.link = link;
		console.log('+++++++++++ Dados da Postagem ++++++++++++');
		console.log(POST);
		console.log('++++++++++++++++++++++++++++++++++++++++++');
		return new Promise(function (resolve, reject) {
			// helper.Insert(table, POST).then(data => {
			// 	resolve(data);
			// });
		});
	}
}
module.exports = PostModel;