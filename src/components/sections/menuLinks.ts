interface MenuLink {
  name: string,
  path: string
}

const menuLinks: MenuLink[] = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Blog',
    path: '/blog'
  },
  {
    name: 'About',
    path: '/about'
  },
  {
    name: 'Projects',
    path: '/projects'
  },
  {
    name: 'Contact',
    path: '/contact'
  }
];

export default menuLinks;