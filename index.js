
const express = require("express")
const path = require("path")

const app = express();

app.get("/",function(req,res){
    res.send("Helloworld")
})


app.listen(3000, function (){
    console.log("server started .....")
})

app.get("/file", function(req, res){
    res.sendFile(path.resolve(__dirname,"index.html"))
})

app.get("/file", function(req, res){
    res.sendFile(path.resolve(__dirname,"index.html"))
})

app.use("/file/:name",function (req,res,next){
    const user = req.params.name;
    switch(user){
        case "santosh": res.send("user santosh exists")
        case "dad":
            next();
        default:
            res.status(404).send("unauthorised user")
    }
})

app.use("/file/:name",function (req,res,next){
    const user = req.params.name;
    switch(user){
        case "santosh": res.send("user santosh exists")
        case "dad":
            next(); // next argument moves to next middle ware or response controller
        default:
            res.status(404).send("unauthorised user")
    }
})

app.get("/file/:name", function(req, res){
    const name = req.params.name;
    res.send(name)
})


