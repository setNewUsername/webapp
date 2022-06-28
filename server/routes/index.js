const Router = require("express")
const router = new Router()

const developerRouter = require("./developerRouter")
const genreRouter = require("./developerRouter")
const languageRouter = require("./developerRouter")
const platformRouter = require("./developerRouter")
const productRouter = require("./developerRouter")
const publisherRouter = require("./developerRouter")
const publishingTypeRouter = require("./developerRouter")
const userRouter = require("./developerRouter")

router.use("/user", userRouter)
router.use("/language", languageRouter)
router.use("/platform", platformRouter)
router.use("/publisher", publisherRouter)
router.use("/publishingtype", publishingTypeRouter)
router.use("/developer", developerRouter)
router.use("/product", productRouter)
router.use("/genre", genreRouter)

module.exports = router
