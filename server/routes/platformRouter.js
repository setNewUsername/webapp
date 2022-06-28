const Router = require("express")
const router = new Router()

//get all platforms
router.get("/")

//get one platform by id
router.get("/:id")

//add one platform
router.post("/")

//delete platform by id
router.delete("/:id")

module.exports = router