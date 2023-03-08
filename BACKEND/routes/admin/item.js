import Router from "@koa/router";
import { additem,updateitem,deleteitem } from "../../controllers/admin/item.js";
const irouter=new Router({
    prefix:"/admin"
});

irouter.post("/additem",(ctx)=>{
    const data=ctx.request.body;
    ctx.body=additem(data);
    ctx.set("Content-Type","application.json");
    ctx.status=201;
});

irouter.put("/:id",(ctx)=> {
    const id= ctx.params.id;
    const data=ctx.request.body;
    ctx.body=updateitem(id,data);
    ctx.set("Content-Type","application.json");
    ctx.status=200;
});

irouter.del("/:id",(ctx)=>{
    const id=ctx.params.id;
    ctx.body=deleteitem(id);
    ctx.set("Content-Type","application.json");
    ctx.status=200;
})
export default irouter;