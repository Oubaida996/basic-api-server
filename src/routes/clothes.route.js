'use strict'

const express = require('express');
const router = express.Router();

const {Clothes} = require('../models/index');






//Routes

router.get('/clothes'  , async (req,res)=>{
   console.log("before");
   let clothes = await Clothes.findAll();
   console.log("after");
   res.send(clothes);


});

router.get('/clothes/:id', async (req, res) => {
   let { id } = req.params;

   let clothe = await Foods.findAll({
      where: {
         id: id
      }
   });
   // console.log("delete satus", res.statusCode);
   res.json(clothe);

});


router.post('/clothe' ,async (req ,res) =>{
   let {body} =req;
   
   let newClothes = await Clothes.create(body);
   res.send(newClothes);
});


router.put('/clothes/:id', async (req,res)=>{
 let {id} =req.params;
 let {namePro} =req.body;
 let {prand} =req.body;
   let updateClothes =await Clothes.update({
    namePro :namePro,
    prand :prand
   },{
      where :{
         id : id
      }
   });

   res.send(updateClothes);

});


router.delete('/clothes/:id', async (req,res)=>{
   let {id} =req.params;

     let deleteClothes =await Clothes.destroy({
        where :{
           id : id
        }
     });
  
     res.send("deleteClothes");
  
  });


module.exports =router;