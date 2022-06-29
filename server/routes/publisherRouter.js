const Router = require("express")
const router = new Router()
const PublisherController = require("../controllers/publisherController")

//get all publishers
router.get("/", PublisherController.GetAll)

//get one publisher by id
router.get("/:id", PublisherController.Get)

//add one publisher
router.post("/", PublisherController.Add)

//delete publisher by id
router.delete("/:id", PublisherController.Delete)

module.exports = router