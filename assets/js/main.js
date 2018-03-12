// Eventos DOM
$(document).on('ready', function () {
	// NovidadesChat();
	$('.modal').modal();
	criarDepoimentos();
	// InitBar();
	$('#calendar').fullCalendar({
        // put your options and callbacks here
    })
	// LoadInfosUsuario();
	// adicionarLoader();
	// FormatInputs();
	// InitChat();

	$('#' + 'low-parall').height($('.bg-img-n').height());
	$(window).on('resize', function(e) {
		$('#' + 'low-parall').height($('.bg-img-n').height());
	});
	$('nav').width($('.bg-img-n').width());
	$(window).on('resize', function(e) {
		$('nav').width($('.bg-img-n').width());
	});
	$('nav').height($('.bg-img-n').height());
	$(window).on('resize', function(e) {
		$('nav').height($('.bg-img-n').height());
	});
  // $(document).ready(function(){
    $('.parallax').parallax();
  // });
  // $(document).ready(function(){
    $('.slider').slider();
  // });
  $(document).ready(function(){
	  $('.carousel').carousel();
	  $('.carousel.carousel-slider').carousel({fullWidth: true});
	});

	$(document).ajaxComplete(function () {
		$('#calendar').fullCalendar({
        // put your options and callbacks here
    })
		Materialize.updateTextFields();
  	$('.collapsible').collapsible();
	});
	$(document).ajaxError(function () {
		AddErrorAjax();
	});
	$(document).ajaxSuccess(function () {
		$('.error_ajax').fadeOut();
	});

	$(document).on('click', '.modal-remover-mount', function (e) {
		e.preventDefault();
		var modal = $(this).data('href');
		var texto = $(this).data('texto');
		var id = $(this).data('id');
		var to = $(this).data('to');
		var back = $(this).data('back');

		$(modal).modal('open');
		$(modal).find('#texto').text(texto);
		$(modal).find('#id').val(id);
		$(modal).find('button').data('href', to).data('action', back);
	});
	$(document).on('click', '.modal-mount', function (e) {
		e.preventDefault();
		var modal = $(this).data('href');
		var link = $(this).data('link');
		MountModal(modal, link);
	});

	$(document).on('click', '.ajax-load', function(e) {
		e.preventDefault();
		var link = $(this).attr('href');
		console.log(link);
		GoTo(link, true);
	});

	$(document).on('click', '.ajax-load-to', function(e) {
		e.preventDefault();
		var link = $(this).data('href');
		var to = $(this).data('to');
		LoadTo(link, to);
	});
	$(document).on('click', '.ajax-add-to', function(e) {
		e.preventDefault();
		var link = $(this).data('href');
		var to = $(this).data('to');
		AddTo(link, to);
	});

	$(document).on('click', '.remove', function (e) {
		e.preventDefault();
		$(this).closest('.pai').remove();
	});
	$(document).on('click', '.remove_lista', function (e) {
		e.preventDefault();
		AddInputDel($(this));
	});

	$(document).on('click', '.folder.active', function (e) {
		e.preventDefault();
		$(this).find('i:first-child:not(.fa-times)').toggleClass('fa-folder fa-folder-open');
		$(this).find('i:last-child').toggleClass('fa-caret-down fa-caret-up');
		console.log($(this).data('ajax'));
		if ($(this).data('ajax') == 1) {
			LoadArquivos($(this).data('id'), $(this));
		}
	});
	$(document).on('click', '.folder:not(.active)', function (e) {
		$(this).find('i:first-child:not(.fa-times)').toggleClass('fa-folder-open fa-folder');
		$(this).find('i:last-child').toggleClass('fa-caret-up fa-caret-down');
	});

	$(document).on('click', '.ajax-submit', function(e) {
		e.preventDefault();
		var form = $(this).parents('form');
		var post = form.serializeArray();
		var link = $(this).data('href');
		var back = $(this).data('action');
		var metodo = $(this).data('method');
		var method = (metodo != undefined && metodo != '') ? metodo : 'POST';
		if (VerificarForm(form) == true) {
			SubmitAjax(post, link, back, method);
		}
	});

	$(document).on('click', '.ajax-submit-comentarios', function(e) {
		e.preventDefault();
		var form = $(this).parents('form');
		var post = form.serializeArray();
		var link = $(this).data('href');
		var back = $(this).data('action');
		var metodo = $(this).data('method');
		var method = (metodo != undefined && metodo != '') ? metodo : 'POST';
		if (VerificarForm(form) == true) {
			SubmitComentario(post, link, back, method);
		}
	});

	$(document).on('change', 'select[name="id_doc_pai"]', function (e) {
		console.log($(this).val());
		if($(this).val() == 'Criar nova') {
			e.preventDefault();
			var modal = '#modalinfo2';
			var link = '/documentos/adicionar/pasta';
			MountModal(modal, link);
		}
	});
	$(document).on('change', '.grupo', function (e) {
		console.log($(this).val());
		if($(this).val() == 'Criar Novo') {
			e.preventDefault();
			var modal = '#modalinfo2';
			var link = '/clientes/criar/grupo';
			MountModal(modal, link);
		}
	});
	$(document).on('change', 'input[type="file"]', function () {
		if($(this).val() != '') {
			UploadFile($(this));
		}
	});

	$(document).on('submit', 'form', function(e) {
		e.preventDefault();
	});

	$(document).on('change', '.cep', function () {
		GetEndereco($(this).val(), $(this).closest('.row'));
	});

	$(".button-collapse").sideNav();

	window.onpopstate = function() {
	  GoTo(location.pathname, false);
	};

	// ESPECIFICO

	$(document).on('keyup change', '.pesquisa', function () {
		Pesquisar($(this));
	});
	$(document).on('click', '.DesbloquearSenha', function () {
		$(this).find('i').removeClass('fa-lock').addClass('fa-unlock-alt');
		DesbloquearSenha($(this).data('id'), $(this).data('senha'));
	});
	$(document).on('click', '.TarefaLoad', function () {
		LoadTopicos($(this).data('id'), $(this));
	});
	$(document).on('click', '.ContatosLoad', function () {
		LoadContatos($(this).data('id'));
	});
	$(document).on('click', '.TarefasLoad', function () {
		LoadTarefas($(this).data('id'), $(this));
	});
	$(document).on('click', '.IniciarTarefa', function () {
		var elemento = $(this).find('i');
		if (elemento.hasClass('fa-play-circle-o')) {
			if ($('.fa-pause-circle-o.brown:not(.notme)').length > 0) {
				PausarTarefa($('.fa-pause-circle-o.brown:not(.notme)').parent().data('id_tarefa'));
				setTimeout(function(){ FIniciarTarefa($(this).data('id_tarefa'), elemento, $(this).data('tempo')); }, 500);
			} else {
				FIniciarTarefa($(this).data('id_tarefa'), elemento, $(this).data('tempo'));
			}
		} else {
			PausarTarefa($(this).data('id_tarefa'));
			elemento.removeClass('fa-pause-circle-o brown').addClass('fa-play-circle-o blue');
		}
	});
	$(document).on('click', 'a .remove-doc', function (e) {
		e.preventDefault();
		console.log($(this).data('id'));
		// LoadTopicos($(this).data('id'), $(this));
	});
	$(document).on('click', '.AprovarTopico', function () {
		MudaStatusTopico($(this).data('id'), '1', $(this));
	});
	$(document).on('click', '.DesaprovarTopico', function () {
		MudaStatusTopico($(this).data('id'), '0', $(this));
	});
	$(document).on('change', '.timepicker', function () {
		$(this).focus();
	});

	$(document).on('click', '.arquivo-escolha', function(e) {
		e.preventDefault();
		var nome = $(this).data('nome');
		$('.uploads').append('\
					    			<div class="col s12 m6 center-align relative pai">\
										  <div class="card-panel grey lighten-4">\
										  	<input type="hidden" name="tarefa_arquivo[arquivo][]" value="'+nome+'">\
										  	<button class="btn-floating btn waves-effect waves-light red close-button remove"><i class="fa fa-times" aria-hidden="true"></i></button>\
										  	<b>Arquivo: '+nome+' <br>\
										  </div>\
									  </div>\
					    			');
	  $('.modal').modal('close');
	});
	$(document).on('click', '.chats li', function () {
		$('.chats').removeClass('active');
		$(this).parent().css('right', '-83%');
		setTimeout(function(){ $('.chats').addClass('active'); }, 1000);
	});
	$(document).on('mouseover', '.chats.active li', function () {
		$(this).parent().css('right', '-20%');
	});
	$(document).on('mouseout', '.chats.active li', function () {
		$(this).parent().css('right', '-83%');
	});
	$(document).on('click', '.load-mensagens', function() {
		MensagensChat($(this).data('id'));
	});
	$(document).on('click', '#enviar-msg', function() {
		EnviarMensagem($(this).data('id'));
	});
	$(document).keypress(function(e) {
    if(e.which == 13 && $("#mensagem-texto").is(":focus")) {
			EnviarMensagem($('#enviar-msg').data('id'));
    }
	});
});
// Eventos Após DOM
$(window).on('load', function (e) {
	removerLoader();
	FormatInputs();
});



