'use strict';
var express = require('express');
var app = express();
var Helper = require('./model.js');
var helper = new Helper;

class ChatsModel {
	SelecioneChats(id_usuario) {
		var data = {};
		return new Promise(function(resolve, reject) {
			// helper.Query('SELECT a.* FROM chats as a INNER JOIN chats_participantes as b ON a.id = b.id_chat WHERE a.deletado = ? AND b.id_usuario = ?', [0, id_usuario]).then(data_participantes => {
			// 	data['grupos'] = data_participantes;
				helper.Query('SELECT *,\
										(SELECT texto FROM chats_mensagens as b WHERE ( a.id = b.id_usuario AND b.id_usuario_enviado = ?)\
										OR (a.id = b.id_usuario_enviado AND b.id_usuario = ?) LIMIT 1) as last_mensagem\
										FROM usuarios as a WHERE deletado = ?', [id_usuario, id_usuario, 0]).then(data_usuarios => {
					data['usuarios'] = data_usuarios;
					resolve(data);
				});
			// });
		});
	}
	SelecioneMensagens(POST) {
		var data = {};
		return new Promise(function(resolve, reject) {
			helper.Query('SELECT b.id, b.texto, b.id_usuario FROM chats_mensagens as b WHERE (( b.id_usuario = ? AND b.id_usuario_enviado = ?)\
										OR (b.id_usuario_enviado = ? AND b.id_usuario = ?)) ORDER BY b.id DESC', 
										[POST.id_usuario, POST.id_usuario_enviado, POST.id_usuario, POST.id_usuario_enviado]).then(data_mensagem => {
				data.mensagens = data_mensagem;
				helper.Query('SELECT * FROM usuarios WHERE id = ?', [POST.id_usuario_enviado]).then(data_usuario => {
						data.usuario = data_usuario;
					resolve(data);
				});
			});
		});
	}
	AdicionarMensagens(POST) {
		var data = {};
		return new Promise(function(resolve, reject) {
			helper.Insert('chats_mensagens', POST).then(id_mensagem=> {
				helper.Query('SELECT b.texto, b.id_usuario FROM chats_mensagens as b WHERE (( b.id_usuario = ? AND b.id_usuario_enviado = ?)\
										OR (b.id_usuario_enviado = ? AND b.id_usuario = ?)) ORDER BY b.id DESC', 
										[POST.id_usuario, POST.id_usuario_enviado, POST.id_usuario, POST.id_usuario_enviado]).then(data_mensagem => {
					data.mensagens = data_mensagem;
					helper.Query('SELECT * FROM usuarios WHERE id = ?', [POST.id_usuario_enviado]).then(data_usuario => {
						data.usuario = data_usuario;
						resolve(data);
					});
				});
			});
		});
	}
	EnviarMensagen(POST) {
		return new Promise(function(resolve, reject) {
				helper.Query('SELECT b.texto,b.id_usuario_enviado FROM chats_mensagens as b WHERE ( b.id_usuario = ? AND b.id_usuario_enviado = ?)\
											OR (b.id_usuario_enviado = ? AND b.id_usuario = ?)', [POST.id_usuario, POST.id_usuario_enviado, POST.id_usuario_enviado, POST.id_usuario]).then(data => {
					resolve(data);
				});
		});
	}
	SetVisualizado(POST) {
		return new Promise(function(resolve, reject) {
			helper.Insert('chats_mensagens_novidades',{id_usuario: POST.id_usuario, id_usuario_enviado: POST.id_usuario_enviado}).then(data => {
				console.log(data);
			});
		});
	}
	VerificarNovasMensagens(id_usuario) {
		var data = {};
		return new Promise(function(resolve, reject) {
			helper.Query('SELECT id_usuario_enviado, data_cadastro\
										 FROM chats_mensagens_novidades WHERE id_usuario = ?\
										  AND id IN (SELECT MAX(id) FROM chats_mensagens_novidades\
										   GROUP BY id_usuario_enviado) GROUP BY id_usuario_enviado\
										    ORDER BY data_cadastro DESC', [id_usuario]).then(data_novidade => {
				helper.Query('SELECT MAX(id_usuario) as id_usuario, MAX(data_cadastro) as data_cadastro,\
											MAX(id_usuario_enviado) as id_usuario_enviado\
												FROM chats_mensagens WHERE id_usuario_enviado = ?\
	                      	GROUP BY id_usuario\
											  		ORDER BY data_cadastro DESC', [id_usuario]).then(data_mensagem=> {
			    if (typeof data_mensagem != 'undefined' && data_mensagem.length > 0) {
			      for (var i = data_mensagem.length - 1; i >= 0; i--) {
					// console.log('--------------------LOOP--------------------');
					// console.log(data_novidade.length);
					// console.log(data_novidade[i]);
					// console.log(data_mensagem[i].data_cadastro);
					// console.log('--------------------LOOP--------------------');
			    		if (typeof data_novidade[i] == 'undefined') {
			      		resolve({nova_mensagem: true, usuario: data_mensagem[i].id_usuario});
			    		} else {
				      	data_mensagem[i].data_cadastro = new Date(data_mensagem[i].data_cadastro);
				      	data_novidade[i].data_cadastro = new Date(data_novidade[i].data_cadastro);
				      	if (data_novidade[i].data_cadastro < data_mensagem[i].data_cadastro) {
				      		resolve({nova_mensagem: true, usuario: data_mensagem[i].id_usuario});
				      	} else {
				      		resolve({nova_mensagem: false, usuario: ''});
				      	}
			      	}
			      }
			    } else {
						resolve(false);
			    }
				});
			});
		});
	}
}
module.exports = ChatsModel;
