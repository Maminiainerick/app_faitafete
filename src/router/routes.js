/*
  Importation des layouts
 */
import lMainStandard from 'layouts/MainStandardLayout'
import lLogin from 'layouts/loginLayout'
import lLogged from 'layouts/MainLoggedInLayout'
import lMessage from 'layouts/ListMessagesLayout'
import lCorps from 'layouts/CorpsMessageLayout'

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
import pModifProfile from 'pages/ModificationProfilePage'
import pCreate from 'pages/CreateEventPage'
import pAgenda from 'pages/AgendaPage'
import pMessages from 'pages/ListMessagesPage'
import pMessage1 from 'pages/MessagePage'

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
      {path: 'myevents', component: pMyEvents},
      {path: 'modifprofile', component: pModifProfile},
      {path: 'createvents', component: pCreate},
      {path: 'myagenda', component: pAgenda}
    ]
  },
  {
    path: '/message',
    component: lMessage,
    children: [
      {path: '', component: pMessages},
    ]
  },
  {
    path:'/corps',
    component: lCorps,
    children: [
      {path: '', component: pMessage1}
      {path:'', component:() => import('pages/loginPage.vue')},
      {path:'/signUp', component:() => import ('pages/signUpPage.vue')},
      {path:'/signUp2', component:()=> import ('pages/signUpPage2.vue')}

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
