import Router from "@koa/router";
import { addpromotion,getpromoAll} from "../../controllers/admin/promotion.js";
const promorouter=new Router({
    prefix:"/admin"
});

promorouter.post("/addpromo",(ctx)=>{
    const data=ctx.request.body;
    ctx.body=addpromotion(data);
    ctx.set("Content-Type","application.json");
    ctx.status=201;
});

promorouter.get("/getAllpromo",(ctx)=>{
    ctx.body=getpromoAll();
    ctx.set("Content-Type","application.json");
    ctx.status=200;
});


export default promorouter;