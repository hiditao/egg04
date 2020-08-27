'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get("/news", controller.news.index);
  router.get("/login", controller.home.login);
  router.get("/signout", controller.home.out)

  router.get("/goods", controller.home.goodlist);


  // 上传文件
  router.post("/upload", controller.file.upload);

  // 数据库操作
  router.post("/addstu", controller.stu.add);
  router.get("/selectall", controller.stu.selectAll)
  router.get("/selectpart", controller.stu.selectPart);
  router.get("/selectone", controller.stu.selectOne);

};
