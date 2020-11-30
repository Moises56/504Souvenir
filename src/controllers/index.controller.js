const indexCtrl = {};
const Note = require('../models/Note'); //?importando el modelo de 


//  indexCtrl.renderIndex =  (req, res) => { 
//      res.render('index')
//  };

indexCtrl.renderAbout = (req, res) => { //*muestra handlebars
    res.render('about')
};

indexCtrl.renderCart = (req, res) => { //*muestra handlebars
    res.render('cart')
};

indexCtrl.renderOrder = (req, res) => { //*muestra handlebars
    res.render('orders')
};

indexCtrl.renderAdmin = (req, res) => { //*muestra handlebars
    res.render('admin')
};

indexCtrl.renderTegu = (req, res) => { //*muestra handlebars
    res.render('cityTegu')
};

indexCtrl.renderOmoa = (req, res) => { //*muestra handlebars
    res.render('cityOmoa')
};

indexCtrl.renderAmapala = (req, res) => { //*muestra handlebars
    res.render('cityAmapala')
};

indexCtrl.renderCeiba = (req, res) => { //*muestra handlebars
    res.render('cityCeiba')
};

indexCtrl.renderRoatan = (req, res) => { //*muestra handlebars
    res.render('cityRoatan')
};

indexCtrl.renderComayagua = (req, res) => { //*muestra handlebars
    res.render('cityComayagua')
};

indexCtrl.renderTela = (req, res) => { //*muestra handlebars
    res.render('cityTela')
};
indexCtrl.renderDanli = (req, res) => { //*muestra handlebars
    res.render('cityDanli')
};
indexCtrl.renderSanPedroSula = (req, res) => { //*muestra handlebars
    res.render('citySanPedroSula')
};
indexCtrl.renderPuertoCortes = (req, res) => { //*muestra handlebars
    res.render('cityPuertoCortes')
};

module.exports = indexCtrl;