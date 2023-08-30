import express from "express";

const app = express();
const port = 500;

app.listen(500, ()=>{
    console.log(`Server is running at port ${port}`);
})