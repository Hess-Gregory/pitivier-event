const { all, find, create, findCondition, findBy, update, destroy, isExist }  = require('../repository/queryRepository');
const	db          = require('../index'),
        user        = 'user',
        Sequelize   = require('sequelize'),
        Op          = Sequelize.Op,
        bcrypt      = require("bcryptjs")


module.exports = {

    findUserByEmail(req, res) {
        return findCondition(db.user, req, res)
    },

    findUser(req, res) {
        return find(db.user, req.params.userId, res);
    },

    getUsers(req, res) {
        return all(db.user, res);
    },

    storeUser(req, res) {

        const thisUser = {};
        thisUser.username = req.body.username;
        thisUser.email    = req.body.email;
        thisUser.role    = req.body.role;
        thisUser.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8), null);

        return create(db.user, thisUser, res);
    },

    updateUser(req, res) {

            const thisUser = {};
            thisUser.username = req.body.username;
            thisUser.email    = req.body.email;
            thisUser.role    = req.body.role;

        if(req.body.password && req.body.password !== '')
            {
                thisUser.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8), null);
            } 

        return update(db.user, req.params.userId, thisUser, res); 

    },

    deleteUser(req, res) {
        return destroy(db.user, req.params.userId, res, 'user');
    },

    existUser(req, res) {
            if (req.params.userId)
            {
           
                Promise
                .all([
                    req.body.username && db.user.findAndCountAll({
                       where: 
                           {
                               username: req.body.username, 
                               [Op.and]: 
                               {id: {[Op.ne]: req.params.userId}}
                           }
                   }),

                   req.body.email && db.user.findAndCountAll({
                       where: 
                           {
                               email: req.body.email, 
                               [Op.and]: 
                               {id: {[Op.ne]: req.params.userId}}
                           }
                   })   

		        ])    
                .then( ([ foundUser, foundEmail ]) => {

                            const   Userfound   = foundUser.count,
                                    Emailfound  = foundEmail.count 

                    if(Userfound > 0) {
                        res.json({exist: true, msg: 'Ce nom d\'utilisateur existe déjà'})

                    } 
                    else if(Emailfound > 0) {
                        res.json({exist: true, msg: 'Cette adresse email existe déjà'})	
                    } 
                    else {
                        return res.json({exist: false})	
                    }
                   
                })
                .catch(err => {
                       console.log(err)
                       res.json({exist: true, msg: 'Échec de la vérification de l\'existence'})
                   });
                
            }
            else{
           
                Promise.all([
                    req.body.username && db.user.findAndCountAll({
                        where: 
                            {
                                username: req.body.username
                            }
                    }),
                    req.body.email && db.user.findAndCountAll({
                        where: 
                            {
                                email: req.body.email
                            }
                    })           
                    ])     
                .then( ([ foundUser, foundEmail ]) => {
                        const   Userfound   = foundUser.count,
                                Emailfound  = foundEmail.count 

                    if(Userfound > 0) {
                        res.json({exist: true, msg: 'Ce nom d\'utilisateur existe déjà'})

                    } 
                    else if(Emailfound > 0) {
                        res.json({exist: true, msg: 'Cette adresse email existe déjà'})

                    } 
                    else {
                        return res.json({exist: false})	
                    }
                    
                })
                .catch(err => {
                    console.log(err)
                    res.json({exist: true, msg: 'Échec de la vérification de l\'existence'})
                });
            }     
       }      
}







