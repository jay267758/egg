'use strict';

const { Controller } = require('egg');

class JspangController extends Controller {

  async index() {
    const { ctx } = this;
    console.log('cookie', ctx.session.counter);
    await ctx.render('cookie.html');
  }

  async add() {
    const { ctx } = this;
    ctx.cookies.set('user', 'jay', {
      maxAge: 1000 * 60, // 设置有效时间
      httpOnly: true, // 只允许在服务端操作
      // encrypt: true, // 对中文进行加密，否则设置中文会报错
    });
    ctx.session.username = '李四';
    ctx.body = {
      code: 200,
      data: 'cookie设置成功',
    };
  }

  async del() {
    const { ctx } = this;
    ctx.cookies.set('user', null);
    ctx.body = {
      code: 200,
      data: '删除cookie成功',
    };
  }
  async editor() {
    const { ctx } = this;
    ctx.cookies.set('user', 'cookie');
    ctx.body = {
      code: 200,
      data: '修改cookie成功',
    };
  }
  async show() {
    const { ctx } = this;
    ctx.body = {
      code: 200,
      data: {
        cookie: ctx.cookies.get('user'),
        session: ctx.session.username,
      },
    };
  }
}

module.exports = JspangController;
