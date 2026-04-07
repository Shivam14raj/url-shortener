const mongoose = require('mongoose')

async function connectDB(){
    mongoose.connect(process.env.MONGO_DB_URL)
    .then(()=>{
        console.log('db connected!')
    }) 
    .catch(err => {
        console.log(err)
        process.exit(1); 
    })  
} 

module.exports = connectDB;   