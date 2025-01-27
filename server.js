import express  from 'express'
import colors  from 'colors'
import dotenv   from 'dotenv'
import morgan from 'morgan'
import connectDB from './config/db.js'
// import connectDB from './config/db.js'
import autoRoutes from './routes/authRoutes.js'
// import authRoutes from "./routes/authRoutes.js";
// import categoryRoutes from "./routes/categoryRoutes.js"
// import productRoutes from "./routes/productRoutes.js"
// import revRoutes from './routes/revRoutes.js'

import cors from 'cors'
// import { hash } from 'bcryptjs'

// const express = require('express')

dotenv.config();

//database config
connectDB();


const app = express();
//middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//routes

app.use("/api/v1/user",autoRoutes); //autoRoutes
// app.use("/api/v1/rat", revRoutes);
// app.use("/api/v1/product", productRoutes);




 

app.get('/', (req, res) =>{
    res.send("<h1>Welcome  Systemm rating my website</h1>")
    
});
const PORT = process.env.PORT || 8001;

//RUN LISTEN    
app.listen(PORT, ()=>{
    console.log(`SERVER Runing ${process.env}on ${PORT}`);
});
