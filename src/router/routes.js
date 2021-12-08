/*
  Importation des layouts
 */
import lMainStandard from 'layouts/MainStandardLayout'
import lLogin from 'layouts/loginLayout'
import lLogged from 'layouts/MainLoggedInLayout'
import lMessage from 'layouts/ListMessagesLayout'
import lListMessageSent from 'layouts/ListMessagesSentLayout'
import lCorps from 'layouts/CorpsMessageLayout'
import lModif from 'layouts/ProfilModifierLayout'
import lMessageSent from 'layouts/CorpsMessageSentLayout'
import lSignup from 'layouts/SignupLayout'

/*
  Importation des différentes pages
 */
import pStandardIndex from 'pages/StandardIndexPage'
import pLogin from 'pages/loginPage'
import pLoggedIndex from 'pages/IndexConnectedPage'
import pProfile from 'pages/ProfilePage'
import pProfileSent from 'pages/ProfileSentPage'
import pFacebookConnect from 'pages/LinkProfileFacebookPage'
import pGoogleConnect from 'pages/LinkProfileGooglePage'
import pMyEvents from 'pages/ListMyEventsPage'
import pModifProfile from 'pages/ModificationProfilePage'
import pCreate from 'pages/CreateEventPage'
import pAgenda from 'pages/AgendaPage'
import pMessages from 'pages/ListMessagesPage'
import pMessage1 from 'pages/MessagePage'
import pMessage2 from 'pages/MessageSentPage'
import pMessageSent from 'pages/ListMessagesSentPage'
import pEmptyEvent from 'pages/EmptyMyEvents'
import pConference from 'pages/ConferenceEventPage'
import pRando from 'pages/RandoEventPage'
import pBirthday from 'pages/BirthdayEventPage'
import pBDE from 'pages/BdeEventPage'
import pProfilModifier from 'pages/ProfilModifierPage'
import pSignup2 from 'pages/SignUpPage2'
import pModifyEvent from 'pages/ModifyEventPage'


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
      {path: 'ggLog', component: pGoogleConnect},
      {path:'/signUp', component:() => import ('pages/signUpPage.vue')},
    ]
  },
  {
    path: '/loggedin',
    component: lLogged,
    children: [
      {path: 'index', component: pLoggedIndex},
      {path: 'profile', component: pProfile},
      {path: 'profilesent', component: pProfileSent},
      {path: 'myevents', component: pMyEvents},
      {path: 'modifprofile', component: pModifProfile},
      {path: 'createvents', component: pCreate},
      {path: 'myagenda', component: pAgenda},
      {path: 'emptyevents', component: pEmptyEvent},
      {path: 'conference-Emmanuel-Macron-UGA', component: pConference},
      {path: 'randonnee-Chartreuse', component: pRando},
      {path: 'anniversaire-Johann', component: pBirthday},
      {path: 'reunion-BDE', component: pBDE},
      {path: 'modification-profil',component:pModifyEvent}

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
    path: '/messagesent',
    component: lListMessageSent,
    children: [
      {path: '', component: pMessageSent},
    ]
  },
  {
    path: '/corpsent',
    component: lMessageSent,
    children: [
      {path: 'sent', component: pMessage2}
    ]
  },
  {
    path:'/corps',
    component: lCorps,
    children: [
      {path: '', component: pMessage1},

    ]
  },

  {
    path:'/modifier',
    component: lModif,
    children: [
      {path: '', component: pProfilModifier},
    ]
  },

  {
    path:'/Signup2',
    component: lSignup,
    children: [
      {path: '', component: pSignup2},
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
