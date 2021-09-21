const router = require("express").Router()
const protect = require("../middleware/auth");
const requestsCtrl = require("../controllers/requests")

router.route("/:type").get(protect, requestsCtrl.getReqs)
router.route("/").put(protect, requestsCtrl.updateReqs)
router.route("/").post(protect, requestsCtrl.createReqs)

module.exports = router;
