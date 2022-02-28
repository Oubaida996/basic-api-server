'use strict'

const {Sequelize , DataTypes} = require('sequelize');
const Foods = require('./food');
const Clothes =require('./clothes');
require('dotenv').config();


//prepare the connection
const POSTGRES_URL = (process.env.DATABASE_URL || "postgres://obieda:0000@localhost:5432/movie");

let sequelizeOptions =  {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      }
    }
  }

let sequelize =new Sequelize(POSTGRES_URL ,sequelizeOptions);

// sequelize.sync({force :false}).then(()=>{
//     console.log('created');
// }).catch(err =>{
//     console.log("from sync" , err);
// })

module.exports ={
    db :sequelize,
    Foods : Foods(sequelize,DataTypes),
    Clothes:Clothes(sequelize,DataTypes)
}



