var 
dotenv  = require('dotenv').config(),
config  = require('../config'),
app     = require('../index'),
bole    = require('bole'), // système de journalisation
log     = bole('server'),
modeApi = process.env.NODE_ENV

bole.output({level: 'debug', stream: process.stdout})
log.info('Serveur -> démarrage du processus')

// Notez qu'il n'y a pas beaucoup de logique dans ce fichier.
// Le serveur doit être principalement du code "colle" pour configurer les choses et

// puis commencer à écouter

app.listen(config.express.port, config.express.ip, 
  function (error) {
    if (error) 
      {
        console.log(chalk.red("Impossible d'écouter les connexions", error))
        process.exit(10)
      }
      console.log(chalk.green("L'API tourne en mode : "), chalk.blue(modeApi))
      console.log(  chalk.green('La magie se passe sur le port :'),  chalk.blue(config.express.port) )
      console.log(chalk.green('Le serveur est disponible à l\'adresse suivante :'), chalk.blue("http://" +  config.express.ip + ':' + config.express.port))
      console.log(chalk.blueBright("Nous sommes maintenant tous condamnés!"))
  }
)