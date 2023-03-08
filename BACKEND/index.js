//import koa 
import koa from "koa";
//import bodyparser(middleware)
import bodyparser from 'koa-bodyparser';
//imports routes
//admin==trader
import arouter from "./routes/admin/adminprofile.js";
import irouter from "./routes/admin/item.js";
import srouter from "./routes/admin/inventory.js";
import vrouter from "./routes/admin/viewcus.js";
import promorouter from "./routes/admin/promotion.js";


//customer
import crouter from "./routes/customer/cusprofile.js";
import itemsrouter from "./routes/customer/viewitems.js";
import wishrouter from "./routes/customer/wishlist.js";
import cartrouter from "./routes/customer/cart.js";
import orderrouter from "./routes/customer/purchase.js";



import cors from "@koa/cors";

//start app
const app=new koa;

app.use(cors());

//use body-parser
app.use(bodyparser());

//allows to access routes
//admin==trader
app.use(arouter.routes()).use(arouter.allowedMethods());
app.use(irouter.routes()).use(arouter.allowedMethods());
app.use(srouter.routes()).use(arouter.allowedMethods());
app.use(vrouter.routes()).use(vrouter.allowedMethods());
app.use(promorouter.routes()).use(promorouter.allowedMethods());


//customer
app.use(itemsrouter.routes()).use(itemsrouter.allowedMethods());
app.use(wishrouter.routes()).use(wishrouter.allowedMethods());
app.use(cartrouter.routes()).use(cartrouter.allowedMethods());
app.use(orderrouter.routes()).use(orderrouter.allowedMethods());
app.use(crouter.routes()).use(crouter.allowedMethods());


//prompts status
app.use((ctx)=>{
    ctx.set("Content-Type","text/html");
    ctx.body="<h2>not found</h2>";
    ctx.status=404;
});

//set up port
app.listen(5000, ()=>{
    console.log("app is running on port 5000");
});