'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  console.log(controller);
  const counter = app.middleware.counter();
  router.get('/', controller.home.index);
  router.get('/dome', counter, controller.dome.list);
  router.get('/dome/get/girls', controller.dome.getGirls);
  router.post('/dome/add', controller.dome.add);
  router.get('/dome/params', controller.dome.params);
  router.post('/dome/token', controller.dome.token);
  router.get('/dome/response', controller.dome.response);
  router.get('/cookie', controller.cookie.index);
  router.post('/cookie/add', controller.cookie.add);
  router.delete('/cookie/del', controller.cookie.del);
  router.post('/cookie/editor', controller.cookie.editor);
  router.post('/cookie/show', controller.cookie.show);

  router.get('/api/login', controller.login.login);
  router.get('/api/login', controller.login.get);
  router.get('/api/v1/login', controller.login.getLogin);

};
