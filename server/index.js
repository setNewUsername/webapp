require("dotenv").config()

//importing modules
const express = require("express")
const sequelize = require("./dbConnection")
//importing modules

//env
const PORT = process.env.PORT || 5000
//env

//app creation and base routing
const app = express()
//app creation and base routing

const start = async () => {
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, ()=> {
            console.log(`Server started at port: ${PORT}`)
        });
    }
    catch (e) {
        console.log(e)
    }
}

start()