const Router = require("express")
const router = new Router()
const ProductController = require("../controllers/productController")

const checkRole = require("../middleware/checkRoleMiddleWare")

//get all products
router.get("/", ProductController.GetAll)

//get one product by id
router.get("/:id", ProductController.Get)

//add one product
router.post("/",checkRole('ADMIN'),  ProductController.Add)

//delete product by id
router.delete("/:id", ProductController.Delete)

module.exports = router