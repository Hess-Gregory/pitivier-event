var
express     = require('express'),
app         = express(),
bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// catch 400

app.use(
    (err, req, res, next) => 
        {
            console.log(err.stack);
            res.status(400).send(`Erreur: ${res.originUrl} non trouvé`);
            next();
        }
);

// catch 500

app.use(
    (err, req, res, next) => 
        {
            console.log(err.stack)
            res.status(500).send(`Erreur: ${err}`);
            next();
        }
);

module.exports = app