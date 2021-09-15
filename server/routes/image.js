const express = require('express');
const router = express.Router();
const { singleUpload } = require('../middleware/imageUpload');
const protect = require('../middleware/auth');
const {
  updateAvatar
} = require('../controllers/image');

router.route('/avatar').put(protect, singleUpload
  
  // ,updateAvatar
  );
router.route('/showcase').put(protect, singleUpload);



module.exports = router;
