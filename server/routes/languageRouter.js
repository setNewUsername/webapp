const Router = require("express")
const router = new Router()
const LanguageController = require("../controllers/languageController")

//get all languages
router.get("/", LanguageController.GetAll)

//get one language by id
router.get("/:id", LanguageController.Get)

//add one language
router.post("/", LanguageController.Add)

//delete language by id
router.delete("/:id", LanguageController.delete)

module.exports = router