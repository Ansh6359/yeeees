const httpError = require('http-errors');
const expressFramework = require('express');
const pathModule = require('path');
const parseCookies = require('cookie-parser');
const requestLogger = require('morgan');

const homeRouter = require('./routes/index');

const serverApp = expressFramework();

// view engine setup
serverApp.set('views', pathModule.join(__dirname, 'views'));
serverApp.set('view engine', 'hbs');
serverApp.use(requestLogger('dev'));
serverApp.use(expressFramework.json());
serverApp.use(expressFramework.urlencoded({ extended: false }));
serverApp.use(parseCookies());
serverApp.use(expressFramework.static(pathModule.join(__dirname, 'public')));

serverApp.use('/', homeRouter);

// catch 404 and forward to error handler
serverApp.use(function(request, response, nextMiddleware) {
    nextMiddleware(httpError(404));
});

// error handler
serverApp.use(function(error, request, response, nextMiddleware) {
    response.locals.message = error.message;
    response.locals.error = request.app.get('env') === 'development' ? error : {};

    response.status(error.status || 500);
    response.render('error');
});

const APP_PORT = process.env.PORT || 3000;
serverApp.listen(APP_PORT, () => {
    console.log(`Server is running on http://localhost:${APP_PORT}`);
});

module.exports = serverApp;