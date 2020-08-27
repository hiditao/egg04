"use strict";

const { Controller } = require("egg");

class NewsController extends Controller {
    async index() {

        const { ctx } = this;

        // // 存cookie数据
        // ctx.cookies.set(key, value, options)
        ctx.cookies.set("username", "张三", {
            maxAge: 1000 * 3600 * 24, //有效期为1天 单位是毫秒
            encrypt: true //对cookies进行加密
        });
        ctx.cookies.set("passwd", "666", {
            signed: true, //对cookie进行签名
        });
        ctx.cookies.set("sex", new Buffer("男").toString("base64"));


        // ctx.cookies.set("username", null)
        // ctx.cookies.set("passwd", null, {
        //     maxAge: 0
        // })

        ctx.body = "aa";

    }
}

module.exports = NewsController;