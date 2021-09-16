const router = require("express").Router()
const protect = require("../middleware/auth");
const requestsCtrl = require("../controllers/requests")

router.route("/requests").get(protect, requestsCtrl.getReqs)
router.route("/requests").put(protect, requestsCtrl.updateReqs)
router.route("/requests").post(protect, requestsCtrl.createReqs)

module.exports = router;