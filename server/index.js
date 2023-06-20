const express = require('express')
const mongoose = require('mongoose')
const app  = express();
const cors  = require('cors')
const {config} = require('dotenv');
const IdModel = require('./models/Id')

//Middleware
app.use(express.json());
config();
app.use(cors());

//Server
mongoose.connect(process.env.DBKEY,{
    useNewURLParser:true
}).catch((error) => console.log(error));

//Routes
app.post('/insert' , async(req,res)=>{
    const playlistID = req.body.info;

    const newPlaylistId = new IdModel({playListID: playlistID});

    try{
        await newPlaylistId.save();
        res.redirect("/");
    }
    catch(error){
       console.log(error);
    }
})

app.get('/read' , async(req,res)=>{
    try{
        const allData = await IdModel.find({});
    res.status(200).send(allData);
    }
    catch(err){
        console.log(err)
    }
   
})


app.listen(process.env.PORT , ()=>{
    console.log(`server running at ${process.env.PORT}`)
})
