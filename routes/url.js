const {Router}= require("express")
const {UrlModel}= require("../models/url.model")
const urlRouter= Router()

urlRouter.post("/create",async(req,res)=>{
    let {longUrl}= req.body

   
    // await newJob.save()

    let result  = '';
    let char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charLen = char.length;
    for ( let i = 0; i < 6; i++ ) {
        result += char.charAt(Math.floor(Math.random() * charLen));
    }
    let newUrl= UrlModel({longUrl, shortUrl:result })
    await newUrl.save()
    res.send(newUrl)
})


urlRouter.get("/all",async(req,res)=>{
    let url= await UrlModel.find({})
    res.send(url)
})

urlRouter.get("/short/:id",async(req,res)=>{
   let {id}=req.params
   console.log(req.params)
   let url= await UrlModel.findOne({shortUrl:id})
   console.log(url)
 return  res.redirect(url.longUrl)
})

module.exports={
    urlRouter
}