// Funções
function adicionarLoader() {
	$('body').css('overflow', 'hidden');
	$('.loader').fadeIn('fast');
}
function removerLoader() {
	$('body').css('overflow', 'auto');
	$('.loader').fadeOut('fast');
}
function InitBar() {
	if (localStorage.bar != 2 && localStorage.bar != 1) {
		localStorage.setItem("bar", 1);
	}
}
function GoTo(link, state) {
	$.ajax({
	  method: "GET",
	  async: true,
	  url: link,
    beforeSend: function(request) {
			console.log('setando');
    	request.setRequestHeader("Authority-Optima-hash", $('input[name="hash_usuario_sessao"]').val());
			request.setRequestHeader("Authority-Optima-nivel", $('input[name="nivel_usuario_sessao"]').val());
    	request.setRequestHeader("Authority-Optima-id", $('input[name="id_usuario_sessao"]').val());
			adicionarLoader();
    },
    success: function(data) {
  		$('main').html(data);
    },
    error: function(xhr) { // if error occured
    },
    complete: function() {
			removerLoader();
			$('.material-tooltip').remove();
		  $('.tooltipped').tooltip({delay: 50});
		  $('.modal').modal('close');
			FormatInputs();
    }
	});
	if (state == true) {
		window.history.pushState('Sistema Quorp', 'Sistema Quorp', link);
	}
}
function LoadTo(link, to) {
	$.ajax({
	  method: "GET",
	  async: true,
	  url: link,
    beforeSend: function(request) {
			request.setRequestHeader("Authority-Optima-hash", $('input[name="hash_usuario_sessao"]').val());
			request.setRequestHeader("Authority-Optima-nivel", $('input[name="nivel_usuario_sessao"]').val());
			request.setRequestHeader("Authority-Optima-id", $('input[name="id_usuario_sessao"]').val());
			adicionarLoader();
    },
    success: function(data) {
  		$('.'+to).html(data);
    },
    error: function(xhr) { // if error occured
    },
    complete: function() {
			removerLoader();
			$('.material-tooltip').remove();
		  $('.tooltipped').tooltip({delay: 50});
		  $('.modal').modal('close');
			FormatInputs();
    }
	});
}
function AddTo(link, to) {
	$.ajax({
	  method: "GET",
	  async: true,
	  url: link,
    beforeSend: function(request) {
			request.setRequestHeader("Authority-Optima-hash", $('input[name="hash_usuario_sessao"]').val());
			request.setRequestHeader("Authority-Optima-nivel", $('input[name="nivel_usuario_sessao"]').val());
			request.setRequestHeader("Authority-Optima-id", $('input[name="id_usuario_sessao"]').val());
			adicionarLoader();
    },
    success: function(data) {
  		$('.'+to).append(data);
    },
    error: function(xhr) { // if error occured
    },
    complete: function() {
			removerLoader();
			$('.material-tooltip').remove();
		  $('.tooltipped').tooltip({delay: 50});
		  $('.modal').modal('close');
			FormatInputs();
    }
	});
}
function FormatInputs(focus) {
	$('.cnpj').mask('00.000.000/0000-00', {reverse: true});
	$('.cpf').mask('000.000.000-00', {reverse: true});
	$('.rg').mask('AAAAAAAAAAAAA', {reverse: true});
	$('.cep').mask('00000-000');
	$('.tel').mask('(00) Z0000-0000', {
    translation: {
      'Z': {
        pattern: /[0-9]/, optional: true
      }
    }
  });
  $('.money').mask('000000000000000,00', {reverse: true});
  $('.time').mask('00:M0', {
  	translation: {
      'M': {
        pattern: /[0-5]/
      }
    }
  });
  $('.dropdown-button').dropdown();
  $('.collapsible').collapsible();
  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 190, // Creates a dropdown of 15 years to control year,
		monthsFull: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    monthsShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    weekdaysFull: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabádo'],
    weekdaysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
    today: 'Hoje',
    clear: 'Limpar',
    close: 'Pronto',
    labelMonthNext: 'Próximo mês',
    labelMonthPrev: 'Mês anterior',
    labelMonthSelect: 'Selecione um mês',
    labelYearSelect: 'Selecione um ano',
    format: 'dd/mm/yyyy',
    closeOnSelect: true // Close upon selecting a date,
  });
	$('.timepicker').pickatime({
    default: 'now', // Set default time: 'now', '1:30AM', '16:30'
    fromnow: 0,       // set default time to * milliseconds from now (using with default = 'now')
    twelvehour: false, // Use AM/PM or 24-hour format
    donetext: 'Pronto', // text for done-button
    cleartext: 'Limpar', // text for clear-button
    canceltext: 'Cancelar', // Text for cancel-button
    autoclose: true, // automatic close timepicker
    ampmclickable: true, // make AM PM clickable
  });
  ActiveMaterializeInput(focus);
}
function slidesDepoimento(nomeAutor,imagemAutor,nomeEmpresa,depoimento){
	slideDepoimento = {
		author: {
			name: nomeAutor,
			url: '',
			avatar: imagemAutor
		},
		company: {
			name: nomeEmpresa,
			url: ''
		},
		quote: depoimento
	}
	return slideDepoimento;
}
function criarDepoimentos(){
	var testimonial;
	var optionsTesti = {
		width: 650,
		timeout: 6000,
		autostart: true,
		slideCount: 3
	};
	if($('#testimonial-slider').length>0){
		testimonial = new Testimonial('#testimonial-slider', optionsTesti);
		testimonial.add(slidesDepoimento('Jhon Doe','/assets/imgs/scale-bg.png','','A Incise é a contadoria mais rápida e confiável da região de Porto Alegre.<br>'));
		testimonial.add(slidesDepoimento('Feitan','/assets/imgs/scale-bg.png','','Meus problemas foram resolvidos pela Incise! Nota 10!<br>'));
		testimonial.add(slidesDepoimento('Meruem','/assets/imgs/scale-bg.png','','Equipe ágil e competente. Adorei!<br>'));
	}
}
function GetEndereco(cep, pai) {
	var link = 'https://viacep.com.br/ws/'+cep+'/json/ ';
	$.ajax({
	  method: "GET",
	  async: true,
	  url: link,
    beforeSend: function(request) {
			adicionarLoader();
    },
    success: function(data) {
    	console.log(data);
    	if (data['erro'] == true) {
    		alert('CEP não encontrado');
	    	$(pai).find('.uf').focus();
    	} else {
	    	$(pai).find('.cidade').val(data['localidade']).focus();
	    	$(pai).find('.rua').val(data['logradouro']).focus();
	    	$(pai).find('.uf').val(data['uf']).focus();
	    	$(pai).find('.bairro').val(data['bairro']).focus();
				$(pai).find('.numero').focus();
    	}
    },
    error: function(xhr) { // if error occured
      alert("CEP não encontrado, utilize somente números");
    	$(pai).find('.uf').focus();
    },
    complete: function() {
			removerLoader();
    }
	});
}
function SubmitAjax(post, link, back, method) {
	$.ajax({
	  method: 'POST',
	  async: true,
	  data: post,
	  url: link,
    beforeSend: function(request) {
			request.setRequestHeader("Authority-Optima-hash", $('input[name="hash_usuario_sessao"]').val());
			request.setRequestHeader("Authority-Optima-nivel", $('input[name="nivel_usuario_sessao"]').val());
			request.setRequestHeader("Authority-Optima-id", $('input[name="id_usuario_sessao"]').val());
			adicionarLoader();
    },
    success: function(data) {
    	console.log(data);
    	if (data == "RELOAD") {
    		window.location.replace('/sistema/configuracoes');
    	}
    	if (typeof data != undefined && data > 0) {
  			Materialize.toast('<div class="center-align" style="width:100%;">Cadastrado com sucesso</div>', 5000, 'rounded');
    	}
    	console.log(back);
    	if (typeof back != 'undefined' && back != 'add_name') {
				GoTo(back, true);
    	} else if(back == 'add_name') {
    		$('.grupo').prepend('<option value="'+data.id+'">'+data.nome+'</option>').find('option:first-child').prop('selected', true);
    		$('.modal').modal('close');
    	}
    },
    error: function(xhr) { // if error occured
    	console.log(xhr.statusText);
    },
    complete: function() {
			removerLoader();
    }
	});
}
function SubmitComentario(post, link, back, method) {
	$.ajax({
	  method: 'POST',
	  async: true,
	  data: post,
	  url: link,
    beforeSend: function(request) {
			request.setRequestHeader("Authority-Optima-hash", $('input[name="hash_usuario_sessao"]').val());
			request.setRequestHeader("Authority-Optima-nivel", $('input[name="nivel_usuario_sessao"]').val());
			request.setRequestHeader("Authority-Optima-id", $('input[name="id_usuario_sessao"]').val());
			adicionarLoader();
    },
    success: function(data) {
    	if (data == "RELOAD") {
    		window.location.replace('/sistema/configuracoes');
    	}
    	if (typeof data != undefined && data > 0) {
  			Materialize.toast('<div class="center-align" style="width:100%;">Cadastrado com sucesso</div>', 5000, 'rounded');
    	}
    	$('.novos-comentarios').prepend('<p><b>Comentario:</b>'+ '&nbsp;'+$('#texto_comentario').val()+'</p>');
    	$('#texto_comentario').val('');
    },
    error: function(xhr) { // if error occured
    },
    complete: function() {
			removerLoader();
    }
	});
}
function Reestruturar(str) {
	var i = 1;
	$('.'+ str +' > div').each(function () {
		$(this).data('num', ''+i+'');
		i += 1;
	});
	return i;
}
function ActiveMaterializeInput(focus) {
	if (focus != undefined && focus != 'undefined') {
	console.log(focus);
		focus.first().focus();
		return true;
	}
	$('main textarea:not(disabled)').each(function () {
		if ($(this).val() != '') {
			$(this).focus();
		}
	});
	$('main input:not(disabled)').each(function () {
		if ($(this).val() != '') {
			$(this).focus();
			$('main input:not([disabled]):not([type="hidden"])').first().focus();
		}
	});
}
function MountModal(modal, link) {
	$.ajax({
	  method: "GET",
	  async: true,
	  url: '/sistema'+link,
    beforeSend: function(request) {
			request.setRequestHeader("Authority-Optima-hash", $('input[name="hash_usuario_sessao"]').val());
			request.setRequestHeader("Authority-Optima-nivel", $('input[name="nivel_usuario_sessao"]').val());
			request.setRequestHeader("Authority-Optima-id", $('input[name="id_usuario_sessao"]').val());
			adicionarLoader();
    },
    success: function(data) {
			console.log(link);
			$(modal).find('.modal-content').html(data);
			$(modal).modal('open');
    },
    error: function(xhr) { // if error occured
    },
    complete: function() {
			removerLoader();
			$('.material-tooltip').remove();
		  $('.tooltipped').tooltip({delay: 50});
		  FormatInputs();
    }
	});
}
function VerificarForm(form) {
	var error = false;
	$('.error').remove();
	form.find('input:enabled:not([type="hidden"])[required="true"]').each(function(){
		if(VerificaItem($(this)) == true) {
			error = true;
			return false;
		};
	});
	form.find('textarea:enabled[required="true"]').each(function(){
		if(VerificaItem($(this)) == true) {
			error = true;
			return false;
		};
	});
	form.find('select:enabled[required="true"]').each(function(){
		if(VerificaItem($(this)) == true) {
			error = true;
			return false;
		};
	});
	if (error == false) {
			return true;
	}
}
function VerificaItem(isso) {
	if (isso.val() == '') {
		AddError(isso);
		return true;
	}
}
function AddError(isso) {
	console.log(isso);
	isso.focus().addClass('observe-post').parent().append('<div class="error">Complete corretamente</div>');
}
function AddErrorAjax() {
	$('.error_ajax').fadeIn();
}
function msToTime(duration) {
  var milliseconds = parseInt((duration%1000)/100)
      , seconds = parseInt((duration/1000)%60)
      , minutes = parseInt((duration/(1000*60))%60)
      , hours = parseInt((duration/(1000*60*60))%24);

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  return hours + ":" + minutes + ":" + seconds;
}

