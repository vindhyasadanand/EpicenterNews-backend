const express = require("express")
const bodyParser = require("body-parser");
const app = express()
// to handle the data which is comming from html form we are using body parser
app.use(bodyParser.urlencoded({extended:true}))

app.get('/',function(request,response){
    response.sendFile(__dirname+"/index.html");
})
app.post('/',function(req,res){
    var num1 = Number(req.body.num1);
    var num2 = Numberreq.body.num2;
    var result = num1+num2;
    res.send("result of the calculation is " + result);

});

app.listen(3000,function(){
    console.log("Server is running at port 3000")
})