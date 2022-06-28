require("dotenv").config()

//importing modules
const express = require("express")
const sequelize = require("./dbConnection")
const models = require("./models/models")
const cors = require("cors")
const router = require('./routes/index')
//importing modules

//env
const PORT = process.env.PORT || 5000
//env

//app creation and base routing
const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)

app.get("/", (req, res) =>
{
res.status(200).json({ message: "working" })
})

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