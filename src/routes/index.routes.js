const {Router} = require('express');
const router = Router();

const {renderIndex, renderAbout, renderCart, renderOrder, renderAdmin, renderTegu, renderOmoa, renderRoatan, renderComayagua, renderTela } = require('../controllers/index.controller')
router.get('/', renderIndex);
router.get('/about', renderAbout);
router.get('/cart', renderCart);
router.get('/orders', renderOrder);
router.get('/admin', renderAdmin);
router.get('/cityTegu', renderTegu);
router.get('/cityOmoa', renderOmoa);
router.get('/cityRoatan', renderRoatan);
router.get('/cityComayagua', renderComayagua);
router.get('/cityTela', renderTela);

module.exports = router;

//?const {renderIndex, renderAbout, renderCart, renderOrder }