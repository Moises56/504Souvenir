const {Router} = require('express');
const router = Router();

const {renderIndex, renderAbout, renderCart, renderOrder, renderAdmin, renderTegu, renderOmoa, renderSanPedroSula, renderPuertoCortes, renderDanli  } = require('../controllers/index.controller')
router.get('/', renderIndex);
router.get('/about', renderAbout);
router.get('/cart', renderCart);
router.get('/orders', renderOrder);
router.get('/admin', renderAdmin);
router.get('/cityTegu', renderTegu);
router.get('/cityOmoa', renderOmoa);
router.get('/citySanPedroSula', renderSanPedroSula);
router.get('/cityPuertoCortes', renderPuertoCortes);
router.get('/cityDanli', renderDanli);

module.exports = router;

//?const {renderIndex, renderAbout, renderCart, renderOrder }