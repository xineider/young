'use strict';
var express = require('express');
var app = express();
var Helper = require('./model.js');
var helper = new Helper;

class CompromissosModel {
	SelecioneCompromissos() {
		return new Promise(function(resolve, reject) {
			// Adicione a query com scape(?) e os respectivos valores em um array simples
			helper.Query("SELECT a.*, DATE_FORMAT(a.data_cadastro, '%d/%m/%Y') as data_cadastro,\
										(SELECT COUNT(b.id) FROM usuarios as b WHERE b.id_setor = a.id LIMIT 1) as qtd_usuario\
			 							FROM compromissos as a WHERE a.deletado = ?", [0]).then(data => {
				resolve(data);
			});
		});
	}
	SelecionarEvento(id) {
		return new Promise(function(resolve, reject) {
			// 
			helper.Query("SELECT a.id,a.nome,\
				DATE_FORMAT(a.data_inicial,'%d/%m/%Y') as data_inicial,\
				DATE_FORMAT(a.data_inicial,'%H:%m') as hora_inicial, \
				DATE_FORMAT(a.data_final,'%H:%m') as hora_final,\
				DATE_FORMAT(a.data_final,'%d/%m/%Y') as data_final\
				FROM compromissos as a WHERE a.id = ? AND a.deletado = ?", [id, 0]).then(data => {
				console.log('############# Dados do SelecionarEvento(id) ###################');
				console.log(data);
				console.log('###############################################################');
				resolve(data);
			});
		});
	}

	SelecionarEventos(){
		return new Promise(function(resolve, reject) {
			helper.Query("SELECT a.id, a.nome as title,\
				CONVERT_TZ(a.data_inicial,'+00:00',@@global.time_zone) as start,\
				CONVERT_TZ(a.data_final,'+00:00',@@global.time_zone) as end\
				FROM compromissos as a WHERE a.deletado = ?", [0]).then(data => {
				console.log('@@@@@@@@@@@@@ Dados Eventos do Model @@@@@@@@@@@@@');
				console.log(data);
				console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
				resolve(data);
			});
		});
	}

	SelecionarEventosPauta(){
		return new Promise(function(resolve, reject) {
			helper.Query("SELECT a.*,\
				DATE_FORMAT(a.data_inicial,'%d/%m/%Y %H:%m') as data_inicial,\
				DATE_FORMAT(a.data_final,'%d/%m/%Y %H:%m') as data_final,\
				(SELECT nome FROM advogados as b WHERE a.id_advogado = b.id) as advogado,\
				(SELECT numero FROM processos as c WHERE a.id_processo = c.id) as numero\
				FROM compromissos as a WHERE a.deletado = ?", [0]).then(data => {
				console.log('@@@@@@@@@@@@@ Dados Eventos da pauta @@@@@@@@@@@@@');
				console.log(data);
				console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
				resolve(data);
			});
		});
	}

	SelecionarEventosPorTipoCompromisso(tipo){
		return new Promise(function(resolve, reject) {
			helper.Query("SELECT a.*,\
				DATE_FORMAT(a.data_inicial,'%d/%m/%Y %H:%m') as data_inicial,\
				DATE_FORMAT(a.data_final,'%d/%m/%Y %H:%m') as data_final,\
				(SELECT nome FROM advogados as b WHERE a.id_advogado_setor = b.id) as advogado_responsavel_setor,\
				(SELECT nome FROM advogados as c WHERE a.id_advogado_compromisso = c.id) as advogado_compromisso,\
				(SELECT numero FROM processos as d WHERE a.id_processo = d.id) as numero\
				FROM compromissos as a WHERE a.deletado = ? AND tipo_compromisso = ?", [0,tipo]).then(data => {
				console.log('@@@@@@@@@@@@@ Dados Eventos da pauta @@@@@@@@@@@@@');
				console.log(data);
				console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
				resolve(data);
			});
		});
	}


	SelecionarProcesso() {
		return new Promise(function(resolve, reject) {
			// Adicione a query com scape(?) e os respectivos valores em um array simples
			helper.Query("SELECT a.*, \
				DATE_FORMAT(a.data_cadastro, '%d/%m/%Y %H:%i') as data_processo,\
				(SELECT b.nome FROM usuarios as b WHERE b.id = a.id_usuario) as responsavel,\
				(SELECT c.nome FROM clientes as c WHERE c.id = a.id_cliente) as cliente,\
				(SELECT d.nome FROM adversos as d WHERE d.id = a.id_adverso) as adverso\
				FROM processos as a WHERE a.deletado = ?", [0]).then(data => {
					resolve(data);
				});
			});
	}

	SelecionarAdvogados(){
		return new Promise(function(resolve, reject) {
			helper.Query('SELECT *, nome as descricao FROM advogados WHERE deletado = ? ORDER BY nome DESC', [0]).then(data => {
				console.log(data);
				resolve(data);
			});
		});
	}




	CadastrarCompromisso(POST) {
		POST = helper.PrepareDates(POST, ['data_inicial']);
		POST = helper.PrepareDates(POST, ['data_final']);
		POST.data_inicial = POST.data_inicial +' '+ POST.hora_inicial + ':00';
		POST.data_final = POST.data_final +' '+ POST.hora_final + ':00';
		delete POST.hora_inicial;
		delete POST.hora_final;

		console.log('************** POST FINAL ********************');
		console.log(POST);
		console.log('**********************************************');

		return new Promise(function(resolve, reject) {
			helper.Insert('compromissos', POST).then(data => {
				// helper.Insert('compromissos',"SET @@time_zone = '-3:00';").then(dataTime =>{
					resolve(data);
				// });
			});
		});
	}
	AtualizarCompromisso(POST) {
		POST = helper.PrepareDates(POST, ['data_inicial']);
		POST = helper.PrepareDates(POST, ['data_final']);
		POST.data_inicial = POST.data_inicial +' '+ POST.hora_inicial + ':00';
		POST.data_final = POST.data_final +' '+ POST.hora_final + ':00';
		delete POST.hora_inicial;
		delete POST.hora_final;
		delete POST.deletado;

		console.log('??????????????????? Atualizar POST Model ???????????????');
		console.log(POST);
		console.log('????????????????????????????????????????????????????????');

		return new Promise(function(resolve, reject) {
			helper.Update('compromissos', POST).then(data => {
				resolve(data);
			});
		});
	}
	DesativarCompromisso(data) {
		return new Promise(function(resolve, reject) {
			helper.Desativar('compromissos', data).then(data => {
				resolve(data);
			});
		});
	}
}
module.exports = CompromissosModel;
