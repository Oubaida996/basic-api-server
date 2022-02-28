'use strict'

const express = require('express');
const router = express.Router();

const { Foods } = require('../models/index');






//Routes

router.get('/foods', async (req, res) => {
   console.log("before");
   let foods = await Foods.findAll();
   console.log("after");
   console.log("GET satus", res.statusCode);
   console.log("typeof foods", typeof foods);
   res.json(foods);
   // res.send(foods);
   // json return value as object but send return the value as string

});


router.get('/foods/:id', async (req, res) => {
   let { id } = req.params;

   let food = await Foods.findAll({
      where: {
         id: id
      }
   });
   // console.log("delete satus", res.statusCode);
   res.json(food);

});



router.post('/foods', async (req, res) => {
   let { body } = req;

   let newFoods = await Foods.create(body);
   // console.log("Post satus", res.statusCode);
   res.send(newFoods);
});


router.put('/foods/:id', async (req, res) => {
   let { id } = req.params;
   let updateFood;
   if (id === 1) {

      updateFood = await Foods.update({
         nameFood: "test",
         categoryName: "test"
      }, {
         where: {
            id: id
         }
      });
   } else {
      let { nameFood } = req.body;
      let { categoryName } = req.body;
      updateFood = await Foods.update({
         nameFood: nameFood,
         categoryName: categoryName
      }, {
         where: {
            id: id
         }
      });
   }



   res.send(updateFood);

});


router.delete('/foods/:id', async (req, res) => {
   let { id } = req.params;

   let deleteFood = await Foods.destroy({
      where: {
         id: id
      }
   });
   console.log("delete satus", res.statusCode);
   res.send("deleteFood");

});


module.exports = router;