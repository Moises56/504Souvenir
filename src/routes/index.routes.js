const {Router} = require('express');
const router = Router();

const {renderIndex, renderAbout, renderCart, renderOrder, renderAdmin, renderTegu, renderOmoa } = require('../controllers/index.controller')
router.get('/', renderIndex);
router.get('/about', renderAbout);
router.get('/cart', renderCart);
router.get('/orders', renderOrder);
router.get('/admin', renderAdmin);
router.get('/cityTegu', renderTegu);
router.get('/cityOmoa', renderOmoa);

module.exports = router;

//?const {renderIndex, renderAbout, renderCart, renderOrder }