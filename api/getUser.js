const User=require('../db/models/User')

module.exports=async(_,res)=>{
try{
const users=await User.find()
  res.json({data:users})
}
catch(error)
{
  res.status(500).json({msg:"Internal Server Error"})
}
}