// ESPECIFICO
// function LoadInfosUsuario() {
// 	var id = $('input[name="id_usuario_sessao"]').val();
// 	$.ajax({
// 		method: "POST",
// 		async: true,
// 	  data: {id: id},
// 		url: '/sistema/usuarios/ver/perfil/',
// 		beforeSend: function(request) {
// 			request.setRequestHeader("Authority-Optima-hash", $('input[name="hash_usuario_sessao"]').val());
// 			request.setRequestHeader("Authority-Optima-nivel", $('input[name="nivel_usuario_sessao"]').val());
// 			request.setRequestHeader("Authority-Optima-id", $('input[name="id_usuario_sessao"]').val());
// 			adicionarLoader();
// 		},
// 		success: function(data) {
// 			$('.infos-usuario').html(data);
// 		},
// 		error: function(xhr) { // if error occured
// 		},
// 		complete: function() {
// 			removerLoader();
// 		}
// 	});
// }
// function LoadTopicos(id, isso) {
// 	console.log(isso);
// 	$.ajax({
// 	  method: "GET",
// 	  async: true,
// 	  url: '/sistema/tarefas/ver/topico/'+id,
//     beforeSend: function(request) {
// 			request.setRequestHeader("Authority-Optima-hash", $('input[name="hash_usuario_sessao"]').val());
// 			request.setRequestHeader("Authority-Optima-nivel", $('input[name="nivel_usuario_sessao"]').val());
// 			request.setRequestHeader("Authority-Optima-id", $('input[name="id_usuario_sessao"]').val());
// 			adicionarLoader();
//     },
//     success: function(data) {
// 			isso.parent().find('.collapsible-body > .tarefas').empty().append(data);
//     },
//     error: function(xhr) { // if error occured
//     },
//     complete: function() {
// 			removerLoader();
//     }
// 	});
// }
// function LoadContatos(id) {
// 	$.ajax({
// 	  method: "GET",
// 	  async: true,
// 	  url: '/sistema/contatos/ver/lista/'+id,
//     beforeSend: function(request) {
// 			request.setRequestHeader("Authority-Optima-hash", $('input[name="hash_usuario_sessao"]').val());
// 			request.setRequestHeader("Authority-Optima-nivel", $('input[name="nivel_usuario_sessao"]').val());
// 			request.setRequestHeader("Authority-Optima-id", $('input[name="id_usuario_sessao"]').val());
// 			adicionarLoader();
//     },
//     success: function(data) {
//     	$('#'+id).html(data);
//     },
//     error: function(xhr) { // if error occured
//     },
//     complete: function() {
// 			removerLoader();
//     }
// 	});
// }
// function LoadTarefas(id) {
// 	$.ajax({
// 	  method: "GET",
// 	  async: true,
// 	  url: '/sistema/tarefas/ver/tarefas/'+id,
//     beforeSend: function(request) {
// 			request.setRequestHeader("Authority-Optima-hash", $('input[name="hash_usuario_sessao"]').val());
// 			request.setRequestHeader("Authority-Optima-nivel", $('input[name="nivel_usuario_sessao"]').val());
// 			request.setRequestHeader("Authority-Optima-id", $('input[name="id_usuario_sessao"]').val());
// 			adicionarLoader();
//     },
//     success: function(data) {
//     	$('#'+id).html(data);
//     },
//     error: function(xhr) { // if error occured
//     },
//     complete: function() {
// 			removerLoader();
//     }
// 	});
// }
// function MudaStatusTopico(id, status, isso) {
// 	$.ajax({
// 		method: "POST",
// 		async: true,
// 	  data: {id: id, status: status},
// 		url: '/sistema/tarefas/atualizar/topico/'+id,
// 		beforeSend: function(request) {
// 			request.setRequestHeader("Authority-Optima-hash", $('input[name="hash_usuario_sessao"]').val());
// 			request.setRequestHeader("Authority-Optima-nivel", $('input[name="nivel_usuario_sessao"]').val());
// 			request.setRequestHeader("Authority-Optima-id", $('input[name="id_usuario_sessao"]').val());
// 			adicionarLoader();
// 		},
// 		success: function(data) {
// 			if (status == 1) {
// 				isso.removeClass('fa-circle-thin red-text').addClass('fa-check-circle blue-text').removeClass('AprovarTopico').addClass('DesaprovarTopico');
// 			} else {
// 				isso.removeClass('fa-check-circle blue-text').addClass('fa-circle-thin red-text').addClass('AprovarTopico').removeClass('DesaprovarTopico');
// 			}
// 			console.log(data[0].porcentagem);
// 			isso.parent().parent().parent().parent().parent().find('.porcentagem').css('width', (data[0].porcentagem * 100) + '%');
// 		},
// 		error: function(xhr) { // if error occured
// 		},
// 		complete: function() {
// 			removerLoader();
// 		}
// 	});
// }
// function UploadFile(isso) {
// 	var link = isso.data('href');
// 	var formData = new FormData();
// 	formData.append('arquivo', isso[0].files[0]);

