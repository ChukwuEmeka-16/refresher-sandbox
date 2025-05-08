//const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('./db/schemas/user')




function initialize(passport){
    const authenticateUser = async (username, password, done)=>{
      
        // logic to fetch the user in the database

       let user;
       try{
        
        await User.findOne({email:username}).then((res)=>{
          user = res
        })
        
        console.log(user);
       }
       catch(error){
        done(error,false,{message:'error occured while fetching user'})
       }



       if(!Boolean(user)) return done(null,false,{message:'user not found'})
       
        // if the user exists then this runs
       try {
        
        if (user.password == password) {
            return done(null,user,{message:'logged in successfully'})
        } 
        else {
            return done(null,false,{message:'incorrect password'}) 
        }
       }
       catch (error) {
        
        done(error,false,{message:'an actual error occured on the server'}) // sends and error response and ends this execution
       }
    }
    // instanciation this strategy with the authentication logic
    passport.use(new LocalStrategy({usernameField:'email'},authenticateUser))
     
    // function to create and store the passport user object in the session object, you can add anything you like
    passport.serializeUser((user,done)=>done(null,user._id))


    passport.deserializeUser((id,done)=>{
        console.log('in deserialize');
        console.log(id);
        
        let queried_user = User.findById(id)
       
        done(null,queried_user)
    })
    
}

module.exports = initialize;