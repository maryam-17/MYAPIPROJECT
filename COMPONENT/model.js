const mongoose=require ("mongoose");

const schemaStructure=mongoose.Schema({
    name:{
        rating:{
            type:Number,
            required:true,
        },
    country:{
        type:string,
        required:true,
    },
    location:{
        type:string,
        required:true,
    }
    }
})
module.exports = mongoose.model("monies", storeSchema);