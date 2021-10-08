const nav = {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'fa fa-dashboard',
    },
    {
      name: 'Configuration',
      url: '/config',
      icon: 'fa fa-cogs',
    },
    {
      name: 'Coordonnées',
      url: '/contact',
      icon: 'fa fa-phone',
    },
    {
      name: 'Utilisateur',
      url: '/user',
      icon: 'fa fa-user',
    },
    {
      name: 'Header',
      url: '/header',
      icon: 'fa fa-picture-o',
    },
    // {
    //   name: 'Message',
    //   url: '/message',
    //   icon: 'fa fa-user',
    // },
    {
      name: 'Carousel',
      url: '/carousel',
      icon: 'fa fa-leaf',
    },    
    {
      name: 'A Propos',
      url: '/about',
      icon: 'fa fa-info',
    },
    {
      name: 'Blog',
      url: '/blog',
      icon: 'fa fa-rss',
      children: 
      [
          {
            name: 'Description',
            url: '/blog/blogdesc',
            icon: 'fa fa-info',
          },
          {
            name: 'Liste des blogs',
            url: '/blog/blog',
            icon: 'fa fa-rss',
          }

      ],
    },  
    {
      name: 'Gallerie',
      url: '/picture',
      icon: 'fa fa-film',
      children: 
      [
          {
            name: 'Titre de la page',
            url: '/picture/page',
            icon: 'fa fa-info',
          },
          {
            name: 'Les galleries',
            url: '/picture/gallerie',
            icon: 'fas fa-book-open',
          },
          {
            name: 'Les médias',
            url: '/picture/media',
            icon: 'fas fa-hamburger',
          },

      ],
    },  
    // {
    //   name: 'Galerie Photos',
    //   url: '/gallery',
    //   icon: 'fa fa-film',
    //   children: 
    //   [
    //       {
    //         name: 'Description',
    //         url: '/gallery/gallerydesc',
    //         icon: 'fa fa-info',
    //       },
    //       {
    //         name: 'Les médias',
    //         url: '/gallery/gallery',
    //         icon: 'fa fa-check',
    //       },

    //   ],
    // },       
    {
      name: 'Cartes',
      url: '/menu',
      icon: 'fas fa-utensils',
      children: 
      [
          {
            name: 'Titre de la page',
            url: '/menu/page',
            icon: 'fa fa-info',
          },
          {
            name: 'Les cartes',
            url: '/menu/card',
            icon: 'fas fa-book-open',
          },
          {
            name: 'Les menus',
            url: '/menu/menu',
            icon: 'fas fa-hamburger',
          },

      ],
    },    
    {
      name: 'Buffets',
      url: '/buffet',
      icon: 'fas fa-utensils',
      children: 
      [
          {
            name: 'Titre de la page',
            url: '/buffet/page',
            icon: 'fa fa-info',
          },
          {
            name: 'Les cartes des buffets',
            url: '/buffet/card',
            icon: 'fas fa-book-open',
          },
          {
            name: 'Les buffets',
            url: '/buffet/menu',
            icon: 'fas fa-hamburger',
          },

      ],
    },
    {
      name: 'Nos Services',
      url: '/service',
      icon: 'fa fa-feed',
      children: 
      [
          {
            name: 'Description',
            url: '/service/servicedesc',
            icon: 'fa fa-info',
          },
          {
            name: 'Liste de services',
            url: '/service/service',
            icon: 'fa fa-check',
          }

      ],
    },
    // {
    //   name: 'Témoignages',
    //   url: '/testimony',
    //   icon: 'fa fa-comment',
    //   children: 
    //   [
    //       {
    //         name: 'Description',
    //         url: '/testimony/testimonydesc',
    //         icon: 'fa fa-info',
    //       },
    //       {
    //         name: 'Les commentaires',
    //         url: '/testimony/testimony',
    //         icon: 'fa fa-comment',
    //       },

    //   ],
    // },
    {
      name: 'Témoignages',
      url: '/testimony/testimony',
      icon: 'fa fa-comment'
    },
    // {
    //   name: 'L\'équipe',
    //   url: '/team',
    //   icon: 'fa fa-users',
    //   children: 
    //   [
    //       {
    //         name: 'Description',
    //         url: '/team/teamdesc',
    //         icon: 'fa fa-info',
    //       },
    //       {
    //         name: 'L\'équipe',
    //         url: '/team/team',
    //         icon: 'fa fa-users',
    //       }

    //   ],
    // },
    {
      name: 'L\'équipe',
      url: '/team/team',
      icon: 'fa fa-users'
    },
    {
      name: 'Location',
      url: '/location',
      icon: 'fa fa-share-alt',
    },
    {
      name: 'RGPD',
      url: '/policy',
      icon: 'fa fa-share-alt',
    },
    {
      name: 'Termes et conditions',
      url: '/terms',
      icon: 'fa fa-share-alt',
    },
    {
      name: 'Nos Sponsors',
      url: '/sponsor',
      icon: 'fa fa-share-alt',
    },
    {
      name: 'Réseaux Social',
      url: '/socmed',
      icon: 'fa fa-share-alt',
    },
    {
      name: 'Audit',
      url: '/audit',
      icon: 'fa fa-share-alt',
    },
  ],
};






export default(nav)