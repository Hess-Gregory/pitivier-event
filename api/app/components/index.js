"use strict";

const {sequelize} = require('../config/dbConnect');

const   fs        = require("fs"),
        path      = require("path"),
        Sequelize = require("sequelize"),
        basename  = path.basename(__filename),
        chalk     = require('chalk'),
        db        = {};
        

fs
  .readdirSync(__dirname)
  .filter(function(file){
          return (
              file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
            );
        }
  )

  .forEach(function(file) 
      {
        const model = sequelize["import"](path.join(__dirname, file));
          db[model.name] = model;
      }
  );

  Object.keys(db).forEach(function(modelName) 
    {
      if (db[modelName].associate) 
      {
          db[modelName].associate(db);
      }
    }
  );

db.sequelize  = sequelize;
db.Sequelize  = Sequelize;

db.about                = require("./about/aboutModel")(sequelize, Sequelize);
db.audit                = require("./audit/AuditModel")(sequelize, Sequelize);
db.blog                 = require("./blog/blogModel")(sequelize, Sequelize);
db.blogdesc             = require("./blogdesc/blogdescModel")(sequelize, Sequelize);
db.carousel             = require("./carousel/carouselModel")(sequelize, Sequelize);
db.configuration        = require("./configuration/configurationModel")(sequelize, Sequelize);
db.contact              = require("./contact/contactModel")(sequelize, Sequelize);
db.gallery              = require("./gallery/model.gallery")(sequelize, Sequelize);
db.gallerydesc          = require("./gallerydesc/gallerydescModel")(sequelize, Sequelize);
db.header               = require("./header/headerModel")(sequelize, Sequelize);
db.inbox                = require("./inbox/inboxModel")(sequelize, Sequelize);
db.location                = require("./location/locationModel")(sequelize, Sequelize);
db.locationMaterielDesc    = require("./location/materiel/materielDescModel")(sequelize, Sequelize);
db.locationMaterielItem    = require("./location/materiel/materielItemModel")(sequelize, Sequelize);
db.locationSalleDesc       = require("./location/salle/salleDescModel")(sequelize, Sequelize);
db.locationSalleItem       = require("./location/salle/salleItemModel")(sequelize, Sequelize);
db.locationVehiculeDesc    = require("./location/vehicule/vehiculeDescModel")(sequelize, Sequelize);
db.locationVehiculeItem    = require("./location/vehicule/vehiculeItemModel")(sequelize, Sequelize);
db.media                = require("./gallery/model.media")(sequelize, Sequelize);
db.navbar               = require("./navbar/navbarModel")(sequelize, Sequelize);
db.navbarsub            = require("./navbarsub/navbarsubModel")(sequelize, Sequelize);
db.policy               = require("./policy/policyModel")(sequelize, Sequelize);
db.socmed               = require("./socmed/socmedModel")(sequelize, Sequelize);
db.team                 = require("./team/teamModel")(sequelize, Sequelize);
db.teamdesc             = require("./teamdesc/teamdescModel")(sequelize, Sequelize);
db.testimony            = require("./testimony/testimonyModel")(sequelize, Sequelize);
db.testimonydesc        = require("./testimonydesc/testimonydescModel")(sequelize, Sequelize);
db.terms                = require("./terms/termsModel")(sequelize, Sequelize);
db.service              = require("./service/serviceModel")(sequelize, Sequelize);
db.servicedesc          = require("./servicedesc/servicedescModel")(sequelize, Sequelize);
db.sponsor              = require("./sponsor/sponsorModel")(sequelize, Sequelize);
db.user                 = require("./user/userModel")(sequelize, Sequelize);

db.menudesc = require("./menus/descModel.js")(sequelize, Sequelize);
db.cards = require("./menus/cardModel.js")(sequelize, Sequelize);
db.menus = require("./menus/menuModel.js")(sequelize, Sequelize);

db.cards.hasMany(db.menus, { as: "menus" });
db.menus.belongsTo(db.cards, {
  foreignKey: "cardId",
  as: "card",
});

db.buffetdesc = require("./buffets/descModel.js")(sequelize, Sequelize);
db.cardBuffets = require("./buffets/cardbuffetModel.js")(sequelize, Sequelize);
db.buffets = require("./buffets/buffetModel.js")(sequelize, Sequelize);

db.cardBuffets.hasMany(db.buffets, { as: "buffets" });
db.buffets.belongsTo(db.cardBuffets, {
  foreignKey: "cardBuffetId",
  as: "cardBuffet",
});


db.gallery.belongsToMany(db.media, { as: 'Medias', through: 'gallerie_as_media', foreignKey: 'galleryId', otherKey: 'mediaId'});
db.media.belongsToMany(db.gallery, { as: 'Galleries', through: 'gallerie_as_media', foreignKey: 'mediaId', otherKey: 'galleryId'});



