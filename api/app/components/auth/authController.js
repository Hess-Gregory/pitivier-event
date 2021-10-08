const jwt = require("jsonwebtoken");
const user = require("../user/userController");
const audit = require("../audit/AuditController");
const db = require('../index');
var env = process.env

module.exports = {
  /**²
   * Envoyez le token et les détails de l'utilisateur si l'adresse e-mail et le mot de passe sont valides.
   * @property req.body.email = L'email de l'utilisateur.
   * @property res.body.password = le mot de passe de l'utilisateur.
   * @returns token et l'utilisateur.
   */
   signin(req, res, next) {
    console.log("Sign-In: ", req.body.email);
      let 	email    	= req.body.email,
            password 	= req.body.password;
    if (email && password) 
    {
      user.findUserByEmail({'email': email})
          .then(foundUser => 
            {
              if (!foundUser) 
                {   
                  const bodyAudit = {}
                  bodyAudit.type = 'Echec connection user';
                  bodyAudit.data = 'User not find :'+email;
                  audit.storeAudit(bodyAudit)
                  const err = res.json({status: false, msg: 'Echec d\'authentication. Utilisateur non trouvé ou compte inactif.'});
                  return next(err);
                }
              if (foundUser.validPassword(password)) 
                {
                  const jwtUser = {};
                  jwtUser.id = foundUser.id;
                  jwtUser.username = foundUser.username;
                  jwtUser.email = foundUser.email;
                  jwtUser.role = foundUser.role;
                  jwtUser.secret = process.env.JWT_SECRET;

                    // Generate an access token
                  const accessToken = jwt.sign(jwtUser, process.env.JWT_SECRET,{expiresIn: process.env.JWT_EXPIRES_IN});
                  
                  const bodyAudit = {}
                  bodyAudit.type = 'Success connection user';
                  bodyAudit.data = 'User :'+email +', Role : '+ foundUser.role +', Token : '+accessToken;
                  audit.storeAudit(bodyAudit)

                  return res.json({status: true, accessToken, user: foundUser.toJSON()});               
                
                }
                else
                {                  
                const bodyAudit = {}
                bodyAudit.type = 'Echec connection user';
                bodyAudit.data = 'Password not correct : user : '+email+ ', Password not valid :'+password;
                audit.storeAudit(bodyAudit)
                  const err = res.json({status: false, token: null, msg: 'Echec d\'authentication. Mot de passe incorrect.'});
                  return next(err);
                }

            })      
    }
    else
    {
      
   	 res.json({status: false, msg: 'Invalid Username or email'});
    }

  }

}