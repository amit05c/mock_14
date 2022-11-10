const {connection} = require("./config/db")
const express= require("express")
const { urlRouter } = require("./routes/url")
const cors= require("cors")
const PORT=process.env.PORT || 8080
const app= express()
app.use(cors())
app.use(express.json())


app.get('/',(req,res)=>{
    res.send("Welcom to home page")
})

app.use("/shorturl",urlRouter)

app.listen(PORT,async()=>{
    try{
       await connection
       console.log("connnected")
    }
    catch(err){
        console.log(err)
    }
})