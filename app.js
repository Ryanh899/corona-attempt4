// app 
const express = require('express');
const app = express(); 
const fs = require('fs'); 
const path = require('path'); 
const cors = require('cors'); 
const compression = require('compression'); 
const bodyParser = require('body-parser');
const morgan = require('morgan'); 

// db
const mongoose = require('mongoose');
// port 
const PORT = process.env.PORT || 3000;

// initialize mongoose 
mongoose.connect('mongodb://ec2-3-92-202-27.compute-1.amazonaws.com', { user: 'admin', pass: 'Oct105991', useNewUrlParser: true, useUnifiedTopology: true } ); 
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongoose connection error:'));
db.once('open', function() {
    console.log('Mongoose connected')
});

app.set('views', path.join(__dirname, 'views')); 

//initialize middleware 
app.use(morgan('combined')); 
app.use(cors());
app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('views')); 



// / listen on the designated port found in the configuration
app.listen(PORT, err => {
        if (err) {
                process.exit(1);
        }
	
// loop through all routes and dynamically require them – passing api
        fs.readdirSync(path.join(__dirname, 'routes')).map(file => {
                require('./routes/' + file)(app);
        });

        console.log(`app listing on ${PORT}`); 
	
});

module.exports = app

  