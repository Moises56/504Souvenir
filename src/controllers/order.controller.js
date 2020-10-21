const express = require('express');
const mongoose = require('mongoose');
const Order = require('../models/Order');

var router = express.Router();
mongoose.set('useFindAndModify', false);

//rutas

router.get('/cart', (req, res) => { //*muestra handlebars
    res.render('cart')
});

router.get('/orders', (req, res) => { //*muestra handlebars
    res.render('orders')
});

router.get('/admin', (req, res) => { //*muestra handlebars
    Order.find((err,docs)=>{
        if(!err){
            res.render('admin',{
                order:docs
            })
        }else{
            console.log('Error en la Oden: '+ err);
        }
    });
});

router.get('/order/:id',(req, res)=>{
    Order.findById(req.params.id,(err,doc)=>{
        if(!err){
            res.render('orders',{order:doc});
        }else{
            console.log('Error findbyId: '+ err);
        }
    })
});
router.get('/order/delete/:id',(req,res)=>{
    Order.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err){
            res.render('/admin');
        }else{
            console.log('Error al Eliminar: '+ err);
        }
    });
});

//Post

router.post('/cart',(req,res)=>{
    insertOrder(req,res);
});
router.post('/order',(req,res)=>{
    updateOrder(req,res);
});

//functions

function updateOrder(req,res){
    Order.findOneAndUpdate({id:req.body._id},req.body,{new:true},(err,doc)=>{
        if(!err){
            res.redirect('/admin');
        }else{
            console.log('Error al actualizar'+err);
        }
    });
}
function insertOrder(req,res){
    var d = new Date();
    var t = d.getTime();
    var counter = t;
    counter += 1;
    var order = new Order();
    order.total=req.body.total;
    order.order = counter;
    order.save((err,doc)=>{
        if(!err){
            concole.log('order: '+order);
            res.redirect('/admin');
        }else{
            console.log('Error insertOrder: '+err);
        }
    });
}

module.exports = router;
