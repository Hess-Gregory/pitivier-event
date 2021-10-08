import React from 'react';

const About           = React.lazy(() => import('pages/About/About')),
      Blog            = React.lazy(() => import('pages/Blog/Blog')),
      Blogdesc        = React.lazy(() => import('pages/Blogdesc/Blogdesc')),
      Carousel        = React.lazy(() => import('pages/Carousel/Carousel')),
      Audit           = React.lazy(() => import('pages/Audit/Audit')),
      // Cartes des menus
      Cards        = React.lazy(() => import('pages/Menu/Cards/Card')),
      Menu         = React.lazy(() => import('pages/Menu/Menus/Menu')),
      Menudesc        = React.lazy(() => import('pages/Menu/Desc/Desc')),
      
      // Cartes des buffets
      Cardbuffets        = React.lazy(() => import('pages/Buffet/CardBuffets/CardBuffet')),
      Buffet         = React.lazy(() => import('pages/Buffet/Buffets/Buffet')),
      Buffetdesc        = React.lazy(() => import('pages/Buffet/Desc/Desc')),
       
      // Galleries des medias
      Gallery        = React.lazy(() => import('pages/Picture/Gallery/Gallery')),
      Medias         = React.lazy(() => import('pages/Picture/Medias/Medias')),
      Gallerydesc        = React.lazy(() => import('pages/Picture/Desc/Desc')),
                     
      Contact         = React.lazy(() => import('pages/Contact/Contact')),
      Config          = React.lazy(() => import('pages/Configuration/Configuration')),
      Dashboard       = React.lazy(() => import('pages/Dashboard/Dashboard')),
      Header          = React.lazy(() => import('pages/Header/Header')),
      InternalServer  = React.lazy(() => import('pages/Page500/Page500')),
      Loc         = React.lazy(() => import('pages/Location/index')),
      Location         = React.lazy(() => import('pages/Location/Location')),
      DescSalle         = React.lazy(() => import('pages/Location/_DescSalle')),
      DescMateriel         = React.lazy(() => import('pages/Location/_DescMateriel')),
      DescVehicule         = React.lazy(() => import('pages/Location/_DescVehicule')),
      Salle         = React.lazy(() => import('pages/Location/Salle')),
      Message         = React.lazy(() => import('pages/Message/Message')),
      Policy          = React.lazy(() => import('pages/Policy/Policy')),
      NotFound        = React.lazy(() => import('pages/Page404/Page404')),
      Service         = React.lazy(() => import('pages/Service/Service')),
      Sponsor         = React.lazy(() => import('pages/Sponsor/Sponsor')),
      Servicedesc     = React.lazy(() => import('pages/Servicedesc/Servicedesc')),
      Team            = React.lazy(() => import('pages/Team/Team')),
      Teamdesc        = React.lazy(() => import('pages/Teamdesc/Teamdesc')),
      Terms            = React.lazy(() => import('pages/Terms/Terms')),
      Testimony       = React.lazy(() => import('pages/Testimony/Testimony')),
      Testimonydesc   = React.lazy(() => import('pages/Testimonydesc/Testimonydesc')),
      Socmed          = React.lazy(() => import('pages/Socmed/Socmed')),
      User            = React.lazy(() => import('pages/User/User'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config

const routes = [

  { path: '/', exact: true, name: 'Accueil' },
  { path: '/404', component: NotFound },
  { path: '/500', component: InternalServer },
  { path: '/about', name: 'About', component: About },
  { path: '/audit', name: 'Audit', component: Audit },
  { path: '/blog', exact: true,  name: 'Blog', component: Blog },
  { path: '/blog/blog', name: 'Nos Blogs', component: Blog},
  { path: '/blog/blogdesc', name: 'Introduction', component: Blogdesc},
  { path: '/carousel', name: 'Carousel', component: Carousel },
  
  // Cartes des menus
  { path: '/menu', exact: true,  name: 'Menu', component: Menu },
  { path: '/menu/page', name: 'Titre de la page', component: Menudesc},
  { path: '/menu/card', name: 'Les cartes', component: Cards},
  { path: '/menu/menu', name: 'Les menus', component: Menu},
  
  // Cartes des buffets
  { path: '/buffet', exact: true,  name: 'Buffets', component: Buffet },
  { path: '/buffet/page', name: 'Titre de la page', component: Buffetdesc },
  { path: '/buffet/card', name: 'Les cartes des buffets', component: Cardbuffets },
  { path: '/buffet/menu', name: 'Les buffets', component: Buffet },
  
  // Galleries des medias
  { path: '/picture', exact: true,  name: 'Gallerie', component: Medias },
  { path: '/picture/page', name: 'Titre de la page', component: Gallerydesc },
  { path: '/picture/gallerie', name: 'Les galleries des médias', component: Gallery },
  { path: '/picture/media', name: 'Les médias', component: Medias },
      
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/config', name: 'Configuration', component: Config },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/header', name: 'Header', component: Header },
  { path: '/message', name: 'Message', component: Message },
  { path: '/loc', name: 'Loc', component: Loc },
  { path: '/location', exact:true,  name: 'Location', component: Location },
  { path: '/location/salle', name: 'Salle', component: Salle },
  { path: '/location/descsalle', name: 'DescSalle', component: DescSalle },
  { path: '/location/descmateriel', name: 'DescMateriel', component: DescMateriel },
  { path: '/location/descvehicule', name: 'DescVehicule', component: DescVehicule },
  { path: '/policy', name: 'Policy', component: Policy },
  { path: '/service', exact: true,  name: 'Service', component: Service },
  { path: '/service/service', name: 'Nos Services', component: Service},
  { path: '/service/servicedesc', name: 'Introduction', component: Servicedesc},
  { path: '/socmed', name: 'Socmed', component: Socmed },
  { path: '/sponsor', name: 'Sponsor', component: Sponsor },
  { path: '/team',  exact: true, name: 'L\'équipe', component: Team },
  { path: '/team/team', name: 'L\'équipe', component: Team},
  { path: '/team/teamdesc', name: 'Introduction', component: Teamdesc},
  { path: '/terms',  name: 'Terms', component: Terms },
  { path: '/testimony', exact: true, name: 'Testimony', component: Testimony },
  { path: '/testimony/testimony', name: 'Les commentaires', component: Testimony},
  { path: '/testimony/testimonydesc', name: 'Introduction', component: Testimonydesc},
  { path: '/user', name: 'Utilisateur', component: User },

];

export default routes;
