const admins= require("../data/admins.json")

module.exports= (req,res, next)=>{

    const admin= admins.find(admin=> admin.nombre.toLowerCase().trim()  === req.query.user.toLowerCase().trim())

    if(admin){
        next()
    }
    else{
        res.redirect("/noAdmin")
    }
}