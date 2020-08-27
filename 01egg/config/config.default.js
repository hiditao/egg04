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
  config.keys = appInfo.name + '_1598491413543_7834';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // 服务器配置
  config.cluster = {
    listen: {
      path: "",
      port: 8080,
      hostname: "localhost" //默认是localhost或者ip地址，上线时用0.0.0.0
    }
  };

  // 配置数据库
  config.mysql = {
    client: {
      host: "127.0.0.1", //主机名、地址
      user: "root", //用户名
      password: "root", //密码
      port: 3306, //端口号
      database: "mydb" //使用的数据库
    }
  }

  // CRUD  Create（insert） Read（select） Update（update） Delete（delete）

  // 跨域配置
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  };

  // post请求参数会有安全验证问题，需要关闭安全认证
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true
    }
  };
  //更改post请求体的大小
  config.bodyParser = {
    jsonLimit: '1mb',
    formLimit: '1mb',
  };

  // 文件上传
  config.multipart = {
    mode: "file",  //默认是stream，file表示文件
    fileExtensions: [".txt", ".md", ".pdf"] //扩展可支持的文件
  }

  // 配置session
  config.session = {

  }

  return {
    ...config,
    ...userConfig,
  };
};
