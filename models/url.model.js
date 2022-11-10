const mongoose = require("mongoose")

const urlSchema= new mongoose.Schema({
     longUrl: {type:String, require: true},
    shortUrl: { type: String, require: true}
},
{
    versionKey:false,
    timestamps:true
}
)

const UrlModel= mongoose.model("jobData",urlSchema)
module.exports={
    UrlModel
}