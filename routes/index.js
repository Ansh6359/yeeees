const expressFramework = require('express');
const appRouter = expressFramework.Router();

appRouter.get('/', function(request, response, nextMiddleware) {
    response.render('home', { pageTitle: 'Home' });
});

appRouter.get('/about', function(request, response, nextMiddleware) {
    response.render('about', { pageTitle: 'About Me' });
});

appRouter.get('/project', function(request, response, nextMiddleware) {
    response.render('project', { pageTitle: 'Projects' });
});

appRouter.get('/contact', function(request, response, nextMiddleware) {
    response.render('contact', { pageTitle: 'Contact Me' });
});

module.exports = appRouter;