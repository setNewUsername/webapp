const Router = require("express")
const router = new Router()

//get all languages
router.get("/")

//get one language by id
router.get("/:id")

//add one language
router.post("/")

//delete language by id
router.delete("/:id")

module.exports = router