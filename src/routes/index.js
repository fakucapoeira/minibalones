const express = require ('express');

const router = express.Router();    // modulo router

router.get('/',(req,res)=>{
    res.render('index.html',{title:'MiniBalones'});

});
router.get('/contact',(req,res)=>{
    res.render('contact.html',{title:'Contacto'});

});


module.exports = router;