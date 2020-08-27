'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;

    //取cookie数据
    // let name = ctx.cookies.get("username", {
    //   encrypt: true //获取cookies时进行解密
    // });
    // let pwd = ctx.cookies.get("passwd");
    // let sex = new Buffer(ctx.cookies.get("sex"), "base64").toString();
    // console.log(sex);

    if(ctx.session.isLogin) {
      ctx.body = ctx.session.username;
    } else {
      ctx.body = "ok";
    }
  }

  async goodlist() {
    const { ctx } = this;

    // ctx.request.query 获取get请求的参数
    // ctx.request.body 获取post请求的参数

    // ctx.response.body
    // ctx.body 是缩写，表示响应数据

    ctx.body = {id: 1, name: "aaaa"};
  }

  async login() {
    const { ctx } = this;

    // 存session
    ctx.session.isLogin = true;
    ctx.session.username = "小明";

    ctx.body = "ok";
  }

  async out() {
    const {ctx } = this;

    ctx.session.isLogin = false;
    ctx.session.username = null;
    ctx.redirect("/")

  }
}

module.exports = HomeController;
