const e = require('express')


const router = e.Router()


// only applies to the post route
const postRouteOnlyMiddleware = (req,res,next) =>{

    console.log(req.method);
    
   next()
}


router.post('/test',postRouteOnlyMiddleware,(req,res)=>{
   
    console.log(req.body);
    res.status(200).send({success:true})
    
})

module.exports = router