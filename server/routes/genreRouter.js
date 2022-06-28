const Router = require("express")
const router = new Router()

//get all genres
router.get("/")

//get one ganre by id
router.get("/:id")

//add one ganre
router.post("/")

//delete ganre by id
router.delete("/:id")

module.exports = router