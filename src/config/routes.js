import { Home, Profile, Contact } from '../pages';

const routes = [
  // private Route
  {
    path: '/profile',
    component: Profile,
    isPublic: false,
  },

  // Public Route
  {
    path: '/contact',
    component: Contact,
    isPublic: true,
  },
  {
    path: '/home',
    component: Home,
    isPublic: true,
  },
  {
    path: '/',
    component: Home,
    isPublic: true,
  },
];

export default routes;
