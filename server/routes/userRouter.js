const Router = require("express")
const router = new Router()
const UserController = require("../controllers/userController")
const authMiddleWare = require("../middleware/authMiddleWare")

router.post("/registration", UserController.Registrate)
router.post("/login", UserController.Login)
router.get("/auth", authMiddleWare, UserController.Authorizate)

//get list of users
router.get("/", UserController.GetUsers)

//delete user by id
router.delete("/:id", UserController.Delete)

module.exports = router