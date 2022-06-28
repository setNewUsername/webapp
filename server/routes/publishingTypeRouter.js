const Router = require("express")
const router = new Router()

//get all publishing types
router.get("/")

//get one publishing type by id
router.get("/:id")

module.exports = router