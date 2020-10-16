const {Router} = require('express');
const router = Router();

const {renderIndex, renderAbout, renderCart, renderOrder } = require('../controllers/index.controller')
router.get('/', renderIndex);
router.get('/about', renderAbout);
router.get('/cart', renderCart);
router.get('/orders', renderOrder);


module.exports = router;