const Router = require("express")
const router = new Router()

const developerRouter = require("./developerRouter")
const genreRouter = require("./genreRouter")
const languageRouter = require("./languageRouter")
const productRouter = require("./productRouter")
const publisherRouter = require("./publisherRouter")
const userRouter = require("./userRouter")

router.use("/user", userRouter)
router.use("/language", languageRouter)
router.use("/publisher", publisherRouter)
router.use("/developer", developerRouter)
router.use("/product", productRouter)
router.use("/genre", genreRouter)

module.exports = router
