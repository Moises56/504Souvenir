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

indexCtrl.renderCity = (req, res) => { //*muestra handlebars
    res.render('cityTegu')
};

module.exports = indexCtrl;