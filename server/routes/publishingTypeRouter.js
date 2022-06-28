const Router = require("express")
const router = new Router()
const PublishingTypeController = require("../controllers/publishingTypeController")

//get all publishing types
router.get("/", PublishingTypeController.GetAll)

//get one publishing type by id
router.get("/:id", PublishingTypeController.Get)

module.exports = router