const express = require('express');
const router = express.Router();
const { singleUpload, multiUpload } = require('../middleware/imageUpload');
const protect = require('../middleware/auth');
const { updateAvatar, uploadGallery, deleteAvatar } = require('../controllers/image');

router.route('/avatar').put(protect, singleUpload, updateAvatar);
router.route('/avatar').delete(protect, deleteAvatar);
router.route('/gallery').put(protect, multiUpload, uploadGallery);



module.exports = router;
