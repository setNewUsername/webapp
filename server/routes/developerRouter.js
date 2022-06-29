const Router = require("express")
const router = new Router()
const DeveloperController = require("../controllers/developerController")

//get all developers
router.get("/", DeveloperController.GetAll)

//get one developer by id
router.get("/:id", DeveloperController.Get)

//add one developer
router.post("/", DeveloperController.Add)

//delete developer by id
router.delete("/:id", DeveloperController.Delete)

module.exports = router