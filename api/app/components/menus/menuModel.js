"use strict";

module.exports = (sequelize, DataTypes) => {
    const Menu = sequelize.define("menu", {
      name: {
        type: DataTypes.STRING(60)
      },
      text: {
        type: DataTypes.STRING(2000)
      },
      price: {
        type: DataTypes.DECIMAL(10,2),
        defaultValue: null
      },
      unite: {
        type: DataTypes.STRING(70)
      },
      image: {
        type: DataTypes.STRING
      },
      alt: {
        type: DataTypes.STRING
      },
      visible: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      }
    },
    { timestamps: false}
    
    );
// Menu.sync().then(() => {
//   Menu.findOrCreate({
//             where: {id: 1},
//             defaults: 
//                 {
//                   name: 'Zakouskis froids',
//                   text: '<p>-Toast au saumon fumé</p><p>-Toast au jambon de parme</p><p>-Canapé au poulet curry</p><p>-Toast au fromage blanc et fines herbes</p><p>-Toast aux crevettes grises</p><p>-Toast aux bananes et anchois.</p>',
//                   unite: '/pers',
//                   image: '',
//                   alt: '',
//                   visible: 0,
//                   cardId : '2'
//                 },
//             }
//         )
// }); 

 
//  Menu.sync().then(() => {
//     Menu.findOrCreate({
//               where: {id: 2},
//               defaults: 
//                   {
//                     name: 'Zakouskis chauds ',
//                     text: '<p>-Roulade de lard aux pruneaux,</p><p>-Roulade de lard aux mini saucisses,</p><p>-Mini bouchée aux escargots,</p><p>-Mini pizza,</p><p>-Mini Croque Monsieur,</p><p>-Mini quiche,</p><p>-Feuilleté aux fromages</p>',
                    
//                     unite: 'pers',
//                     image: 'menu_1631179050497.jpg',
//                     alt : '',
//                     visible: 1,
//                     cardId : '2'
//                   },
//               }
//           )
//   }); 
 
//   Menu.sync().then(() => {
//     Menu.findOrCreate({
//               where: {id: 3},
//               defaults: 
//                   {
//                     name: 'Dégustations froides',
//                     text: '<p>-Feuille de chicon à la salade de thon et ciboulette,</p><p>-Mini concombre farci a la mousse de crabe,</p><p>-Brochette de tomates-mozzarella,</p><p>-Jambon fumé aux olives,</p><p>-Fromage des abbayes aux raisins,</p><p>-Ballottine de saumon à la riccota,</p><p>-Mousse d’avocat givrée.</p>',
                    
//                     unite: 'pers',
//                     image: 'menu_1631179763824.jpg',
//                     alt : '',
//                     visible: 0,
//                     cardId : '2'
//                   },
//               }
//           )
//   }); 
 
//   Menu.sync().then(() => {
//     Menu.findOrCreate({
//               where: {id: 4},
//               defaults: 
//                   {
//                     name: 'Dégustations chaudes',
//                     text: '<p>-Aile de poulet marinée,</p><p>-Scampi frit à la tempura indienne,</p><p>-Mini loempia,</p><p>-Assortiment de mini croquettes,</p><p>-Mini brochette de poissons.</p>',
                    
//                     unite: 'pers',
//                     image: 'menu_1631186512940.jpg',
//                     alt : '',
//                     visible: 1,
//                     cardId : '2'
//                   },
//               }
//           )
//   }); 
 
//   Menu.sync().then(() => {
//     Menu.findOrCreate({
//               where: {id: 5},
//               defaults: 
//                   {
//                     name: 'Cuillères froides',
//                     text: '<p>-Tartare de saumon frais et pomme granny smith,</p><p>-Salade de magret fumé et germe de betterave,</p><p>-Mousse de crevette au basilic,</p><p>-Carpaccio de bœuf aux copeaux de parmesan,</p><p>-Marinade de scampi à l’huile balsamique,</p><p>-Dégustation de jambon,</p><p>-Carpaccio saumon.</p>',
                    
//                     unite: 'pers',
//                     image: 'menu_1631186524546.jpg',
//                     alt : '',
//                     visible: 1,
//                     cardId : '2'
//                   },
//               }
//           )
//   }); 

const chalk = require('chalk')
  
//Menu.sync({ force: false });

console.log(
      chalk.yellowBright("La table du modèle"),
      chalk.cyan("'Menu'"), 
      chalk.yellowBright("vient d'être (re)créée !")
);
    return Menu;
  };