const exp = require('constants');
const express = require('express');
const res = require('express/lib/response');
const { dirname } = require('path');
const app = express();     // app es el serrvidor
const path = require('path');      // para ver si estas en linux o wind y te paone la barra correcta /
//const indexRoute = require('./routes/index');



// Settings
app.set('port',3000);
//app.set('port',3000);
app.set('view engine','ejs');                // motor de plantillas... en vez de html uso los ejs que se convierten en html
app.engine('html',require('ejs').renderFile);
app.set('views',path.join(__dirname,'views'));


//middlewares

//routers

app.use(require('./routes/index'));



// statinc files

app.use(express.static(path.join(__dirname,'public')))  // cualquer archivo dentro de public va a poder ser accedido desde el navegador. 

//listening
const port = process.env.PORT || 5000     //  env.port es para cuando lo subimos a Heroku, que nos asigna un puerto.. y el 3000 es para localhost|
//console.log(port);
//app.listen(app.get(port));
app.listen(app.get(port),()=>{
    console.log('server on port',port);
});
git 