var express = require('express');
var router = express.Router();
var { index, user, admin, service, form, noAdmin }= require("../controllers/indexController")
var adminValidation= require("../middlewares/userAdmin")


router.get("/",index)


router.get("/login",user)

router.get("/form",form)

router.get("/admin",adminValidation,admin)


router.get("/noAdmin",noAdmin)


router.get("/service",service)
module.exports= router;