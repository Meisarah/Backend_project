const router = require('express').Router();

router.use('/season', require('./entities/season/route'));
router.use('/userlogin', require('./entities/userlogin/route'));
router.use('/product', require('./entities/product/route'));
router.use('/subcategory', require('./entities/subcategory/route'));

module.exports = router;