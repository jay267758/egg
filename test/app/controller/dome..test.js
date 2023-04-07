'use strict';

// 单元测试
const { app } = require('egg-mock/bootstrap');

describe('dome -index', () => {

  it('dome index page ', () => {
    return app.httpRequest()
      .get('/dome')
      .expect(200)
      .expect('<h1>I am dome</h1>');
  });


  it('dome gerGirls', () => {
    return app.httpRequest()
      .get('/get/girls page')
      .expect(200)
      .expect('<h1>getGirls</h1>');
  });
});
