const express= require("express");
//it simplifies the process of logging requests to our application
const morgan = require("morgan");
const bodyParser = require("body-parser");
//it parses the cookies attached with the clients request
const cookieParser = require("cookie-parser");
//it ensures we are sending right headers
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
// bring routes
const blogRoutes = require('./routes/blog');
const authRoutes = require('./routes/auth');
//app
const app = express();
//database
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true,useCreateIndex:true,useFindAndModify:false}).then(()=>
console.log('DB connected'));
//middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
//routes middleware
app.use('/api',blogRoutes);
app.use('/api',authRoutes);
if(process.env.NODE_ENV=='development'){
    app.use(cors({origin:`${process.env.CLIENT_URL}`}));
}



//port
const port = process.env.PORT||8000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})