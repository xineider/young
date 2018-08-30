// Eventos DOM
$(document).on('ready', function () {
	// NovidadesChat();
	$('.modal').modal();
	criarDepoimentos();
	// InitBar();
	// $('#calendar').fullCalendar({
 //        // put your options and callbacks here
 //    });
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
	
	$(".button-collapse").sideNav();
	// function FixedSidebar {
	//   $('.blog-sidebar').pushpin({
	//     top: 0,
	//     bottom: 1000,
	//     offset: 0
	//   });
	// 	if ($(window).scrollTop() > 100)
	//     $cache.css({
	//       'position': 'fixed',
	//       'top': '10px'
	//     });
	//   else
	//     $cache.css({
	//       'position': 'relative',
	//       'top': 'auto'
	//     });
	// }

	// $(document).on('click', '#fale-conosco', function(event) { 
 //    event.preventDefault(); 
 //    $(".fb-messenger-widget-simple").click();
	// });
	if($(window).width()>990){
		setTimeout(function(){
	 		$(".fb-messenger-widget-simple").click(); 
		}, 2000);	
	}
	

	$(document).on('click', '#slide-header li a.ajax-load', function(event) { 
    event.preventDefault(); 
    $(".drag-target").click();
	});
	// $('#testimonials').alpha({layout : 'alt', delay : 5000, bubbleColor : 'rgba(0, 0, 0, 0)'});

	AlignAreasText();
	AlignFooterOnLarge();
	AlignPostsBlog();
	Estados_Cidades();
		activeCarousel();

	rightOnTheFace();


	function rightOnTheFace() {
		var window_width = $(window).width();
		var right_space = ((window_width - 1920) / 2) - 10;
		if($(window).width() > 1920) {
			var window_width = $(window).width();
			var right_space = (window_width / 2) - 10;
			$('#fb-messenger-widget-7606').css('right', right_space, 'important');
			console.log(window_width);
			console.log(right_space);
			console.log($('#fb-messenger-widget-7606').css('right'));
		} else {
		}
	};

	$('.' + 'plain-text').text();

  var scroll_options = [
    {selector: '#staggered-test', offset: 50, callback: function(el) {
      Materialize.toast("This is our ScrollFire Demo!", 1500 );
    } },
    {selector: '#staggered-test', offset: 205, callback: function(el) {
      Materialize.toast("Please continue scrolling!", 1500 );
    } },
    {selector: '#staggered-test', offset: 400, callback: function(el) {
      Materialize.showStaggeredList($(el));
    } },
    {selector: '#image-test', offset: 500, callback: function(el) {
      Materialize.fadeInImage($(el));
    } }
  ];
  Materialize.scrollFire(scroll_options);

 	// $(document).on('hover', '.areas-img', function() {
	//   $("#" + "toggle").effect({effect: "scale", percent: 110});
	// });
	// $( document ).click(function() {
	//   $("#toresize").toggle( "bounce", "slow" );
	// });

$(document).on('click', '#seta', function (e) {
		e.preventDefault();
		if ($('#social-sidebar').hasClass('show')) {
			$('#social-sidebar').removeClass('show');
			$('#social-sidebar').addClass('hidden');
			$('#seta i').removeClass('fa-arrow-left');
			$('#seta i').addClass('fa-arrow-right');
		} else {
			$('#social-sidebar').removeClass('hidden');
			$('#social-sidebar').addClass('show');
			$('#seta i').removeClass('fa-arrow-right');
			$('#seta i').addClass('fa-arrow-left');
		}
	})

    $('.parallax').parallax();
    $('.slider').slider();
$('.carousel.carousel-slider').carousel({fullWidth: true, indicators: true, duration: 300});
	$(document).ajaxComplete(function () {
		// $('#calendar').fullCalendar({
  //       // put your options and callbacks here
  //   })
    criarDepoimentos();
    $('.carousel.carousel-slider').carousel({fullWidth: true, indicators: true, duration: 300});

		// $('#testimonials').alpha();
		Materialize.updateTextFields();
  	$('.collapsible').collapsible();
		if($('#editor').length>0){
			$( '#editor' ).ckeditor();
		}
		if($('#ajax-carousel').val()==0){
			$('#ajax-carousel').val(1);
		}else{
			$('#ajax-carousel').val(0)
		}
		// $('#testimonials').alpha({layout : 'alt', delay : 5000, bubbleColor : 'rgba(0, 0, 0, 0)'});
  	AlignAreasText();
		AlignFooterOnLarge();
		AlignPostsBlog();
		// Estados_Cidades();
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

	$(document).on('click','.abrir-formulario-ebook',function(e){
		if($('.identificador').length == 0){
			$(this).closest('div').append('\
				<div class="row identificador" style="margin-top: 40px;">\
					<p>Para poder baixar o e-book por-favor informe seu Nome e Email no formulário abaixo:</p>\
					<form method="POST" action="" enctype="multipart/form-data">\
						<div class="input-field col s12 l6">\
		      		<label for="nome">Nome</label>\
		        	<input type="text" required="true" name="nome" class="validate">\
		      	</div>\
		      	<div class="input-field col s12 l6">\
		      		<label for="email">Email</label>\
		      		<input type="email" required="true" name="email" class="validate">\
		      	</div>\
		      	<div class="center-align col s12 agradecimento-ebook">\
		      		<button data-href="/post/pedirebook" data-action="naovoltar" class="btn waves-effect waves-light green darken-1 ajax-submit">\
		      			Enviar\
		      		</button>\
		      	</div>\
		      </form></div>');
		}
	});

	$(document).on('click', '.ajax-load', function(e) {
		e.preventDefault();
		var link = $(this).attr('href');
		console.log(link);
		GoTo(link, true);
		Estados_Cidades();
	});
	$(document).on('click','.ajax-load.topo',function(e){
		$('html').scrollTop(0);
	});
	$(document).on('click', '.ajax-load-to', function(e) {
		e.preventDefault();
		var link = $(this).data('href');
		var to = $(this).data('to');
		LoadTo(link, to);
	});

	$(document).on('click', '.baixar-ebook-inicio', function(e) {
		e.preventDefault();
		var link = $(this).attr('href');
		GoToAnchor(link,true);
		// setTimeout(function() {
		// Materialize.toast('<div class="center-align" style="width:100%;">O seu ebook está no final do texto!</div>', 20000, 'rounded');
		// },5000)
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

	$(document).on('click','#btn-noticia-1',function(e){
		openCapturaLeadsCliente(this,'btn-noticia-1','1','/post/leadContato/3','https://economia.estadao.com.br/noticias/geral,justica-condena-correios-a-pagar-indenizacao-de-r-10-mil-a-carteiro-assaltado,70002067811');
	});

	$(document).on('click','#btn-noticia-2',function(e){
		openCapturaLeadsCliente(this,'btn-noticia-2','1','/post/leadContato/3','https://www.gazetadopovo.com.br/curitiba/correios-terao-de-indenizar-funcionarios-assaltados-em-agencias-de-curitiba-e-rmc-6ztck7p6ykjwtof8qy1xywgsa');
	});

	$(document).on('click','#btn-noticia-3',function(e){
		openCapturaLeadsCliente(this,'btn-noticia-3','1','/post/leadContato/3','https://g1.globo.com/ro/ji-parana-regiao-central/noticia/justica-determina-que-funcionario-assaltado-nos-correios-receba-r-10-mil-de-indenizacao-em-ro.ghtml');
	});

$(document).on('click','#btn-noticia-4',function(e){
		openCapturaLeadsCliente(this,'btn-noticia-4','1','/post/leadContato/3','https://www.trt13.jus.br/informe-se/noticias/2017/04/servidora-dos-correios-vai-receber-indenizacao-por-assalto-a-agencia');
	});

$(document).on('click','#btn-noticia-5',function(e){
		openCapturaLeadsCliente(this,'btn-noticia-5','1','/post/leadContato/3','https://jurisway.jusbrasil.com.br/noticias/125336324/trt-condena-correios-a-indenizar-a-vitima-de-assalto');
	});



	$(document).on('click','.noticia-open-window',function(e){
		var link = $(this).data('action');
		setTimeout(function() {
			if(inseridolead == 1 ){
				window.open(link,'_blank');
				inseridolead = 0;
			}
		},1000);
	});

	$(document).on('keyup change', '.lead-nome', function () {
		var leadbtn = $(this).parent().parent().find('.lead-botao-container').find('.noticia-open-window');
		var leademail = $(this).parent().next().find('.lead-email');
		var leadnome = $(this);

		if(leadnome.val() != '' && leademail.val() != ''){
			leadbtn.removeClass('disabled');
		}else if(leadnome.val() == '' && !(leadbtn.hasClass('disabled')) || leademail.val() == '' && !(leadbtn.hasClass('disabled'))){
			leadbtn.addClass('disabled');
		}
	});

	$(document).on('keyup change', '.lead-email', function () {
		var leadbtn = $(this).parent().parent().find('.lead-botao-container').find('.noticia-open-window');
		var leadnome = $(this).parent().prev().find('.lead-nome');
		var leademail = $(this);
		
		if(leademail.val() != '' && leadnome.val() != ''){
			leadbtn.removeClass('disabled');
		}else if(leademail.val() == '' && !(leadbtn.hasClass('disabled')) || leadnome.val() == '' && !(leadbtn.hasClass('disabled'))){
			leadbtn.addClass('disabled');
		}
		
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

	$(document).on('click', '.ajax-submit-noticia', function(e) {
		e.preventDefault();
		var form = $(this).parents('form');
		var post = form.serializeArray();
		var link = $(this).data('href');
		var back = $(this).data('action');
		var metodo = $(this).data('method');
		var method = (metodo != undefined && metodo != '') ? metodo : 'POST';
		if (VerificarForm(form) == true) {
			SubmitAjaxNoticia(post, link, back, method);
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

function GoToAnchor(link, state) {
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
  		console.log(link);  		
    },
    error: function(xhr) { // if error occured
    },
    complete: function() {
			removerLoader();
			$('html,body').animate({
  			scrollTop: $(window.location.hash).offset().top
  		});
			$('.material-tooltip').remove();
		  $('.tooltipped').tooltip({delay: 50});
		  $('.modal').modal('close');
			FormatInputs();
			Materialize.toast('<div class="center-align" style="width:100%;">O seu ebook está no final do texto!</div>', 20000, 'rounded');
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
  $('.parallax').parallax();
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

var inseridolead = 0;



function SubmitAjaxNoticia(post, link, back, method) {
	$.ajax({
	  method: 'POST',
	  async: true,
	  data: post,
	  url: link,
    beforeSend: function(request) {
			// request.setRequestHeader("Authority-Optima-hash", $('input[name="hash_usuario_sessao"]').val());
			// request.setRequestHeader("Authority-Optima-nivel", $('input[name="nivel_usuario_sessao"]').val());
			// request.setRequestHeader("Authority-Optima-id", $('input[name="id_usuario_sessao"]').val());
			adicionarLoader();
    },
    success: function(data) {
    	console.log(data);

    	if (typeof data != undefined || data > 0) {
  			Materialize.toast('<div class="center-align" style="width:100%;">Cadastrado com sucesso</div>', 5000, 'rounded');
    	}

    	if(data == 'abrirNoticia'){
    		inseridolead = 1;    		
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



function SubmitAjax(post, link, back, method) {
	$.ajax({
	  method: 'POST',
	  async: true,
	  data: post,
	  url: link,
    beforeSend: function(request) {
			// request.setRequestHeader("Authority-Optima-hash", $('input[name="hash_usuario_sessao"]').val());
			// request.setRequestHeader("Authority-Optima-nivel", $('input[name="nivel_usuario_sessao"]').val());
			// request.setRequestHeader("Authority-Optima-id", $('input[name="id_usuario_sessao"]').val());
			adicionarLoader();
    },
    success: function(data) {
    	console.log(data);

    	if (data == "RELOAD") {
    		window.location.replace('/sistema/configuracoes');
    	}
    	if (typeof data != undefined && data != 'agradecimentoContato' || data > 0 && data != 'agradecimentoContato') {
  			Materialize.toast('<div class="center-align" style="width:100%;">Cadastrado com sucesso</div>', 5000, 'rounded');
    	}
    	if(data == 'abrirNoticia'){
    		inseridolead = 1;
    		
    	}
    	if(data == 'agradecimentoContato'){
    		Materialize.toast('<div class="center-align" style="width:100%;">Sua mensagem será encaminhada ao departamento responsável o mais rápido possível, mas este prazo pode levar um tempo.<br> Caso tenha pressa ou alguma urgência, você pode ligar para <a style="text-decoration: underline;" class="white-text" sty href="tel:+555135895507">(51) 3589-5507</a> ou entrar em contato via Whatsapp neste <a class="white-text" style="text-decoration: underline;" rel="" target="_blank" data-action="getURL" href="http://api.whatsapp.com/send?1=pt_BR&amp;phone=5551980371801&amp;text=Olá" data-url="http://api.whatsapp.com/send?1=pt_BR&amp;phone=5551980371801&amp;text=Olá">link</a>.</div>',60000, 'rounded');
    	}

    	if(data == 'ebook'){
    		$('.agradecimento-ebook').append('<div class="caixa-sucesso-preencher-formulario">\
    			<p>Formulário preenchido com <span class="green-text">sucesso!</span></p>\
    			<p>Em instantes você receberá seu e-book pelo e-mail cadastrado.</p>\
    			<p>Se quiser receber informações sobre os seus direitos pelo whatsapp, \
    			<a rel="" target="_blank" data-action="getURL" href="http://api.whatsapp.com/send?1=pt_BR&amp;phone=5551980371801&amp;text=Quero receber informações sobre os meus direitos pelo WhatsApp" data-url="http://api.whatsapp.com/send?1=pt_BR&amp;phone=5551980371801&amp;text=Quero receber informações sobre os meus direitos pelo WhatsApp" class="whatsapp">clique aqui</a>\
    			<a rel="" target="_blank" data-action="getURL" href="http://api.whatsapp.com/send?1=pt_BR&amp;phone=5551980371801&amp;text=Quero receber informações sobre os meus direitos pelo WhatsApp" data-url="http://api.whatsapp.com/send?1=pt_BR&amp;phone=5551980371801&amp;text=Quero receber informações sobre os meus direitos pelo WhatsApp" class="whatsapp"><i class="fa fa-whatsapp" style="color: #5ace61;margin-left: 10px;"></i></a>\
    			</div>')
    	}
    	console.log(back);
    	if (typeof back != 'undefined' && back != 'add_name' && back != 'naovoltar') {
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
	  url: link,
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
function AlignAreasText() { //pra alinhar texto e imagem sem atrapalhar o mobile
	if ($(window).width() > 600) {
		$('#areas-de-atuacao .row .container').addClass('valign-wrapper');
			$('#areas-de-atuacao .row .container').removeClass('semi-full');
	} else {
		$('#areas-de-atuacao .row .container').removeClass('valign-wrapper');
		$('#areas-de-atuacao .row .container').addClass('semi-full');
	}
	$(window).on('resize', function(e) {
		e.preventDefault();
		if ($(window).width() > 600) {
			$('#areas-de-atuacao .row .container').addClass('valign-wrapper');
			$('#areas-de-atuacao .row .container').removeClass('semi-full');
		} else {
			$('#areas-de-atuacao .row .container').removeClass('valign-wrapper');
		$('#areas-de-atuacao .row .container').addClass('semi-full');
		}
	});
};
function AlignPostsBlog() {
	if ($(window).width() > 600) {
		$('#blog-section .posts .card.post > .col').addClass('valign-wrapper');
	} else {
		$('#blog-section .posts .card.post > .col').removeClass('valign-wrapper');
	}
	$(window).on('resize', function(e) {
		e.preventDefault();
		if ($(window).width() > 600) {
			$('#blog-section .posts .card.post > .col').addClass('valign-wrapper');
		} else {
			$('#blog-section .posts .card.post > .col').removeClass('valign-wrapper');
		}
	});
}
function AlignFooterOnLarge() { //pra alinhar texto e imagem sem atrapalhar o mobile
	if ($(window).width() > 992) {
		$('footer.page-footer .container .row.to-align').addClass('valign-wrapper');
		// $('.not-nov #noticias').addClass('valign-wrapper');
	} else {
		$('footer.page-footer .container .row.to-align').removeClass('valign-wrapper');
		// $('.not-nov #noticias').removeClass('valign-wrapper');
	}
	$(window).on('resize', function(e) {
		e.preventDefault();
		if ($(window).width() > 992) {
			$('footer.page-footer .container .row.to-align').addClass('valign-wrapper');
			// $('.not-nov #noticias').addClass('valign-wrapper');
		} else {
			$('footer.page-footer .container .row.to-align').removeClass('valign-wrapper');
			// $('.not-nov #noticias').removeClass('valign-wrapper');
		}
	});
};
function FixedSideBar() {
	var sideBar = $('#' + 'fixedsidebar');
	$(sideBar).on('scroll', function(e) {
		if (this.scrollTop > $('.nav-bar').height()) {
			sideBar.addClass("fixed");
		} else {
			sideBar.removeClass("fixed");
		}
	});
}
function Estados_Cidades() {
	$.getJSON('/assets/json/estados_cidades.json', function (data) {
		var items = [];
		var options = '<option value="">Escolha seu estado</option>';	
		$.each(data, function (key, val) {
			options += '<option value="' + val.nome + '">' + val.nome + '</option>';
		});					
		$("#estados").html(options);
		$("#estados").change(function () {
			var options_cidades = '';
			var str = "";
			$("#estados option:selected").each(function () {
				str += $(this).text();
			});
			$.each(data, function (key, val) {
				if(val.nome == str) {							
					$.each(val.cidades, function (key_city, val_city) {
						options_cidades += '<option value="' + val_city + '">' + val_city + '</option>';
					});							
				}
			});
			$("#cidades").html(options_cidades);
		}).change();
	});
	// body...
}
function activeCarousel(){
	setTimeout(function() {
		if(typeof $('#ajax-carousel').val() != 'undefined'){
			$('.carousel').carousel('next');
		}
		activeCarousel();
	},10000);
}
function UploadFile(isso) {
	var link = isso.data('href');
	var formData = new FormData();
	formData.append('arquivo', isso[0].files[0]);

	$.ajax({
    url: link,
    type: 'POST',
    data: formData,
    dataType: 'json',
    processData: false,
    contentType: false,
    beforeSend: function(request) {
			request.setRequestHeader("Authority-Optima-hash", $('input[name="hash_usuario_sessao"]').val());
			request.setRequestHeader("Authority-Optima-nivel", $('input[name="nivel_usuario_sessao"]').val());
			request.setRequestHeader("Authority-Optima-id", $('input[name="id_usuario_sessao"]').val());
			adicionarLoader();
    },
    success: function (data) {
    	$('.file-path').val('');
    	isso.closest('.row').append('\
												    			<div class="col s12 m6 center-align relative pai">\
																	  <div class="card-panel grey lighten-4">\
																	  	<input type="hidden" name="tarefa_arquivo[arquivo][]" value="'+data+'">\
																	  	<button class="btn-floating btn waves-effect waves-light red close-button remove"><i class="fa fa-times" aria-hidden="true"></i></button>\
																	  	<b>Arquivo: '+data+' <br>\
																	  </div>\
																  </div>\
												    			');
      console.debug(data);
    },
    error: function (xhr, e, t) {
        console.debug((xhr.responseText));
    },
    complete: function() {
			removerLoader();
    }
	});
}


function openCapturaLeadsCliente(isso,identificador,margintop,controllerEnviar,linkNoticia){

	if(margintop == 0){
		margintop = 40;
	}

	/*Identificador para não ficar repetindo ao apertar o botão*/
		if($('.'+identificador).length == 0){
			$(isso).closest('div').append('\
				<div class="row center '+identificador+'" style="margin-top: '+margintop +'px;">\
					<p>Para poder ver a notícia por-favor informe seu Nome e Email no formulário abaixo:</p>\
					<form method="POST" action="" enctype="multipart/form-data">\
						<div class="input-field col s12 l6">\
		      		<label for="nome">Nome</label>\
		        	<input type="text" required="true" name="nome" class="validate lead-nome">\
		      	</div>\
		      	<div class="input-field col s12 l6">\
		      		<label for="email">Email</label>\
		      		<input type="email" required="true" name="email" class="validate lead-email">\
		      	</div>\
		      	<div class="center-align col s12 lead-botao-container">\
		      		<a target ="_blank" href="'+linkNoticia+'"data-href="'+controllerEnviar+'" data-action="'+linkNoticia+'" class="btn waves-effect waves-light green darken-1 ajax-submit-noticia white-text noticia-open-window disabled">\
		      			Enviar\
		      		</a>\
		      	</div>\
		      </form></div>');
		}

}






function VerificarForm() {
	var error = false;
	var textoErro = 'Por favor, complete corretamente.'

	$('.error').remove();
	$('input:enabled:not([type="hidden"])[required="true"]').each(function(){
		if(VerificaItem($(this),textoErro) == true) {
			error = true;
			return false;
		} 
		if($("input[type=email]").val().length>0){
			var email = $("input[type=email]").val();
			if(validarEmail(email, textoErro) == false){
				AddError($('input[type=email]'), 'Por favor, insira um e-mail válido.');
				error = true;
				return false;
			}
		}

	// 	if($('#alterar_senha').val() != $('#confirmar_alterar_senha').val())
	// 	{
	// 		AddError($('#confirmar_alterar_senha'),'Senhas são diferentes');
	// 		error = true;
	// 		return false;
	// 	}

	});


	$('textarea:enabled[required="true"]').each(function(){
		if(VerificaItem($(this),textoErro) == true) {
			error = true;
			return false;
		};
	});
	$('select:enabled[required="true"]').each(function(){
		if(VerificaItem($(this),textoErro) == true) {
			error = true;
			return false;
		};
	});
	if (error == false) {
		return true;
	}
}
function VerificaItem(isso,texto) {
	if (isso.val() == '') {
		AddError(isso,texto);
		return true;
	}
}
function AddError(isso,texto) {
	isso.focus().addClass('observe-post').parent().append('<div class="error">'+texto+'</div>');
}
function AddErrorAjax() {
	$('.error_ajax').fadeIn();
}
function validarEmail(email, texto) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}