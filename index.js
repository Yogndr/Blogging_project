const express=require('express');
const mongoose=require('mongoose');
const session=require('express-session')



const router = require('./routes');
const { checkauth } = require('./utils/auth');

require('dotenv').config();

const app=express();

// mongodb+srv://yashmittal92002_db_user:<db_password>@cluster0.hpystel.mongodb.net/?appName=Cluster0
mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.hpystel.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
.then(res=> console.log('connected to mongoDB'))
.catch(err=>console.log(err))

app.use(express.json());


app.use(express.urlencoded({extended:true}))

app.use(session({
    secret:process.env.SESSION_SECRET,
    resave:true,
    saveUninitialized:true
}))

app.set('view engine', 'ejs');

app.use(checkauth)

app.use(router)




app.listen(3000,(req,res)=>{
    console.log("listening at PORT 3000")
})