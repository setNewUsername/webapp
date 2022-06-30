const Router = require("express")
const router = new Router()
const UserController = require("../controllers/userController")
const authMiddleWare = require("../middleware/authMiddleWare")

const checkRole = require("../middleware/checkRoleMiddleWare")

router.post("/registration", UserController.Registrate)
router.post("/login", UserController.Login)
router.get("/auth", authMiddleWare, UserController.Authorizate)

//get list of users
router.get("/", UserController.GetUsers)
router.get("/", checkRole('ADMIN'), UserController.GetUsers)

//get user basket; jwt required
router.get("/basket", authMiddleWare, UserController.GetUserBasket)

router.post("/addtobasket", authMiddleWare, UserController.AddToBasket)

router.post("/makeshop",authMiddleWare, UserController.MakePurchase)

//delete user by id
router.delete("/:id", UserController.Delete)

module.exports = router