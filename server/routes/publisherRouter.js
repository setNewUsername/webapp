const Router = require("express")
const router = new Router()

//get all publishers
router.get("/")

//get one publisher by id
router.get("/:id")

//add one publisher
router.post("/")

//delete publisher by id
router.delete("/:id")

module.exports = router