'use strict';

module.exports = function (sequelize, Sequelize) {
	const Role = sequelize.define('roles', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true
		},
		name: {
			type: Sequelize.STRING
		},
		createdAt: {
			type: 'TIMESTAMP',
			defaultValue: DataTypes.literal('CURRENT_TIMESTAMP'),
			allowNull: false
		},
		updatedAt: {
			type: 'TIMESTAMP',
			defaultValue: DataTypes.literal('CURRENT_TIMESTAMP'),
			allowNull: false
		}
	});

	Role.create({
		id: 1,
		name: "USER"
	});

	Role.create({
		id: 2,
		name: "MODERATOR"
	});

	Role.create({
		id: 3,
		name: "ADMINISTRATOR"
	});
     
const chalk = require('chalk')
  
Role.sync({ force: false });

console.log(
      chalk.yellowBright("La table du modèle"),
      chalk.cyan("'Role'"), 
      chalk.yellowBright("vient d'être (re)créée !")
);     
	return Role;
};