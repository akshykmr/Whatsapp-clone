import * as Controller from "../app/controllers";
import * as Validation from "../utility/validations";
const applyRoutes =(app) =>{
    app.get("/",(req,res)=>
    res.send(`ab na hono isse`))

//creat//
app.post("/user", Validation.validateCreateUser, Controller.createUser);
app.post("/login",Validation.validateLogin, Controller.loginUser);
app.post("/channel",Validation.validateAddChannel, Controller.createChannel);
app.get("/search-user",Validation.validateSearchUser, Controller.searchUser);
app.get("/channel-list",Validation.validateChannels, Controller.getChannels);
app.post("/message",Validation.validateAddMessage, Controller.sendMessage);
};
export default applyRoutes;