"use strict";

// const Controller = require("egg").Controller;
const { Controller } = require("egg");
const fs = require("fs");
const path = require("path");

class FileController extends Controller {
    async upload() {
        const { ctx, app } = this;

        console.log(app.config);

        // 获取上传的文件信息
        let file = ctx.request.files[0];
        console.log(file);
        // filename: 文件名称
        // filepath：文件的绝对路径

        // 获取服务器的配置信息  hostname  port
        let cluster = app.config.cluster.listen;

        let dest = "/public/upload/";
        // 表示图片存储的路径，对于服务器来说，取得是绝对路径
        let to = path.dirname(__dirname) + dest + path.basename(file.filepath);
        console.log(to)

        await fs.copyFile(file.filepath, to , function(err) {
            if(err) console.log(err)

            console.log("图片上传成功");

            // 删除文件
            fs.unlink(file.filepath, function(err) {
                if(err) console.err(err)
            })
        })

        ctx.body = `http://${cluster.hostname}:${cluster.port}${dest}${path.basename(file.filepath)}`;
    }
}

module.exports = FileController;