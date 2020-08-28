"use strict";

const { Service } = require("egg");

// 业务处理层：专注于数据库处理
class StuService extends Service {
    // stuname: 小明， sex: 女
    async addStu(stuname, sex) {
        const { app } = this;

        // app.mysql.insert("表名", {字段: 值, 字段: 值...})
        // insert into stu(stuname, sex) values(stuname, sex)
        let result = await app.mysql.insert("stu", { stuname, sex })
        console.log(result, result.affectedRows)

        if (result.affectedRows) {
            return { code: 1, msg: "数据插入成功" }
        } else {
            return { code: -1, msg: "数据插入失败" }
        }
    }

    async selectAll() {
        // select * from employee
        let result = await this.app.mysql.select("employee");

        return result;
    }

    async selectPart() {
        //await this.app.mysql.select("表名",{
        //     where: {},
        //     columns: [字段],
        //     orders: [["字段1","desc"], ["字段2", "asc"]],
        //     limit: num,
        //     offset: 0  //偏移量
        // })

        let result = await this.app.mysql.select("employee", {
            columns: ["id", "name", "salary"],
            limit: 10,
            offset: 10
        })

        return result;
    }

    async selectOne() {
       let result = await this.app.mysql.get("employee", { id: 12 });
       console.log(result)

       return result;
    }

    async updateStu(formdata) { 
        // formdata: {stuname, "", sex: ""}

        let row = {
            stuname: formdata.stuname,
            sex: formdata.sex
        };
        let options = {
            where: {
                sid: formdata.sid
            }
        }

        let result = await this.app.mysql.update("stu", row, options);
        if(result.affectedRows) {
            return {code: 2, msg: "数据修改成功"}
        } else {
            return {code: -2, msg: "数据修改失败"}
        }
    }

    async delStu(formdata) {
        let result = await this.app.mysql.delete("stu", {
            stuname: formdata.stuname
        })
        console.log(result);

        if(result.affectedRows) {
            return {code: 3, msg: "数据删除成功"}
        } else {
            return {code: -1, msg: "操作失败"}
        }
    }
}

module.exports = StuService;