/* jshint indent: 2 */
"use strict";


module.exports = function(sequelize, DataTypes) {
  const configuration  = sequelize.define
  ( "configuration",
    { 
      title: 
        {
          type: DataTypes.STRING,
          defaultValue: "My website.com"
        },
      slogan: 
        {
          type: DataTypes.STRING,
          defaultValue: "Welcome in my website"
        },
        domain: 
          {
            type: DataTypes.STRING,
            defaultValue: "mywebsite.com"
          },
      desc: 
        {
          type: DataTypes.STRING,
          defaultValue: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "

        },
      keyword: 
        {
          type: DataTypes.STRING,
          defaultValue: "key1, key2, key3, key3"
        },
      image: 
        {
          type: DataTypes.STRING
        },
      logo1: 
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
      gps_lat: 
        {
          type: DataTypes.STRING,
          defaultValue: "48.858370",
          validate: {
            min: -90,
            max: 90
          }
        },
      gps_lng: 
        {
          type: DataTypes.STRING,
          defaultValue: "2.294481",
          validate: {
            min: -180,
            max: 180
          }
        },
      gps_zoom: 
        {
          type: DataTypes.INTEGER,
          defaultValue: 11
        },
      gps_text: 
        {
          type: DataTypes.STRING,
          defaultValue: "Eiffel Tower"
        },
      googlemap_API_KEY: 
        {
          type: DataTypes.STRING,
          defaultValue: "XXXXXXXXXXXXXXXXXXXXX"
        },
      google_gtag_id: 
        {
          type: DataTypes.STRING,
          defaultValue: "G-XXXXXXXXXX"
        },
      google_trackingID: 
        {
          type: DataTypes.STRING,
          defaultValue: "UA_12345678_9"
        },
      google_captcha_sitekey: 
        {
          type: DataTypes.STRING,
          defaultValue: "XXXXXXXXXXXXXXXXXXXXX"
        },
      google_captcha_secretkey: 
        {
          type: DataTypes.STRING,
          defaultValue: "XXXXXXXXXXXXXXXXXXXXX"
        },
      mail_host: 
        {
          type: DataTypes.STRING,
          defaultValue: "mail.yourwebsite.com"
        },
      mail_imap: 
        {
          type: DataTypes.INTEGER,
          defaultValue: 993
        },
      mail_pop3: 
        {
          type: DataTypes.INTEGER,
          defaultValue: 995
        },
      mail_smtp: 
        {
          type: DataTypes.INTEGER,
          defaultValue: 465
        },
      mail_ssl: 
        {
          type: DataTypes.BOOLEAN,
          defaultValue: true
        },
      mail_username: 
        {
          type: DataTypes.STRING,
          defaultValue: "contact@yourwebsite.com"
        },
      mail_password: 
        {
          type: DataTypes.STRING,
          defaultValue: "xxxxx"
        },
      mail_reply: 
        {
          type: DataTypes.STRING,
          defaultValue: "yourusername@yourprovider.com"
        },
      mail_displayname: 
        {
          type: DataTypes.STRING,
          defaultValue: "Info monsite.com"
        },
      facebook_appID: 
        {
          type: DataTypes.INTEGER,
          defaultValue: 12345678
        },
      facebook_pageID: 
        {
          type: DataTypes.INTEGER,
          defaultValue: 12345678
        },
      facebook_appSecret: 
        {
          type: DataTypes.STRING,
          defaultValue: "XXXXXXXXXXXXXXXXXXX"
        }
      },
      {tableName:"configuration", timestamps: false}
  );

configuration.sync().then(() => {
  configuration.findOrCreate({
            where: {id: 1},
            defaults: 
                {
                  
                  title : "Vegan",
                  desc  : "Web Design by FULLHESTACK",
                  image : "configuration_1578293616478.jpg",
                  logo1 : "configuration_1629581341151.png",
                  logo2 : "configuration_1629581341152.png",
                  logo3 : "configuration_1629581341156.png",
                  favicon:"configuration_1629581341148.png"
                  
                },
        })

  });

const chalk = require('chalk')
  
configuration.sync({ force: false });

console.log(
      chalk.yellowBright("La table du modèle"),
      chalk.cyan("'configuration'"), 
      chalk.yellowBright("vient d'être (re)créée !")
);
return configuration;

};