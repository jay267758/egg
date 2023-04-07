'use strict';

const { Controller } = require('egg');

class JspangController extends Controller {

  async list() {
    const { ctx, app } = this;
    console.log('dome', ctx.session.counter);
    const dataList = {
      nianfen: app.timeProp,
      name: '小花',
      interest: [
        { id: 1, title: 'this is news 1', url: '/news/1' },
        { id: 2, title: 'this is news 2', url: '/news/2' },
      ],
    };
    await ctx.render('dome.html', dataList);
  }

  async add() {
    const { ctx } = this;
    ctx.body = {
      code: 200,
      data: { ...ctx.query },
    };
  }

  async getGirls() {
    const ctx = this.ctx;
    const res = await ctx.service.dome.getGirl(1888);
    ctx.body = res;
  }

  async params() {
    const { ctx } = this;
    const params = ctx.params('name');
    ctx.body = params;
  }

  async token() {
    const { ctx } = this;
    const token = ctx.request.token; // 获取 token
    ctx.body = {
      code: 200,
      data: token,
    };
  }

  async response() {
    const { ctx } = this;
    ctx.response.token = 'setResponse'; // 设置 token、
    // 获取token ctx.response.header.token
    const base64 = ctx.helper.base64Encode(ctx.response.header.token);
    ctx.body = base64; // 对 token 进行加密
  }

  // async getGirls() { // 异步调取
  //   const { ctx } = this;
  //   await new Promise(resolve => {
  //     setTimeout(() => {
  //       resolve(ctx.body = '<h1>getGirls</h1>');
  //     }, 3000);
  //   });
  // }

}

module.exports = JspangController;
