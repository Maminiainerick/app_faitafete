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
        @click="evenementRecent = !evenementRecent"
      >
        Ajoutés récemment
      </q-chip>
      <q-chip
        v-model:selected="event.Semaine"
        color="primary"
        text-color="white"
        icon="eva-calendar-outline"
        size="sm"
        @click="evenementSemaine = !evenementSemaine"
      >
        Cette semaine
      </q-chip>
      <q-chip
        v-model:selected="event.Proximite"
        color="primary"
        text-color="white"
        icon="eva-pin-outline"
        size="sm"
        @click="evenementProximite = !evenementProximite"
      >
        A proximité
      </q-chip>
    </q-card-section>

    <!--Liste des événements existants-->
    <q-card-section class="q-pa-md row items-start q-gutter-md">

      <!--Carte événement Randonnée-->
      <q-card class="my-card" v-show="evenementSemaine || evenementProximite">
        <q-img :ratio="16/9"
               src="https://th.bing.com/th/id/R.f19126c6f1e60b6c469965ba475e1eae?rik=rmXhbCd5iHfLZg&riu=http%3a%2f%2fwww.douvres-la-delivrande.fr%2fimages%2factualite%2f1601471526-unnamed.jpg&ehk=d84ykc5kVuRWOW3fcGxsYYtY7R95mKX9C5XQGJuq4WQ%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"/>
        <q-card-section>
          <div class="text-subtitle5">Randonnée en Chartreuse</div>
          <div class="text-info">Dimanche 12 dec</div>
        </q-card-section>
        <q-separator/>
        <q-card-actions>
          <q-btn flat round icon="event" @click="inscriptionNecessaire=true"/>
          <q-space/>
          <q-btn flat round icon="eva-plus-circle">
            <q-menu cover auto-close>
              <q-list>
                <q-item clickable to="/randonnee-Chartreuse">
                  <q-item-section>Plus d'informations</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section @click="inscriptionNecessaire=true">S'inscrire</q-item-section>
                </q-item>
                <q-item clickable @click="inscriptionNecessaire=true">
                  <q-item-section>Ajouter à mon agenda</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </q-card-actions>
      </q-card>

      <!--Carte événement Réunion BDE-->
      <q-card class="my-card" v-show="evenementProximite">
        <q-img :ratio="16/9" src="https://th.bing.com/th/id/OIP.QEiQUSeDaKU5JWQKFrKdFQHaEK?pid=ImgDet&rs=1"/>
        <q-card-section>
          <div class="text-subtitle5">Réunion BDE Economie-Gestion</div>
          <div class="text-info">Jeudi 16 dec</div>
        </q-card-section>
        <q-separator/>
        <q-card-actions>
          <q-btn flat round icon="event" @click="inscriptionNecessaire=true"/>
          <q-space/>
          <q-btn flat round icon="eva-plus-circle">
            <q-menu cover auto-close>
              <q-list>
                <q-item clickable to="/reunion-BDE">
                  <q-item-section>Plus d'informations</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section @click="inscriptionNecessaire=true">S'inscrire</q-item-section>
                </q-item>
                <q-item clickable @click="inscriptionNecessaire=true">
                  <q-item-section>Ajouter à mon agenda</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </q-card-actions>
      </q-card>

      <!--Carte événement Anniversaire de Johann-->
      <q-card class="my-card" v-show="evenementRecent">
        <q-img :ratio="16/9"
               src="https://th.bing.com/th/id/R.3f5ec62091a7e4d7ba76a95129774587?rik=WKhPikqETLa%2f%2fg&pid=ImgRaw&r=0"/>
        <q-card-section>
          <div class="text-subtitle5">Anniversaire de Johann</div>
          <div class="text-info">Vendredi 17 dec</div>
        </q-card-section>
        <q-separator/>
        <q-card-actions>
          <q-btn flat round icon="event" @click="inscriptionNecessaire=true"/>
          <q-space/>
          <q-btn flat round icon="eva-plus-circle">
            <q-menu cover auto-close>
              <q-list>
                <q-item clickable to="/anniversaire-Johann">
                  <q-item-section>Plus d'informations</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section @click="inscriptionNecessaire=true">S'inscrire</q-item-section>
                </q-item>
                <q-item clickable @click="inscriptionNecessaire=true">
                  <q-item-section>Ajouter à mon agenda</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </q-card-actions>
      </q-card>

      <!--Carte événement Conférence Emmanuel Macron-->
      <q-card v-ripple class="my-card" v-show="evenementRecent || evenementProximite">
        <q-img :ratio="16/9"
               src="https://img.20mn.fr/IWiMLh_hRfmDkHwVUZ10Dg/640x410_emmanuel-macron-conference-presse-salle-fetes-elysee-25-avril-2019.jpg"/>
        <q-card-section>
          <div class="text-subtitle5">Conférence avec Emmanuel Macron</div>
          <div class="text-info">Samedi 18 dec</div>
        </q-card-section>
        <q-separator/>
        <q-card-actions>
          <q-btn flat round icon="event" @click="inscriptionNecessaire=true"/>
          <q-space/>
          <q-btn flat round icon="eva-plus-circle">
            <q-menu cover auto-close>
              <q-list>
                <q-item clickable to="/conference-Emmanuel-Macron-UGA">
                  <q-item-section>Plus d'informations</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section @click="inscriptionNecessaire=true">S'inscrire</q-item-section>
                </q-item>
                <q-item clickable @click="inscriptionNecessaire=true">
                  <q-item-section>Ajouter à mon agenda</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </q-card-actions>
      </q-card>

    </q-card-section>

    <!--Boite de dialogue information création de compte nécessaire pour s'inscrire à un événement
    ou ajouter événement à l'agenda-->
    <q-dialog v-model="inscriptionNecessaire" persistent transition-show="scale" transition-hide="scale">
      <q-card class="bg-dark text-white" style="width: 300px">
        <q-card-section>
          <div class="text-h6">Action impossible</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          Pour continuer, vous devez vous identifier.
        </q-card-section>
        <q-card-actions align="right" class="bg-white text-primary" vertical>
          <q-btn flat label="Se connecter" to="/login" v-close-popup/>
          <q-btn flat label="Créer un compte" to="/login/signUp" v-close-popup/>
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
      Recent: true,
      Semaine: true,
      Proximite: true,


    })
    const $q = useQuasar()


    return {
      inscriptionNecessaire: ref(false),
      evenementRecent: ref(true),
      evenementSemaine: ref(true),
      evenementProximite: ref(true),
      event,
      selection: computed(() => {
        return Object.keys(event)
          .filter(type => event[type] === true)
          .join(', ')
      }),
    }
  }
}
</script>
<style lang="sass" scoped>
.my-card
  width: 50%
  max-width: 155px
</style>
