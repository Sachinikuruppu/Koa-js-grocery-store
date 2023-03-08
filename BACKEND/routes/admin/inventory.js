import Router from "@koa/router";
import { addsafetystock, getsstockall } from "../../controllers/admin/inventory.js";

const srouter= new Router({
    prefix:"/admin"
});

srouter.post("/addsstock",(ctx)=>{
    const data=ctx.request.body;
    ctx.body=addsafetystock(data);
    ctx.set("Content-Type","application.json");
    ctx.status=201;
});

srouter.get("/getssAll",(ctx)=>{
    ctx.body=getsstockall();
    ctx.set("Content-Type","application.json");
    ctx.status=200;
});

export default srouter;