const Router = require("express")
const router = new Router()

router.post("/registration")
router.post("/login")
router.get("/auth")

//get list of users
router.get("/")

//delete user by id
router.delete("/:id")

module.exports = router