const e = require('express')

// declaring a router
const router = e.Router()

router.get('/test',(req,res)=>{
   

    console.log(req.headers)
    console.log(req.body);
    res.status(200).send({success:true})
    
})

// route parameters(you can add as many as you like anywhere in the route you like)
router.get('/test/:id/:name/trust',(req,res)=>{
   
    // accesses route parameters
    console.log(req.params)
    console.log('param route');
    // accesses query parameters(no modifications required on this endpoint, you can just access it like this)
    console.log(req.query);
    

    

   res.status(200).send({success:true})
    
})

router.get('/cookie/:key/:value',(req,res)=>{
    res.cookie(`${req.params.key}`,`${req.params.value}`,{
        maxAge:60000, // one minute in milliseconds
        signed:true,
        httpOnly:true
    })
    res.status(200).send({success:true})
})

router.get('/cookie',(req,res)=>{
    
    console.log(req.headers.cookie);
    console.log('other');
    
    console.log(req.cookies);
    
    console.log('other');
    console.log(req.signedCookies.daun);
    
    res.status(200).send({success:true,token:req.cookies})
})


module.exports = router