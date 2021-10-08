/* jshint indent: 2 */
"use strict";


module.exports = function(sequelize, DataTypes) {
  const contact  = sequelize.define
  ("contact",
    {
      id: 
        {
          type: DataTypes.INTEGER,
          primaryKey: true
        },
      title1:
        {
          type: DataTypes.STRING,
          allowNull: false,
          validate:{ notNull: {msg: 'Quel est le titre de la page "A propos" ?'}}
        },
      subtitle1:
        {
          type: DataTypes.STRING,
          allowNull: false,
          validate:{ notNull: {msg: 'Quel est le sous titre de la page "A propos" ?'}}
        },
      title2:
        {
          type: DataTypes.STRING,
          allowNull: false,
          validate:{ notNull: {msg: 'Quel est le titre de la page "Contact" ?'}}
        },
      subtitle2:
        {
          type: DataTypes.STRING,
          allowNull: false,
          validate:{ notNull: {msg: 'Quel est le sous titre de la page "Contact" ?'}}
        },
      intro:
        {
          type: DataTypes.STRING,
          allowNull: false,
          validate:{ notNull: {msg: 'Quel est le texte d\'intro de la page "A propos" ?'}}
        },
      name: 
        {
          type: DataTypes.STRING,
          unique: true,
          lowercase: true,
          allowNull: false,
          validate:{notNull: {msg: 'Quel est le nom de votre société ?'}}
        },
      mail1: 
        {
          type: DataTypes.STRING,
          allowNull: false,
          validate:{ notNull: {msg: 'Quelle est l\'adresse mail ?'}}
        },
      mail2: 
        {
          type: DataTypes.STRING
        },  
      address: 
        {
          type: DataTypes.STRING,
          allowNull: false,
          validate:{ notNull: {msg: 'Quelle est l\'adresse ?'}}
        },
      phone1: 
        {
          type: DataTypes.STRING,
          unique: true,
          lowercase: true,
          allowNull: false,
          validate:{notNull: {msg: 'Quel est le numéro de télèphone ?'}}
        },
      phone2: 
        {
          type: DataTypes.STRING
        },  
      hourlyday: 
        {
          type: DataTypes.STRING
        },
      hourlytime: 
        {
          type: DataTypes.STRING
        },
      hourlytext: 
        {
          type: DataTypes.STRING
        },
      videotitle: 
        {
          type: DataTypes.STRING
        },
      videourl: 
        {
          type: DataTypes.STRING
        },
      logo: 
        {
          type: DataTypes.STRING
        },
      logo2: 
        {
          type: DataTypes.STRING
        },
      logo3: 
        {
          type: DataTypes.STRING
        },
      favicon: 
        {
          type: DataTypes.STRING
        },      
        addressTitle: 
          {
            type: DataTypes.STRING
          },
        mailTitle: 
          {
            type: DataTypes.STRING
          },
        phoneTitle: 
          {
            type: DataTypes.STRING
          },  
        hourlyTitle: 
          {
            type: DataTypes.STRING
          },
        nameForm: 
        {
          type: DataTypes.STRING
        },
        mailForm: 
        {
          type: DataTypes.STRING
        },
        sujetForm: 
        {
          type: DataTypes.STRING
        },
        messageForm: 
        {
          type: DataTypes.STRING
        },
        boutonForm: 
        {
          type: DataTypes.STRING
        },
        boutonnavbar: 
        {
          type: DataTypes.STRING
        },


    },
    {tableName:"contact", timestamps: false}
  );
    contact.sync().then(() => {
      contact.findOrCreate({
                where: {id: 1},
                defaults: 
                    {
                      title1         : "Make Call For Reservations",
                      subtitle1      : "Contact Info & Opening Hours",
                      title2         : "Vegan Resturant",
                      subtitle2      : "Contact & Info",
                      intro         : "We receive a lot of questions about Vegan Food & Restaurants and although we do our best, we can't always respond to them all.",
                      name          : "Store at USA",
                      mail1          : "demo@exmaple.com",
                      mail2          : "info@example.com",
                      phone1         : "+080 707 555-321",
                      phone2         : "0 773 321 7772",
                      address       : "526 Melrose Street, 11976 New York",
                      hourlyday     : "Monday to Saturday",
                      hourlytime    : "8:00 AM - 10:00 PM",
                      hourlytext    : "Closed Sundays",
                      videotitle    : "Intro Video",
                      videourl      : "https://www.youtube.com/watch?v=xg7iNd0qkDM",
                      logo          : "logo.png",
                      logo2          : "logo.png",
                      logo3          : "logo.png",
                      favicon        : "favicon.png",         
                      addressTitle    : "Location:",
                      mailTitle       : "Email:",
                      phoneTitle      : "Phone:",
                      hourlyTitle     : "Opening Hours:",
                      nameForm        : "Your Full Name",
                      mailForm        : "Your mail",
                      sujetForm       : "Your Subject",
                      messageForm     : "Your message",
                      boutonForm      : "Send Message",
                      boutonnavbar      : "Call To Reservation"
                    },
									
            })

    });

const chalk = require('chalk')
  
contact.sync({ force: false });

console.log(
      chalk.yellowBright("La table du modèle"),
      chalk.cyan("'contact'"), 
      chalk.yellowBright("vient d'être (re)créée !")
);
return contact;

};