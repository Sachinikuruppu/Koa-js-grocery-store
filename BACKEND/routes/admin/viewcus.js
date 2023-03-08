import Router from "@koa/router";
import {getAllcust} from "../../controllers/customer/cusprofile.js"

const vrouter=new Router({
    prefix:"/admin"
});

vrouter.get("/getAllCust",(ctx)=>{
    ctx.body=getAllcust();
    ctx.set("Content-Type","application.json");
    ctx.status=200;
});

export default vrouter;