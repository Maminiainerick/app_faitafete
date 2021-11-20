/*
  Importation des layouts
 */
import lMainStandard from 'layouts/MainStandardLayout'
import lLogin from 'layouts/loginLayout'
import lLogged from 'layouts/MainLoggedInLayout'

/*
  Importation des différentes pages
 */
import pStandardIndex from 'pages/StandardIndexPage'
import pLogin from 'pages/loginPage'
import pLoggedIndex from 'pages/IndexConnectedPage'
import pProfile from 'pages/ProfilePage'
import pFacebookConnect from 'pages/LinkProfileFacebookPage'
import pGoogleConnect from 'pages/LinkProfileGooglePage'
import pMyEvents from 'pages/ListMyEventsPage'

const routes = [
  {
    path: '/',
    component: lMainStandard,
    children: [
      {path: '', component: pStandardIndex},
    ]
  },
  {
    path: '/login',
    component: lLogin,
    children: [
      {path: '', component: pLogin},
      {path: 'fbLog', component: pFacebookConnect},
      {path: 'ggLog', component: pGoogleConnect}
    ]
  },
  {
    path: '/loggedin',
    component: lLogged,
    children: [
      {path: 'index', component: pLoggedIndex},
      {path: 'profile', component: pProfile},
      {path: 'myevents', component: pMyEvents}
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
