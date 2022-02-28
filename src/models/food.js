'use strict';



const Foods =(sequelize ,DataTypes) =>
    sequelize.define('foods',{
        nameFood :{
            type : DataTypes.STRING,
            allowNull :false
        },
        categoryName : {
            type :DataTypes.STRING,

        }
    });



module.exports =Foods;