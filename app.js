var express = require('express');
var session = require('express-session');
var parseurl = require('parseurl');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var Control = require('./app/controller/control.js');
const fileUpload = require('express-fileupload');

var index = require('./app/controller/index');
var areasdeatuacao = require('./app/controller/areasdeatuacao');
var contato = require('./app/controller/contato');
var equipe = require('./app/controller/equipe');

var app = express();
var control = new Control;

app.use(require('express-is-ajax-request'));
// INICIANDO SESSION
app.set('trust proxy', 1); // trust first proxy
app.use(session({
  secret: 'youngdiaslauxen&lima',
  resave: true,
  saveUninitialized: true
}));
 
// Verifica usuario se esta logado ou não
// app.use(function (req, res, next) {
//   var pathname = parseurl(req).pathname;
//   // if (pathname.indexOf("assets") == -1) {
//   //   console.log('V------------------------------------------V');
//   //   console.log(pathname);
//   //   console.log(req.session.usuario);
//   //   console.log((pathname != '/' && pathname != '') && 
//   //     (pathname.indexOf("css") == -1 && pathname.indexOf("js") == -1 && pathname.indexOf("imgs") == -1 && pathname.indexOf("fonts") == -1) && 
//   //       req.isAjaxRequest() == true);
//   //   console.log('/\\------------------------------------------/\\');
//   // }
//   if ((pathname != '/' && pathname != '') && 
//       (pathname.indexOf("css") == -1 && pathname.indexOf("js") == -1 && pathname.indexOf("imgs") == -1 && pathname.indexOf("fonts") == -1) && 
//         req.isAjaxRequest() == true){
//     console.log('********************* 1 -  pathname*******************');
//     console.log(pathname);
//     console.log('********************* 1 -  pathname*******************');
//     var id = req.headers['authority-optima-id'];
//     var hash = req.headers['authority-optima-hash'];
//     var nivel = req.headers['authority-optima-nivel'];
//     verificacao.VerificarUsuario(id, hash, nivel).then(data => {
//       if (data.length > 0) {
//         console.log('********************* 2 - if pathname*******************');
//         console.log(pathname);
//         console.log('********************* 2 - if pathname*******************');
//         req.session.usuario = {};
//         req.session.usuario.id = id;
//         req.session.usuario.hash_login = hash;
//         req.session.usuario.nivel = nivel;
//         verificacao.GetConfig(id).then(data => {
//           req.session.usuario.config = data[0];
//           next();
//         });
//       } else {
//         console.log('********************* 2 - else pathname *******************');
//         console.log(pathname);
//         console.log('********************* 2 - else pathname *******************');
//         req.session.destroy(function(err) {
//           res.json('<img src="/assets/imgs/logout.gif"><script>setTimeout(function(){ window.location.replace("/"); }, 4100);</script>');
//         });
//       }
//     });
//   } else if (control.Isset(req.session.usuario, false)
//     && (pathname != '/' && pathname != '')
//       && (pathname.indexOf("css") == -1 && pathname.indexOf("js") == -1 && pathname.indexOf("imgs") == -1 && pathname.indexOf("fonts") == -1)) {
//         console.log('********************* penultimo else if pathname *******************');
//         console.log(pathname);
//         console.log('********************* penultimo else if pathname *******************');
//     res.redirect('/');
//   } else {
//         console.log('********************* deu bom pathname *******************');
//         console.log(pathname);
//         console.log('********************* deu bom pathname *******************');
//     next();
//   }
// });

// view engine setup
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /assets
app.use(favicon(path.join(__dirname, 'assets', 'logo_mini.ico')));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use("/assets", express.static(__dirname + '/assets'));
// app.use(express.static(path.join(__dirname, '/assets')));
// console.log(path.join(__dirname, 'assets'));
app.use(fileUpload());

app.use('/', index);
app.use('/areasdeatuacao', areasdeatuacao);
app.use('/contato', contato);
app.use('/equipe', equipe);

// app.use(function (req, res, next) {
//   var pathname = parseurl(req).pathname;
//   if (pathname.indexOf("chats") == -1 && pathname.indexOf("css") == -1 && pathname.indexOf("js") == -1 && pathname.indexOf("imgs") == -1 && pathname.indexOf("fonts") == -1) {
//     if (control.Isset(req.session.usuario, false)) {
//       var id_usuario = 0;
//     } else {
//       var id_usuario = req.session.usuario.id;
//     }
//     verificacao.AddLog(req.connection.remoteAddress, req.method, pathname, req.headers['user-agent'], id_usuario);
//   }
//   next();
// });
// app.use('/sistema', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  console.log('ERROR --------------------- ERROR');
  console.log(err.message);
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
	if (typeof req.session.id_usuario != 'undefined' && req.session.id_usuario != 0) {
  	res.render('error', { erro: 'Página não existente.', tipo_erro: '404' });
  } else {
  	res.render('login/index', { erro: 'Página não existente, faça o login para acessar o sistema.', tipo_erro: '404' });
  }
});
// app.listen(3000);

module.exports = app;
