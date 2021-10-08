const jwt = require('jsonwebtoken');
const config = require('./jwtConfig'); 
const jwt_decode = require("jwt-decode");
const user = require("../components/user/userController");
const db = require('../index');

module.exports = {


hasRoleAdmin(role) {
    return (req, res, next) => {
      const token = req.header('x-access-token') || '';
    const decoded = jwt.decode(token, { complete: true });
	let foundRole ;
	foundRole = false
	if(decoded.payload.role === role)
	 {foundRole = true }else {foundRole = false}
    return foundRole === true ? next()   : 
	res.status(403).send({ message: 'Access Denied' });
    }
  }
}