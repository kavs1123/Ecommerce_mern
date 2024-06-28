import express from 'express'

import colors from 'colors'
import dotenv from 'dotenv'

import morgan from 'morgan'
import connDb from './config/db.js'






dotenv.config()


connDb();

const app = express()



app.use(morgan('dev'))
app.use(express.json())



app.get('/',(req,res)=>{
    res.send({
        message:'Welcome to the home page fkers',
    });
});


const PORT =  process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`Server Running on ${PORT} and in mode ${process.env.DEV_MODE}`.red)
});

