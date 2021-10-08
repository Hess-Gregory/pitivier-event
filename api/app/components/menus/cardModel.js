/* jshint indent: 2 */
"use strict";

module.exports = (sequelize, DataTypes) => {
    const Card = sequelize.define("card", {
      title: {
        type: DataTypes.STRING
      },
      description: {
        type: DataTypes.TEXT
      },
      icon: {
        type: DataTypes.STRING
      },
      visible: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      }
    },
    {timestamps: false}
    );
//   Card.sync().then(() => {
//     Card.findOrCreate({
//               where: {id: 1},
//               defaults: 
//                   {
//                     title: '',
//                     description: '',
//                     icon: '',
//                     visible: ''
//                        (1, 'Zakouskis', '<p><br></p><p><em>Exemple de prix pour une réception (all-in)</em></p><p><em>&nbsp;</em></p><p><em>Forfait pour une réception classique pour une durée de une heure&nbsp;incluant :</em></p><p><em>&nbsp;</em></p><p><em>Méthode traditionnelle brut</em></p><p><em>&nbsp;</em></p><p><em>Les jus et eaux minérales</em></p><p><em>2 zakouskis froids sur porcelaine +2 zakouskis chauds</em></p><p><em>Personnel de salle et de cuisine</em></p><p><em>Matériel pour la réception (tables non incluses)</em></p><p><em>Forfait sur base de 50 personnes : 13,75 € htva</em></p><p><em>Forfait sur base de 100 personnes : 11,50 € htva</em></p><p><em>Les zakouskis supplémentaires peuvent vous êtes fournis au prix de 1,00€ /pièce</em></p>', 'icofont-fruits', 1),
//                   },
//               }
//           )
//   });

 


// Card.sync().then(() => {
//   Card.findOrCreate({
//             where: {id: 2},
//             defaults: 
//                 {
                    
//                   title: 'Lunch',
//                   description: '',
//                   icon: 'icofont-lunch',
//                   visible: 1
//                 },
//             }
//         )
// });

// Card.sync().then(() => {
//   Card.findOrCreate({
//             where: {id: 3},
//             defaults: 
//                 {
                   
//                   title: 'Dinner',
//                   description: '',
//                   icon: 'icofont-pizza',
//                   visible: 1
//                 },
//             }
//         )
// });

// Card.sync().then(() => {
//   Card.findOrCreate({
//             where: {id: 4},
//             defaults: 
//                 {
                   
//                   title: 'Drinks',
//                   description: '',
//                   icon: 'icofont-juice',
//                   visible: 1
//                 },
//             }
//         )
// });


// Card.sync().then(() => {
//   Card.findOrCreate({
//             where: {id: 5},
//             defaults: 
//                 {
                    
//                   title: 'Dessert',
//                   description: '',
//                   icon: 'icofont-cup-cake',
//                   visible: 1
//                 },
//             }
//         )
// });


// Card.sync().then(() => {
//   Card.findOrCreate({
//             where: {id: 6},
//             defaults: 
//                 {
                    
//                   title: 'z',
//                   description: '<p>zzz</p>',
//                   icon: 'zzz',
//                   visible: 1
//                 },
//             }
//         )
// });

const chalk = require('chalk')
  
//Card.sync({ force: false });

console.log(
      chalk.yellowBright("La table du modèle"),
      chalk.cyan("'Card'"), 
      chalk.yellowBright("vient d'être (re)créée !")
);
  
    return Card;
  };
  
  