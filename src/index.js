require('dotenv').config(); //*asigna a la variables de entorno

const app = require('./server');
require('./database');

app.listen(app.get('port'), () =>{ //?Iniciando Servidor
    console.log('Servidor en el puerto:', app.get('port'))
})