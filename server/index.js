require("dotenv").config()

//importing modules
const express = require("express")
const sequelize = require("./dbConnection")
//const models = require("./models/models")
const fileUpload = require("express-fileupload")
const cors = require("cors")
const router = require('./routes/index')
const errorHandler = require('./middleware/errorHandlerMW')
const path = require('path')

const DBTestFill = require("./scripts/dbscripts")
//importing modules

//env
const PORT = process.env.PORT || 5000
//env

//app creation and base routing
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)
//app creation and base routing

//DBTestFill.FillDB();

//error handling
app.use(errorHandler)
//error handling

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