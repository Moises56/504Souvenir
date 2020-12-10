const {Router} = require('express');
const router = Router();

const {renderIndex, renderAbout, renderCart, renderOrder, renderAdmin, renderTegu, renderOmoa,renderAmapala, renderCeiba, renderRoatan, renderComayagua, renderTela, renderSanPedroSula, renderPuertoCortes, renderDanli } = require('../controllers/index.controller')

const { renderProductos,renderProductosIndex,renderProductosIndexP} = require('../controllers/notes.controller');

// router.get('/productos/new-productos', renderProductos)
router.get('/', renderProductosIndex) //?Mostrando todos los productos
 router.get('/products/:page', renderProductosIndexP) //?Mostrando todos los productos

// router.get('/', renderIndex);
router.get('/about', renderAbout);
router.get('/cart', renderCart);
router.get('/orders', renderOrder);
router.get('/admin', renderAdmin);
router.get('/cityTegu', renderTegu);
router.get('/cityOmoa', renderOmoa);
router.get('/cityAmapala', renderAmapala);
router.get('/cityCeiba', renderCeiba);
router.get('/cityRoatan', renderRoatan);
router.get('/cityComayagua', renderComayagua);
router.get('/cityTela', renderTela);
router.get('/cityDanli', renderDanli);
router.get('/cityPuertoCortes', renderPuertoCortes);
router.get('/citySanPedroSula', renderSanPedroSula);


module.exports = router;

//?const {renderIndex, renderAbout, renderCart, renderOrder }