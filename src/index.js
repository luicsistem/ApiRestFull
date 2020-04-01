const express = require('express');
const app = express();

//settings
app.set('port', process.env.PORT ||  3000 )

//Middlewares ( son funciones antes que )
app.use(express.json());

// routes
app.use(require('./routes/employes'));


// starting the server
app.listen( app.get('port'), () => {
    console.log('server on port ', app.get('port'));
    
} )