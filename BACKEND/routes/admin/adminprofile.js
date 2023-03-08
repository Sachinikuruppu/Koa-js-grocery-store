import Router from "@koa/router";
import { addadminprofile } from "../../controllers/admin/adminprofile.js";
const arouter=new Router({
    prefix:"/admin"
});

arouter.post("/addadmin",(ctx)=>{
    const data=ctx.request.body;
    ctx.body=addadminprofile(data);
    ctx.set("Content-Type","application.json");
    ctx.status=201;
});

export default arouter;