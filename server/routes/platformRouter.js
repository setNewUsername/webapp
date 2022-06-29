const Router = require("express")
const router = new Router()
const PlatformController = require("../controllers/platformController")

//get all platforms
router.get("/", PlatformController.GetAll)

//get one platform by id
router.get("/:id", PlatformController.Get)

//add one platform
router.post("/", PlatformController.Add)

//delete platform by id
router.delete("/:id", PlatformController.Delete)

module.exports = router