var 
express		= require('express'),
path		= require('path'),
app  		= express(),
router		= express.Router(),
join   		= require('path').join,
cors   		= require('cors');

const bodyParser = require('body-parser');
	  
// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
	app.use(cors())
	app.use(require('../components/auth/authRouter'))
	app.use(require('../components/audit/auditRouter'))
	app.use(require('../components/about/aboutRouter'))
	app.use(require('../components/blog/blogRouter'))
	app.use(require('../components/blogdesc/blogdescRouter'))
	app.use(require('../components/carousel/carouselRouter'))
	app.use(require('../components/contact/contactRouter'))
	app.use(require('../components/configuration/configurationRouter')) 
	app.use(require('../components/gallery/router.gallery'))
	app.use(require('../components/gallerydesc/gallerydescRouter'))
	app.use(require('../components/header/headerRouter'))
	app.use(require('../components/inbox/inboxRouter'))
	app.use(require('../components/location/locationRouter'))
	app.use(require('../components/navbar/navbarRouter')) 
	app.use(require('../components/navbarsub/navbarsubRouter')) 
	app.use(require('../components/policy/policyRouter'))
	app.use(require('../components/service/serviceRouter'))
	app.use(require('../components/sponsor/sponsorRouter'))
	app.use(require('../components/socmed/socmedRouter'))
	app.use(require('../components/servicedesc/servicedescRouter'))
	app.use(require('../components/team/teamRouter'))
	app.use(require('../components/terms/termsRouter'))
	app.use(require('../components/teamdesc/teamdescRouter'))
	app.use(require('../components/testimony/testimonyRouter'))
	app.use(require('../components/testimonydesc/testimonydescRouter'))
	app.use(require('../components/user/userRouter'))
	app.use(require('../components/menus/cardmenuRouter'))
	app.use(require('../components/buffets/cardbuffetRouter'))


// fetching image in uploaded file folder

app.get('/fetchImage/:file(*)', (req, res) => 
	{
		let file = req.params.file;
		let fileLocation = path.join(__dirname, '../../', 'uploaded_files/', file);
		//res.send({image: fileLocation});
		res.sendFile(`${fileLocation}`)
	}
)

module.exports = app 