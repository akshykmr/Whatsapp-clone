import * as Controller from "../app/controllers";
import * as Validation from "../utility/validations";
const applyRoutes =(app) =>{
    app.get("/",(req,res)=>
    res.send(`ab na hono isse`))

//creat//
app.post("/user", Validation.validateCreateUser, Controller.createUser);
app.post("/login",Validation.validateLogin, Controller.loginUser);
app.post("/channel",Validation.validateCreateChannel, Controller.createChannel);
app.get("/search-user",Validation.validateSearchUser, Controller.getChannelList);
app.get("/channel-list",Validation.validateGetChannelList, Controller.searchUser);
app.post("/message",Validation.validateAddMessage, Controller.sendMessage);
};
export default applyRoutes;