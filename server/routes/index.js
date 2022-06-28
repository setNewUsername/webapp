const Router = require("express")
const router = new Router()

const developerRouter = require("./developerRouter")
const genreRouter = require("./genreRouter")
const languageRouter = require("./languageRouter")
const platformRouter = require("./platformRouter")
const productRouter = require("./productRouter")
const publisherRouter = require("./publisherRouter")
const publishingTypeRouter = require("./publishingTypeRouter")
const userRouter = require("./userRouter")

router.use("/user", userRouter)
router.use("/language", languageRouter)
router.use("/platform", platformRouter)
router.use("/publisher", publisherRouter)
router.use("/publishingtype", publishingTypeRouter)
router.use("/developer", developerRouter)
router.use("/product", productRouter)
router.use("/genre", genreRouter)

module.exports = router
