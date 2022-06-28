const Router = require("express")
const router = new Router()
const UserController = require("../controllers/userController")

router.post("/registration", UserController.Registrate)
router.post("/login", UserController.Login)
router.get("/auth", UserController.Authorizate)

//get list of users
router.get("/", UserController.GetUsers)

//delete user by id
router.delete("/:id", UserController.Delete)

module.exports = router