const e = require('express');
const cors = require('cors')
const postReqRouter = require('./routes/postReq')
const getReqRouter = require('./routes/getReq')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const sessionRouter = require('./routes/sessionRoutes')
const passport = require('passport')
const initializeLocalPassport = require('./local-strategy')
const mongoose = require('mongoose');
const User = require('./db/schemas/user');

mongoose.connect('mongodb://localhost/expresstut_db')
.then(()=>console.log('connected'))
.catch((err)=>console.log(err))



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

//middleware to modify new sessions so they save to the session store

const sessionInitializer = (req,res,next) =>{
  
  // req.sessionStore.get(req.session.id,(err,sessionData)=>{
  //     if(err) throw err
    
  //    !sessionData?.visited && (req.session.visited =  1)
    
  //    console.log(sessionData?.visited);
  //   })
  console.log(req.session.visited);
  
  req.session.visited ? req.session.visited += 1 : req.session.visited =  1
    console.log(req.session);
    console.log(req.session.id);
  next();
}
 

const server = e()

// registes the local strategy
initializeLocalPassport(passport)

// middleware 
server.use(cors(
  {
    origin:'http://localhost:5173',
    credentials:true
  }
))
server.use(e.urlencoded({extended:false}))
server.use(session({
  secret:'MY_SECRET_KEY_FOR_SIGNING_SESSIONCOOKIE',
  saveUninitialized:false,
  resave:false,
  cookie:{
    maxAge: 1000 * 60 * 5 , // 5 minutes
  },
}))

server.use(e.json())
server.use(cookieParser('MY_SECRET_KEY_FOR_SIGNINGCOOKIE'))
server.use(passport.initialize()) 
server.use(passport.session())






//server.use(sessionInitializer)
server.use(postReqRouter)
server.use(getReqRouter)
server.use(sessionRouter) 
//applies to all routes
//server.use(reqLogger)


// this route is created like this because i want to access the done function's response messages
server.post('/auth',(req,res,next)=>{
 
 // uses the local strategy, the callback accesses the parameters returned from the done function
  passport.authenticate('local',(error,user,info)=>{
    // if done returns an error
    if (error) return res.status(500).send({message:'failed to login user, server error'})

    //runs if either the user was not found or password is incorrect
    if (!user) {
      return res.status(401).send({message: info.message})
    }
    // this login method is what actually initiates appending the user object to the session object, thereby logging the user in on the serverside. it calls the serializeUser function

    req.logIn(user,(err)=>{
      console.log(req.session); 
      
      if (err) return res.status(500).send({message:'failed to login user, server error'})
      return res.status(200).send({message:info.message})
    })
  })(req,res,next)

  
})

// route to create a new user

server.post('/signup',async (req,res)=>{
  const {body} = req
  const newUser = new User(body)

  try{
    const savedUser = await newUser.save(); // returns the user object stored in the collection
    res.status(201).send({success:savedUser})
  }
  catch(error){
    res.status(401).send({message:'error occured while trying to register the user'})
  }
})



server.listen(3000,()=>console.log('running'))