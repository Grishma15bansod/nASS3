const express= require('express')
const fun= require('./middle')
const run = express();
const middleware1=(req,res,next)=>{
    console.log(middleware1);
    next()
}
const middleware2=(req,res,next)=>{
    console.log(middleware2);
    next()
}
run.use(middleware1)


run.get('/', middleware2,function(req,res){
    res.send('this is a middleware ')
})
run.get('/getUser', function(req,res){   ///its uses a globle 
    res.json(fun.routesss.home)
})
run.get('/data', function(req,res){
    res.send('<h1>it is a globle middleware1</h1>')
})
run.get('/app',middleware2, function(req,res){
    res.send('<h3>it is a globle middleware111</h3>')
})
run.get('/api', function(req,res){
    res.send('<h5>i am a middleware2</h5>')
})
run.listen(7000)