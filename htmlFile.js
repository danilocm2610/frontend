var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic("/Users/mac/git/frontend/")).listen(3000, function(){
    console.log('El servidor está corriendo en el puerto 3000');
});
