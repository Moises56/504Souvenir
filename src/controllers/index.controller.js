const indexCtrl = {};

indexCtrl.renderIndex = (req, res) => { //*muestra handlebars
    res.render('index')
};

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
indexCtrl.renderSanPedroSula = (req, res) => { //*muestra handlebars
    res.render('citySanPedroSula')
};
indexCtrl.renderPuertoCortes = (req, res) => { //*muestra handlebars
    res.render('cityPuertoCortes')
};
indexCtrl.renderDanli = (req, res) => { //*muestra handlebars
    res.render('cityDanli')
};
module.exports = indexCtrl;