'use strict';
var express = require('express');
var app = express();
var Helper = require('./model.js');
var helper = new Helper;

class ContatoModel {

	InsertContato(table,POST){
		POST.tipo = 1;
		return new Promise(function (resolve, reject) {
			helper.Insert(table,POST).then(data =>{
				resolve(data);
			});
		});
	}

}


module.exports = ContatoModel;