const Router = require("express")
const router = new Router()
const LanguageController = require("../controllers/languageController")

const checkRole = require("../middleware/checkRoleMiddleWare")

//get all languages
router.get("/", LanguageController.GetAll)

//get one language by id
router.get("/:id", LanguageController.Get)

//add one language
router.post("/", checkRole('ADMIN'), LanguageController.Add)

//delete language by id
router.delete("/:id", LanguageController.Delete)

module.exports = router