db.navbar.hasMany(db.navbarsub, { as: "navbarsub" });
db.navbarsub.belongsTo(db.navbar, {
  foreignKey: "navbarId",
  as: "navbar",
});
  


  db.ROLES = ["visiteur", "administrateur", "modérateur"];



sequelize.sync().then(function() {
  console.log(chalk.green('----- Tous les modèles ont été synchronisés avec succès'));
}, function(err) {
 console.log(chalk.red('- error \n', err));
});
// .then(() =>db.cards.findOrCreate({
//             where: {id: 1},
//             defaults: 
//                 {
                   
//                   title: 'Dinner',
//                   description: '',
//                   icon: 'icofont-pizza',
//                   visible: 1
//                 },
// }))

// .then(() =>db.cards.findOrCreate({
//             where: {id: 2},
//             defaults: 
//                 {
                   
//                   title: 'Drinks',
//                   description: '',
//                   icon: 'icofont-juice',
//                   visible: 1
//                 },
//   }))


// .then(() =>db.cards.findOrCreate({
//             where: {id: 3},
//             defaults: 
//                 {
                    
//                   title: 'Dessert',
//                   description: '',
//                   icon: 'icofont-cup-cake',
//                   visible: 1
//                 },
//   }))


// .then(() =>db.cards.findOrCreate({
//             where: {id: 4},
//             defaults: 
//                 {
                    
//                   title: 'z',
//                   description: '<p>zzz</p>',
//                   icon: 'zzz',
//                   visible: 1
//                 },
//   }))
  // .then(() => db.menus.findOrCreate({
  //                   where: {id: 1},
  //           defaults: 
  //               {
  //                   name: 'Cuillères froides',
  //                   text: '<p>-Tartare de saumon frais et pomme granny smith,</p><p>-Salade de magret fumé et germe de betterave,</p><p>-Mousse de crevette au basilic,</p><p>-Carpaccio de bœuf aux copeaux de parmesan,</p><p>-Marinade de scampi à l’huile balsamique,</p><p>-Dégustation de jambon,</p><p>-Carpaccio saumon.</p>',
                    
  //                   unite: 'pers',
  //                   image: 'menu_1631186524546.jpg',
  //                   alt : '',
  //                   visible: 1,
  //                   cardId : '2'
  //               },
  // }))
  // .then(jane => {
  //   console.log(jane.toJSON());
  // });


// var create_cards1 = 

// db.cards.findOrCreate(
// {
//             where: {id: 1},
//             defaults: 
//                 {
                   
//                   title: 'Dinner',
//                   description: '',
//                   icon: 'icofont-pizza',
//                   visible: 1
//                 },
// })
// var create_cards2 = 
// db.cards.findOrCreate(
// {
//             where: {id: 2},
//             defaults: 
//                 {
                   
//                   title: 'Drinks',
//                   description: '',
//                   icon: 'icofont-juice',
//                   visible: 1
//                 },
//  })
// var create_cards3 = 
// db.cards.findOrCreate(
// {
//             where: {id: 3},
//             defaults: 
//                 {
                    
//                   title: 'Dessert',
//                   description: '',
//                   icon: 'icofont-cup-cake',
//                   visible: 1
//                 },
// })

// var create_menu = 
// db.menus.findOrCreate(
//   {
//             where: {id: 1},
//             defaults: 
//                 {
//                     name: 'Cuillères froides',
//                     text: '<p>-Tartare de saumon frais et pomme granny smith,</p><p>-Salade de magret fumé et germe de betterave,</p><p>-Mousse de crevette au basilic,</p><p>-Carpaccio de bœuf aux copeaux de parmesan,</p><p>-Marinade de scampi à l’huile balsamique,</p><p>-Dégustation de jambon,</p><p>-Carpaccio saumon.</p>',
                    
//                     unite: 'pers',
//                     image: 'menu_1631186524546.jpg',
//                     alt : '',
//                     visible: 1,
//                     cardId : '2'
//                 },
//   }
// )

// Promise
//     .all([create_cards1,create_cards2, create_cards3, create_menu ])
//     .then(responses => {
//         console.log(chalk.green('**********COMPLETE RESULTS****************'));
//         console.log(chalk.blueBright(responses[0])); // user profile
//         console.log(chalk.blueBright(responses[1])); // all reports
//         console.log(chalk.blueBright(responses[2])); // user profile
//         console.log(chalk.blueBright(responses[3])); // all reports
//     })
//     .catch(err => {
//         console.log(chalk.red('**********ERROR RESULT****************'));
//         console.log(chalk.red(err));        console.log(chalk.blueBright(responses[0])); // user profile
//     });
module.exports = db;

