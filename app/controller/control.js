'use strict';
var crypto = require('crypto');

// ESPECIFICO
var nodemailer = require('nodemailer');

class Control {
	// Retorne o parametro encriptado;
	Encrypt(str) {
		return crypto.createHash('md5').update('558874c2cac326fc5e331c4a5a6dddce'+str+'706eb043788d92a44a2308146256c1bd').digest("hex");
	}
	Unserialize(data) {
		var array = [];
		data = data.split('&');
		for (var i = data.length - 1; i >= 0; i--) {
			var array_pre = [];
			array_pre = data[i].split('=');
			array[array_pre[0]] = array_pre[1];
		}
		return array;
	}
	Isset(data, tipo) {
		if (tipo == false) {
			if (data == undefined || data == 'undefined') {
				return true;
			} else {
				return false;
			}
		} else {
			if (data == undefined || data == 'undefined') {
				return false;
			} else {
				return true;
			}
		}
	}
	SendMail(to, subject, text, html) {
		nodemailer.createTestAccount((err, account) => {
			// create reusable transporter object using the default SMTP transport
			// let transporter = nodemailer.createTransport({
			// 		host: 'smtp.ethereal.email',
			// 		port: 587,
			// 		secure: false, // true for 465, false for other ports
			// 		auth: {
			// 				user: 'hd5yrqyezakkrmod@ethereal.email', // generated ethereal user
			// 				pass: 'GMcVw514cAB5eFye3y'  // generated ethereal password
			// 		}
			// });
			let transporter = nodemailer.createTransport({
				host: 'mx1.hostinger.com.br',
				port: 587,
					secure: false, // true for 465, false for other ports
					auth: {
						user:'noreply@quorp.com.br',
						pass: 'LYA?HVLyj^Bl1G6'
						//pass:'yEGhMAo10Edm' // senha do noreply@pazze.ind.br
							// pass: 'LYA?HVLyj^Bl1G6' //senha do noreply@quorp.com.br // generated ethereal password
						},
						tls: {
							rejectUnauthorized: false
						}
					});

			// setup email data with unicode symbols
			let mailOptions = {
					from: 'noreply@quorp.com.br', // sender address
					to: to, // list of receivers
					subject: subject, // Subject line
					html: html, // html body
					text: text // plain text body
				};

			// send mail with defined transport object
			transporter.sendMail(mailOptions, (error, info) => {
				if (error) {
					return console.log(error);
				}
				console.log('Message sent: %s', info.messageId);
				});
			// verify connection configuration
			transporter.verify(function(error, success) {
				if (error) {
					console.log('+++++++++++++++++ Erro de Enviar do Servidor ++++++++++++++');
					console.log(error);
					console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
				} else {
					console.log('Server is ready to take our messages');
				}
			});
		});
	}

	SendMailAttachment(para, assunto,text, html,nomeAnexo,caminhoAnexo) {
			nodemailer.createTestAccount((err, account) => {

					// create reusable transporter object using the default SMTP transport
					let transporter = nodemailer.createTransport({
							host: 'mx1.hostinger.com.br',
							port: 587,
							secure: false, // true for 465, false for other ports
							auth: {
									user: 'noreply@quorp.com.br', // generated ethereal user
									pass: 'LYA?HVLyj^Bl1G6'  // generated ethereal password
							},
	    				tls: {
	    					rejectUnauthorized: false
	    				}
					});

					// setup email data with unicode symbols
					let mailOptions = {
							from: 'noreply@quorp.com.br', 
							to: para, 
							subject: assunto,
							text: text, 
							html: html,
							attachments: [
								{
									filename: nomeAnexo,
									path:caminhoAnexo
								}				
							] // html body
					};


					// send mail with defined transport object
					transporter.sendMail(mailOptions, (error, info) => {
							if (error) {
									return console.log(error);
							}
							console.log('Message sent: %s', info.messageId);
							// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
							// Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
					});
			});
	}
	DateTime() {

		var date = new Date();

		var hour = date.getHours();
		hour = (hour < 10 ? "0" : "") + hour;

		var min  = date.getMinutes();
		min = (min < 10 ? "0" : "") + min;

		var sec  = date.getSeconds();
		sec = (sec < 10 ? "0" : "") + sec;

		var year = date.getFullYear();

		var month = date.getMonth() + 1;
		month = (month < 10 ? "0" : "") + month;

		var day  = date.getDate();
		day = (day < 10 ? "0" : "") + day;

		return day + "/" + month + "/" + year + " " +  hour + ":" + min + ":" + sec;

	}
	DateTimeForFile() {

		var date = new Date();

		var hour = date.getHours();
		hour = (hour < 10 ? "0" : "") + hour;

		var min  = date.getMinutes();
		min = (min < 10 ? "0" : "") + min;

		var sec  = date.getSeconds();
		sec = (sec < 10 ? "0" : "") + sec;

		var year = date.getFullYear();

		var month = date.getMonth() + 1;
		month = (month < 10 ? "0" : "") + month;

		var day  = date.getDate();
		day = (day < 10 ? "0" : "") + day;

		var mili = date.getMilliseconds();

		return day + "_" + month + "_" + year + "_" +  hour + "_" + min + "_" + sec + "_" + mili;

	}
}
module.exports = Control;