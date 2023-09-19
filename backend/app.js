import express from "express";
import {middlewareError} from './middleware/error.js'
import  cookieParser from "cookie-parser";
import fileUpload from 'express-fileupload'

const app = express();

app.use(express.json())
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(fileUpload({useTempFiles:true}))



app.use(middlewareError)
export default app;