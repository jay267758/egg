'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {

  async login() {
    const { ctx } = this;
    console.log(ctx.query);
    ctx.body = {
      code: 200,
      data: {
        token: 'chenji',
      },
    };
  }

  async get() {
    const { ctx } = this;
    console.log(ctx.query);
    ctx.body = {
      code: 200,
      data: {
        token: 'chenji666',
      },
    };
  }

  async getLogin() {
    const { ctx } = this;
    console.log(ctx.query);
    ctx.body = {
      code: 200,
      data: {
        token: 'chenji888',
      },
    };
  }

}

module.exports = HomeController;
