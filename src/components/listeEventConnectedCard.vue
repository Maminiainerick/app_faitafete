<template>
  <q-card>
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
    <q-card-section class="q-pa-md row items-start q-gutter-md">


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
          <q-btn flat round icon="eva-more-horizontal-outline" to="/loggedin/conferenceEvent"/>
        </q-card-actions>
      </q-card>


      <q-card class="my-card">
        <q-img :ratio="16/9"
               src="https://th.bing.com/th/id/R.f19126c6f1e60b6c469965ba475e1eae?rik=rmXhbCd5iHfLZg&riu=http%3a%2f%2fwww.douvres-la-delivrande.fr%2fimages%2factualite%2f1601471526-unnamed.jpg&ehk=d84ykc5kVuRWOW3fcGxsYYtY7R95mKX9C5XQGJuq4WQ%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"/>
        <q-card-section>
          <div class="text-subtitle5">Randonnée en montagne</div>
          <div class="text-info">Jeudi 18 nov</div>
        </q-card-section>
        <q-separator/>
        <q-card-actions>
          <q-btn flat round icon="event" @click="showNotifAjoutAgenda"/>
          <q-space/>
          <q-btn flat round icon="eva-more-horizontal-outline"/>
        </q-card-actions>
      </q-card>

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
          <q-btn flat round icon="eva-more-horizontal-outline"/>
        </q-card-actions>
      </q-card>

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
          <q-btn flat round icon="eva-more-horizontal-outline">
            <q-menu cover auto-close>
              <q-list>
                <q-item clickable>
                  <q-item-section>Plus d'informations</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>S'inscrire</q-item-section>
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

  </q-card>
</template>

<script>
import {reactive, computed} from 'vue'
import {useQuasar} from 'quasar'

export default {
  components: {},
  setup() {
    const event = reactive({
      Recent: false,
      Semaine: false,
      Proximite: false
    })
    const $q = useQuasar()

    function showConferenceEvent() {

    }

    return {
      event,
      selection: computed(() => {
        return Object.keys(event)
          .filter(type => event[type] === true)
          .join(', ')
      }),

      showNotifAjoutAgenda: function () {
        $q.notify({
          progress: true,
          message: 'Ajouté à votre agenda',
          color: 'primary'
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
