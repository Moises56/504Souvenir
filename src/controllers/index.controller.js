const indexCtrl = {};

indexCtrl.renderIndex = (req, res) => { //*muestra handlebars
    res.render('index')
};

indexCtrl.renderAbout = (req, res) => { //*muestra handlebars
    res.render('about')
};

module.exports = indexCtrl;