/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1677052873147_7456';

  // add your middleware config here
  config.middleware = [];

  // 关闭csrf验证
  config.security = {
    csrf: {
      enable: false,
    },
  };

  // 使用ejs模板引擎, 渲染html页面
  // config.view = {
  //   mapping: {
  //     '.html': 'ejs',
  //   },
  // };

  // 使用nunjucks模板引擎, 渲染html页面
  exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.html': 'nunjucks',
    },
  };

  // 将默认的 % 替换成 $ 符合前端习惯
  config.ejs = {
    // delimiter: '$',
  };

  config.session = {
    key: 'session', // 设置session的key
    // httpOnly: false, // 允许客户端修改session值
    maxAge: 1000 * 60, // 有效时间
    // renew: true, // 如一直操作就刷新有效值, 否则时间到就失效
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
