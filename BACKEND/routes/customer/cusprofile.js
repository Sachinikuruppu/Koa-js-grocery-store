import Router from "@koa/router";
import { addcusprofile } from "../../controllers/customer/cusprofile.js";
const crouter=new Router({
    prefix:"/customer"
});

crouter.post("/addcustomer",(ctx)=>{
    const data=ctx.request.body;
    ctx.body=addcusprofile(data);
    ctx.set("Content-Type","application.json");
    ctx.status=201;
});

export default crouter;