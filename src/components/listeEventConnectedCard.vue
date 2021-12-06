<template>
  <q-card>

    <!--En-tête : Filtres des événements existants-->
    <q-card-section>
      <div class="text-h6">Découvrir des événements</div>
      <q-chip
        v-model:selected="event.Recent"
        color="primary"
        text-color="white"
        icon="eva-clock-outline"
        size="sm"
      >
        Ajoutés récemment
      </q-chip>
      <q-chip
        v-model:selected="event.Semaine"
        color="primary"
        text-color="white"
        icon="eva-calendar-outline"
        size="sm"
      >
        Cette semaine
      </q-chip>
      <q-chip
        v-model:selected="event.Proximite"
        color="primary"
        text-color="white"
        icon="eva-pin-outline"
        size="sm"
      >
        A proximité
      </q-chip>
    </q-card-section>

    <!--Liste des événements existants-->
    <q-card-section class="q-pa-md row items-start q-gutter-md">

      <!--Carte événement Conférence Emmanuel Macron-->
      <q-card class="my-card">
        <q-img :ratio="16/9"
               src="https://img.20mn.fr/IWiMLh_hRfmDkHwVUZ10Dg/640x410_emmanuel-macron-conference-presse-salle-fetes-elysee-25-avril-2019.jpg"/>
        <q-card-section>
          <div class="text-subtitle5">Conférence avec Emmanuel Macron</div>
          <div class="text-info">Samedi 20 nov</div>
        </q-card-section>
        <q-separator/>
        <q-card-actions>
          <q-btn flat round icon="event" @click="showNotifAjoutAgenda"/>
          <q-space/>
          <q-btn flat round icon="eva-plus-circle">
            <q-menu cover auto-close>
              <q-list>
                <q-item clickable to="/loggedin/conference-Emmanuel-Macron-UGA">
                  <q-item-section>Plus d'informations</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section @click="confirmPublicEvent=true">S'inscrire</q-item-section>
                </q-item>
                <q-item clickable @click="showNotifAjoutAgenda">
                  <q-item-section>Ajouter à mon agenda</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </q-card-actions>
      </q-card>

      <!--Carte événement Randonnée-->
      <q-card class="my-card">
        <q-img :ratio="16/9"
               src="https://th.bing.com/th/id/R.f19126c6f1e60b6c469965ba475e1eae?rik=rmXhbCd5iHfLZg&riu=http%3a%2f%2fwww.douvres-la-delivrande.fr%2fimages%2factualite%2f1601471526-unnamed.jpg&ehk=d84ykc5kVuRWOW3fcGxsYYtY7R95mKX9C5XQGJuq4WQ%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"/>
        <q-card-section>
          <div class="text-subtitle5">Randonnée en Chartreuse</div>
          <div class="text-info">Jeudi 18 nov</div>
        </q-card-section>
        <q-separator/>
        <q-card-actions>
          <q-btn flat round icon="event" @click="showNotifAjoutAgenda"/>
          <q-space/>
          <q-btn flat round icon="eva-plus-circle">
            <q-menu cover auto-close>
              <q-list>
                <q-item clickable to="/loggedin/randonnee-Chartreuse">
                  <q-item-section>Plus d'informations</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section @click="confirmPublicEvent=true">S'inscrire</q-item-section>
                </q-item>
                <q-item clickable @click="showNotifAjoutAgenda">
                  <q-item-section>Ajouter à mon agenda</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </q-card-actions>
      </q-card>

      <!--Carte événement Anniversaire de Johann-->
      <q-card class="my-card">
        <q-img :ratio="16/9"
               src="https://th.bing.com/th/id/R.3f5ec62091a7e4d7ba76a95129774587?rik=WKhPikqETLa%2f%2fg&pid=ImgRaw&r=0"/>
        <q-card-section>
          <div class="text-subtitle5">Anniversaire de Johann</div>
          <div class="text-info">Samedi 20 nov</div>
        </q-card-section>
        <q-separator/>
        <q-card-actions>
          <q-btn flat round icon="event" @click="showNotifAjoutAgenda"/>
          <q-space/>
          <q-btn flat round icon="eva-plus-circle">
            <q-menu cover auto-close>
              <q-list>
                <q-item clickable to="/loggedin/anniversaire-Johann">
                  <q-item-section>Plus d'informations</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section @click="confirmPrivateEvent=true">S'inscrire</q-item-section>
                </q-item>
                <q-item clickable @click="showNotifAjoutAgenda">
                  <q-item-section>Ajouter à mon agenda</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </q-card-actions>
      </q-card>

      <!--Carte événement Réunion BDE-->
      <q-card class="my-card">
        <q-img :ratio="16/9" src="https://th.bing.com/th/id/OIP.QEiQUSeDaKU5JWQKFrKdFQHaEK?pid=ImgDet&rs=1"/>
        <q-card-section>
          <div class="text-subtitle5">Réunion BDE Economie-Gestion</div>
          <div class="text-info">Jeudi 18 nov</div>
        </q-card-section>
        <q-separator/>
        <q-card-actions>
          <q-btn flat round icon="event" @click="showNotifAjoutAgenda"/>
          <q-space/>
          <q-btn flat round icon="eva-plus-circle">
            <q-menu cover auto-close>
              <q-list>
                <q-item clickable to="/loggedin/reunion-BDE">
                  <q-item-section>Plus d'informations</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section @click="confirmPrivateEvent=true">S'inscrire</q-item-section>
                </q-item>
                <q-item clickable @click="showNotifAjoutAgenda">
                  <q-item-section>Ajouter à mon agenda</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </q-card-actions>
      </q-card>

    </q-card-section>

    <!--Boite de dialogue pour confirmer l'inscription à un événement privé-->
    <q-dialog v-model="confirmPublicEvent" persistent transition-show="scale" transition-hide="scale">
      <q-card class="bg-primary text-white" style="width: 300px">
        <q-card-section>
          <div class="text-h6">Confirmer inscription</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          Vous êtes sur le point de vous inscrire à cet événement.
          Merci de confirmer votre choix
        </q-card-section>
        <q-card-actions align="right" class="bg-white text-primary">
          <q-btn flat label="Confirmer inscription" @click="showNotifInscription" v-close-popup/>
          <q-btn flat label="Annuler" v-close-popup/>
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!--Boite de dialogue pour confirmer l'inscription à un événement privé-->
    <q-dialog v-model="confirmPrivateEvent" persistent transition-show="scale" transition-hide="scale">
      <q-card class="bg-orange text-white" style="width: 300px">
        <q-card-section>
          <div class="text-h6">Evénement privé</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          Ceci est un événement privé. Votre inscription sera soumise à la validation de l'organisateur
        </q-card-section>
        <q-card-actions align="right" class="bg-white text-orange">
          <q-btn flat label="Confirmer inscription" @click="showNotifPrivateInscription" v-close-popup/>
          <q-btn flat label="Annuler" v-close-popup/>
        </q-card-actions>
      </q-card>
    </q-dialog>

  </q-card>
</template>

<script>
import {reactive, computed, ref} from 'vue'
import {useQuasar} from 'quasar'

export default {
  components: {},
  setup() {
    const event = reactive({
      Recent: false,
      Semaine: false,
      Proximite: false,

    })
    const $q = useQuasar()


    return {
      confirmPublicEvent: ref(false),
      confirmPrivateEvent: ref(false),
      event,
      selection: computed(() => {
        return Object.keys(event)
          .filter(type => event[type] === true)
          .join(', ')
      }),

      showNotifAjoutAgenda: function () {
        $q.notify({
          message: 'Ajouté à votre agenda',
          color: 'primary'
        })
      },
      showNotifInscription: function () {
        $q.notify({
          message: 'Inscription enregistrée',
          color: 'green'
        })
      },
      showNotifPrivateInscription: function () {
        $q.notify({
          message: 'Inscription en attente',
          color: 'orange-7'
        })
      }
    }
  }
}
</script>
<style lang="sass" scoped>
.my-card
  width: 50%
  max-width: 155px
</style>
