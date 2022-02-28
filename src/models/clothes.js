
const Clothes = (seq ,types) => seq.define(
    'clothes' ,
    {
        namePro :{
            type :types.STRING,
            allowNull:false
        },
        prand :{
            type :types.STRING,
            allowNull:false
        }
    }
);


module.exports =Clothes;