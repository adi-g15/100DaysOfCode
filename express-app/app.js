var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var authRouter = require('./routes/auth');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const authenticate = (req, res, next) => {

  let authenticated = false;  //Find if user is logged in

  if( !authenticated ){
    res.redirect(403, app.mountpath + 'auth');
    /*LEARNT - Redirect path ->
      1. Redirects can be relative to the root of the host name.
          For example, if the application is on http://example.com/admin/post/new, the following would redirect to the URL http://example.com/admin:
          `res.redirect('/admin')`

      2. Redirects can be relative to the current URL.
          For example, from http://example.com/blog/admin/ (notice the trailing slash), the following would redirect to the URL http://example.com/blog/admin/post/new.
            `res.redirect('post/new')`

      3. Redirecting to post/new from http://example.com/blog/admin (no trailing slash), will redirect to http://example.com/blog/post/new.

      Think of the urls as directory paths, then it will make sense
      */

    /* A path value of “back” has a special meaning, it refers to the URL specified in the Referer header of the request. If the Referer header was not specified, it refers to “/”.*/
      console.log(app.mountpath + 'auth')
    console.log("Back here")
    console.log("not authenticated")
  }
  next();
}

app.use(authenticate);
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth', authRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;