// 	$.ajax({
//     url: link,
//     type: 'POST',
//     data: formData,
//     dataType: 'json',
//     processData: false,
//     contentType: false,
//     beforeSend: function(request) {
// 			request.setRequestHeader("Authority-Optima-hash", $('input[name="hash_usuario_sessao"]').val());
// 			request.setRequestHeader("Authority-Optima-nivel", $('input[name="nivel_usuario_sessao"]').val());
// 			request.setRequestHeader("Authority-Optima-id", $('input[name="id_usuario_sessao"]').val());
// 			adicionarLoader();
//     },
//     success: function (data) {
//     	$('.file-path').val('');
//     	isso.closest('.row').append('\
// 												    			<div class="col s12 m6 center-align relative pai">\
// 																	  <div class="card-panel grey lighten-4">\
// 																	  	<input type="hidden" name="tarefa_arquivo[arquivo][]" value="'+data+'">\
// 																	  	<button class="btn-floating btn waves-effect waves-light red close-button remove"><i class="fa fa-times" aria-hidden="true"></i></button>\
// 																	  	<b>Arquivo: '+data+' <br>\
// 																	  </div>\
// 																  </div>\
// 												    			');
//       console.debug(data);
//     },
//     error: function (xhr, e, t) {
//         console.debug((xhr.responseText));
//     },
//     complete: function() {
// 			removerLoader();
//     }
// 	});
// }
// function InitChat() {
// 	$.ajax({
// 		method: "GET",
// 		async: true,
// 		url: '/sistema/chats/',
// 		beforeSend: function(request) {
// 			request.setRequestHeader("Authority-Optima-hash", $('input[name="hash_usuario_sessao"]').val());
// 			request.setRequestHeader("Authority-Optima-nivel", $('input[name="nivel_usuario_sessao"]').val());
// 			request.setRequestHeader("Authority-Optima-id", $('input[name="id_usuario_sessao"]').val());
// 			adicionarLoader();
// 		},
// 		success: function(data) {
// 			$('.chat_box').append(data);
// 		},
// 		error: function(xhr) { // if error occured
// 		},
// 		complete: function() {
// 			removerLoader();
// 			$('.button-collapse.chat').sideNav({
// 		      menuWidth: 400, // Default is 300
// 		      edge: 'right', // Choose the horizontal origin
// 		      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
// 		      draggable: true, // Choose whether you can drag to open on touch screens,
// 		    }
// 		  );
// 		}
// 	});
// }
// function NovidadesChat() {
// 	$.ajax({
// 		method: "GET",
// 		async: true,
// 		url: '/sistema/chats/novidades',
// 		beforeSend: function(request) {
// 			request.setRequestHeader("Authority-Optima-hash", $('input[name="hash_usuario_sessao"]').val());
// 			request.setRequestHeader("Authority-Optima-nivel", $('input[name="nivel_usuario_sessao"]').val());
// 			request.setRequestHeader("Authority-Optima-id", $('input[name="id_usuario_sessao"]').val());
// 		},
// 		success: function(data) {
// 			if (data.nova_mensagem == true) {
// 				$('.tem_mensagem').fadeIn();
// 				$('#slide-out ul').css('right', '0');
// 			} else {
// 				$('.tem_mensagem').fadeOut();
// 			}
// 		},
// 		error: function(xhr) { // if error occured
// 		},
// 		complete: function() {
// 			setTimeout(function(){ NovidadesChat(); }, 10000);
// 		}
// 	});
// }
// function MensagensChat(id) {
// 	var id_usuario_sessao = $('input[name="id_usuario_sessao"]').val();
// 	$.ajax({
// 		method: "POST",
// 		async: true,
// 		data: {id_usuario_enviado: id, id_usuario: id_usuario_sessao},
// 		url: '/sistema/chats/mensagens/',
// 		beforeSend: function(request) {
// 			request.setRequestHeader("Authority-Optima-hash", $('input[name="hash_usuario_sessao"]').val());
// 			request.setRequestHeader("Authority-Optima-nivel", $('input[name="nivel_usuario_sessao"]').val());
// 			request.setRequestHeader("Authority-Optima-id", $('input[name="id_usuario_sessao"]').val());
// 			adicionarLoader();
// 		},
// 		success: function(data) {
// 			$('.chat-conteudo').html(data);
// 		},
// 		error: function(xhr) { // if error occured
// 		},
// 		complete: function() {
// 			removerLoader();
// 		}
// 	});
// }
// function AddInputDel(isso) {
// 	var id = isso.data('id');
// 	console.log(id);
// 	isso.closest('form').prepend('<input type="hidden" name="remover[id][]" value="'+id+'">');
// 	isso.closest('.pai').remove();
// }
// function EnviarMensagem(id) {
// 	var id_usuario_sessao = $('input[name="id_usuario_sessao"]').val();
// 	$.ajax({
// 		method: "POST",
// 		async: true,
// 		data: {id_usuario_enviado: id, id_usuario: id_usuario_sessao, texto: $('#mensagem-texto').val()},
// 		url: '/sistema/chats/enviarmensagem/',
// 		beforeSend: function(request) {
// 			request.setRequestHeader("Authority-Optima-hash", $('input[name="hash_usuario_sessao"]').val());
// 			request.setRequestHeader("Authority-Optima-nivel", $('input[name="nivel_usuario_sessao"]').val());
// 			request.setRequestHeader("Authority-Optima-id", $('input[name="id_usuario_sessao"]').val());
// 			adicionarLoader();
// 		},
// 		success: function(data) {
// 			$('.chat-conteudo').html(data);
// 		},
// 		error: function(xhr) { // if error occured
// 		},
// 		complete: function() {
// 			removerLoader();
// 		}
// 	});
// }
// function LoadArquivos(id, isso) {
// 	$.ajax({
// 		method: "GET",
// 		async: true,
// 		url: '/sistema/documentos/arquivos/'+id,
// 		beforeSend: function(request) {
// 			request.setRequestHeader("Authority-Optima-hash", $('input[name="hash_usuario_sessao"]').val());
// 			request.setRequestHeader("Authority-Optima-nivel", $('input[name="nivel_usuario_sessao"]').val());
// 			request.setRequestHeader("Authority-Optima-id", $('input[name="id_usuario_sessao"]').val());
// 			adicionarLoader();
// 		},
// 		success: function(data) {
// 			isso.parent().find('.collapsible-body').html(data);
// 		},
// 		error: function(xhr) { // if error occured
// 		},
// 		complete: function() {
// 			setTimeout(function(){ NovidadesChat(); }, 10000);
// 			removerLoader();
// 		}
// 	});
// }
// function FIniciarTarefa(id, elemento, tempo) {
// 	IniciarTarefa(id, tempo);
// 	elemento.removeClass('fa-play-circle-o blue').addClass('fa-pause-circle-o brown');
// }
// function IniciarTarefa(id, tempo) {
// 	$('.tarefa_controle').addClass('active').data('id', id);
// 	$('#stop_contagem').val(1);
// 	Contagem((new Date().getTime() - tempo), id);
// }
// function PausarTarefa(id) {
// 	$('.tarefa_controle').removeClass('active').data('id', id);
// 	$('#stop_contagem').val(0);
// 	$('.fa-pause-circle-o.brown:not(.notme)').removeClass('fa-pause-circle-o brown').addClass('fa-play-circle-o blue')
// }
// function Contagem(tempo_fixo, id) {
// 	var tempo_contado = new Date().getTime() - tempo_fixo;
// 	$('#tempo_executando').text(msToTime(tempo_contado));
// 	$('.play'+id).data('tempo', tempo_contado);
// 	if ($('#stop_contagem').val() == 1) {
// 		$.ajax({
// 			method: "POST",
// 			async: true,
// 			data: {tempo_gasto: msToTime(tempo_contado), id: id},
// 			url: '/sistema/tarefas/atualizar/tempo_contado',
// 			beforeSend: function(request) {
// 				request.setRequestHeader("Authority-Optima-hash", $('input[name="hash_usuario_sessao"]').val());
// 				request.setRequestHeader("Authority-Optima-nivel", $('input[name="nivel_usuario_sessao"]').val());
// 				request.setRequestHeader("Authority-Optima-id", $('input[name="id_usuario_sessao"]').val());
// 			},
// 			success: function(data) {
// 			},
// 			error: function(xhr) { // if error occured
// 			},
// 			complete: function() {
// 			}
// 		});
// 		setTimeout(function() {
// 			Contagem(tempo_fixo, id);
// 		}, 500)
// 	}
// }
// function DesbloquearSenha(id, senha) {
// 	$('#senha-'+id).text(senha);
// }
// function Pesquisar(isso) {
// 	var form = isso.closest('form');
// 	var post = form.serializeArray();
// 	var link = form.data('link');
// 	// console.log(link);
// 	$.ajax({
// 		method: "POST",
// 		async: true,
// 		data: post,
// 		url: link,
// 		beforeSend: function(request) {
// 			request.setRequestHeader("Authority-Optima-hash", $('input[name="hash_usuario_sessao"]').val());
// 			request.setRequestHeader("Authority-Optima-nivel", $('input[name="nivel_usuario_sessao"]').val());
// 			request.setRequestHeader("Authority-Optima-id", $('input[name="id_usuario_sessao"]').val());
// 		},
// 		success: function(data) {
// 			console.log(data);
// 			$('#tabela_interna').html(data);
// 		},
// 		error: function(xhr) { // if error occured
// 		},
// 		complete: function() {
// 		}
// 	});
// }