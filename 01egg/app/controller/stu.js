"use strict";

const { Controller } = require("egg");

class StuController extends Controller {
    async add() {
        const { ctx } = this;

        console.log(ctx.request.body); //{stuname: "小明", sex: "女"}
        let stuname = ctx.request.body.stuname;
        let sex = ctx.request.body.sex;

        let result = await ctx.service.stu.add(stuname, sex);

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
}

module.exports = StuController;