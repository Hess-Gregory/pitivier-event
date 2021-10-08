signin(req, res, next) 
{
    console.log("1/5 Sign-In: ", req.body.email);
    let 	email    	= req.body.email,
          password 	= req.body.password;

  if (email && password) 
  {
    user.findUserByEmail({'email': email})
    , (err, foundUser) => 
    {
      if (err) throw err;
            if (!foundUser) 
              {
                res.json({status: false, msg: 'Echec d\'authentication. Utilisateur non trouvé ou compte inactif.'});
              }
            else
              {
                if(foundUser.validPassword(password))
                  {
                  const jwtUser = {};
                  jwtUser.id = foundUser.id;
                  jwtUser.username = foundUser.username;
                  jwtUser.email = foundUser.email;
                  jwtUser.role = foundUser.role;
                    // Generate an access token
                  const accessToken = jwt.sign(foundUser.toJSON(), env.JWT_SECRET,{expiresIn: env.JWT_EXPIRES_IN});                  
                  }
                else
                  {
                    res.json({status: false, msg: 'Echec d\'authentication. Mot de passe incorrect.'});
                  }
              }


    }
  } 
  else 
  { 
      res.json({status: false, msg: 'Username ou email invalable'});
  }

}