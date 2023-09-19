import app from './app.js'
const port = 500;

// Handle the Uncaught Expection
process.on("uncaughtException",(err)=>{
    console.log(`Error:${err.message}`);
    console.log(`shut down the server to handling the Uncaught Expection`);
})

const server = app.listen(500, ()=>{
    console.log(`Server is running at port ${port}`);
})
//Promise Unhandled Rejection
process.on("unhandledRejection",(err)=>{
    console.log(`Promise Unhandled Error:${err.message}`);
    console.log(`Shut down the server to handle the Promise Unhandler Rejection`);

    server.close(()=>{
        process.exit(1);
    })
})