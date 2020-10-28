const {Router} = require('express');
const router = Router();

<<<<<<< HEAD
const {renderIndex, renderAbout, renderCart, renderOrder, renderAdmin, renderTegu, renderOmoa, renderRoatan, renderComayagua, renderTela } = require('../controllers/index.controller')
=======
const {renderIndex, renderAbout, renderCart, renderOrder, renderAdmin, renderTegu, renderOmoa,renderCeiba, renderAmapala } = require('../controllers/index.controller')
>>>>>>> 7b035e4f3715b34245830a567215255d96c35790
router.get('/', renderIndex);
router.get('/about', renderAbout);
router.get('/cart', renderCart);
router.get('/orders', renderOrder);
router.get('/admin', renderAdmin);
router.get('/cityTegu', renderTegu);
router.get('/cityOmoa', renderOmoa);
<<<<<<< HEAD
router.get('/cityRoatan', renderRoatan);
router.get('/cityComayagua', renderComayagua);
router.get('/cityTela', renderTela);
=======
router.get('/cityAmapala', renderAmapala);
router.get('/cityCeiba', renderCeiba);
>>>>>>> 7b035e4f3715b34245830a567215255d96c35790

module.exports = router;

//?const {renderIndex, renderAbout, renderCart, renderOrder }