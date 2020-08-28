"use strict";

const { Controller } = require("egg");

class StuController extends Controller {
    async addStu() {
        const { ctx } = this;

        console.log(ctx.request.body); //{stuname: "小明", sex: "女"}
        let stuname = ctx.request.body.stuname;
        let sex = ctx.request.body.sex;

        let result = await ctx.service.stu.addStu(stuname, sex);

        ctx.body = result;
    }

    async selectAll() {
        let result = await this.ctx.service.stu.selectAll();

        this.ctx.body = result;
    }

    async selectPart() {
        let result = await this.ctx.service.stu.selectPart();

        this.ctx.body = result;
    }

    async selectOne() {
        let result = await this.ctx.service.stu.selectOne();

        this.ctx.body = result;
    }

    async updateStu() {

        const { ctx } = this;
        // 获取post请求提交的的参数
        let formdata = ctx.request.body

        let result = await this.ctx.service.stu.updateStu(formdata)

        ctx.body = result;
    }

    async delStu() {
        const { ctx } = this;

        let formdata = ctx.request.body;

        ctx.body = await ctx.service.stu.delStu(formdata);
    }
}

module.exports = StuController;