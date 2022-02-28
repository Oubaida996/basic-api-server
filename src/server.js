'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors =require('cors');
const logger =require('./middleware/logger');
const foodsRoute =require('./routes/food.route.js');
const clothesRoute =require('./routes/clothes.route.js');
const hadle500 =require("./error-handlers/500");
const hadle404 =require("./error-handlers/404");

const app = express();


// Global Middlewares
app.use(express.json()); // access the body
app.use(cors()); //install the package
app.use(logger);
app.use(foodsRoute);
app.use(clothesRoute);
// // access the body
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors());
// app.use(bodyParser.json());// or // app.use(express.json()); 


app.get('/' ,(req,res)=>{
    res.send("Home Page");
});


app.use(hadle500);
app.use("*",hadle404);



function start(PORT) {
app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
})    
}



module.exports ={
    app :app,
    start :start
}

