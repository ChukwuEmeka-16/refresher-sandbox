const e = require('express')

const router = e.Router()


router.get('/sessiontest',(req,res)=>{
  console.log(req.session);
  console.log(req.session.id);

 
 
  res.status(200).send({success:true,sessionRoute:'yes'})
})

module.exports = router 