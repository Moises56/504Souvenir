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

<<<<<<< HEAD
indexCtrl.renderRoatan = (req, res) => { //*muestra handlebars
    res.render('cityRoatan')
};

indexCtrl.renderComayagua = (req, res) => { //*muestra handlebars
    res.render('cityComayagua')
};

indexCtrl.renderTela = (req, res) => { //*muestra handlebars
    res.render('cityTela')
=======
indexCtrl.renderAmapala = (req, res) => { //*muestra handlebars
    res.render('cityAmapala')
};

indexCtrl.renderCeiba = (req, res) => { //*muestra handlebars
    res.render('cityCeiba')
>>>>>>> 7b035e4f3715b34245830a567215255d96c35790
};
module.exports = indexCtrl;