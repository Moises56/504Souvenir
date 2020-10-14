if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config(); //*asigna a la variables de entorno
    //console.log(process.env.NODE_ENV)

}

const app = require('./server');
require('./database');

app.listen(app.get('port'), () =>{ //?Iniciando Servidor
    console.log('Servidor en el puerto:', app.get('port'))
})