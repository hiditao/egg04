'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  //跨域处理
  cors: {
    enable: true,
    package: 'egg-cors',
  },

  // 配置MySQL数据库
  mysql: {
    enable: true,
    package: "egg-mysql"
  }
};
