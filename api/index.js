const e = require('express');
const cors = require('cors')
const postReqRouter = require('./routes/postReq')
const getReqRouter = require('./routes/getReq')
const cookieParser = require('cookie-parser')
// custom middleware

const reqLogger = (req,res,next) =>{
 
    if (req.method =='POST'){
    console.log(req.method)
    console.log(req.body)
    }
    console.log(res.status);
    
    console.log('middleware logger end')
    req.method =='GET'&& res.status(200).send({success:false})
  req.method =='POST'&& next()
}




const server = e()
server.use(cors(
  {
    origin:'http://localhost:5173',
    credentials:true
  }
))


server.use(e.json())
server.use(cookieParser('MY_SECRET_KEY_FOR_SIGNINGCOOKIE'))
server.use(postReqRouter)
server.use(getReqRouter)

//applies to all routes
//server.use(reqLogger)



server.listen(3000,()=>console.log('running'))