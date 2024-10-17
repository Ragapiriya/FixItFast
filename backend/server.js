const app = require('./app');
const dotenv = require('dotenv');
const pathModule = require('path');
const connectDatabase = require('./config/database');

dotenv.config({path:pathModule.join(__dirname,"config/config.env")});
connectDatabase();
const server = app.listen(process.env.PORT,()=>{console.log(`Server listening to the port ${process.env.PORT} in ${process.env.NODE_ENV}`)});
 

//incase of uncaught errors 
process.on('uncaughtException',(err)=>{
    console.log(`Error: ${err.message}`);
    console.log("Shutting down the server due to uncaught exception error.")
    server.close(()=>{//to stop server 
        process.exit(1); //after stopping the server node program will come to end
    }); 

})

