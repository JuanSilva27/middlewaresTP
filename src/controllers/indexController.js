module.exports={
    index: (req,res,next)=>{
        res.render("index")
    },


    user: (req,res)=>{

        res.render("login")
    },

    form:(req,res)=>{
        res.render("form")
    },
    
    admin:(req,res)=>{

        const user = req.query.user
        res.render("admin", {user})
    },

    noAdmin:(req,res)=>{
        res.render("noAdmin")
    },




    service:(req,res)=>{
        res.render("service")
    }
}