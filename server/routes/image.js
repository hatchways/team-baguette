const express = require('express');
const router = express.Router();
const { singleUpload , multiUpload} = require('../middleware/imageUpload');
const protect = require('../middleware/auth');
const {
  updateAvatar
} = require('../controllers/image');

router.route('/avatar').put(protect, singleUpload, updateAvatar);
router.route('/gallery').put(protect, multiUpload
  // ,updateAvatar
  );



module.exports = router;
