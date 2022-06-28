const Router = require("express")
const router = new Router()

//get all products
router.get("/")

//get one product by id
router.get("/:id")

//add one product
router.post("/")

//delete product by id
router.delete("/:id")

module.exports = router