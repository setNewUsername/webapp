const Router = require("express")
const router = new Router()
const GenreController = require("../controllers/genreController")

//get all genres
router.get("/", GenreController.GetAll)

//get one ganre by id
router.get("/:id", GenreController.Get)

//add one ganre
router.post("/", GenreController.Add)

//delete ganre by id
router.delete("/:id", GenreController.Delete)

module.exports = router