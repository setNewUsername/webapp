const Router = require("express")
const router = new Router()
const GenreController = require("../controllers/genreController")

const checkRole = require("../middleware/checkRoleMiddleWare")

//get all genres
router.get("/", GenreController.GetAll)

//get one ganre by id
router.get("/:id", GenreController.Get)

//add one ganre
router.post("/", checkRole('ADMIN'), GenreController.Add)

//delete ganre by id
router.delete("/:id", GenreController.Delete)

module.exports = router