const applyRoutes =(app) =>{
    app.get('/',(req,res)=>
    res.send(`are bc ye to kam kr gya`))

//creat//
app.post('/user',(req,res)=>res.send(`creat user`));
app.post('/login',(req,res)=>res.send(`login`));
app.post('/channel',(req,res)=>res.send(`channel`));
app.post('/search-user',(req,res)=>res.send(`serach user`));
app.post('/channel list',(req,res)=>res.send(`channel list`));
app.post('/message',(req,res)=>res.send(`message`));
};
export default applyRoutes;