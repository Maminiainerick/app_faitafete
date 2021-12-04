<template>
  <q-page padding>
    <q-img :ratio="16/9"
           src="https://img.20mn.fr/IWiMLh_hRfmDkHwVUZ10Dg/640x410_emmanuel-macron-conference-presse-salle-fetes-elysee-25-avril-2019.jpg"/>
    <q-card flat>
      <q-card-section>
        <div class="text-bold text-center text-primary text-subtitle1">Conférence avec Emmanuel Macron</div>
        <div class="text-info text-center text-grey">De passage à Grenoble, le Président de la République tiendra une
          conférence avec les étudiants de l'UGA pour discuter de leur situation
        </div>
      </q-card-section>
      <q-card-section>
        <div class="text-info">
          <q-icon name="eva-calendar"/>
          20 Novembre 2021
        </div>
        <div class="text-info">
          <q-icon name="eva-pin"/>
          Université Grenoble Alpes
        </div>
        <div class="text-info">
          <q-icon name="eva-people"/>
          Entrée libre
        </div>
      </q-card-section>
      <q-card-section class="flex-center">
        <q-btn label="Participer à cet événement" color="primary" rounded class="full-width" @click="card=true"/>
        <q-card-section>
          <q-btn label="Signaler à cet événement" color="dark" rounded outline class="full-width" @click="signaler=true"/>
        </q-card-section>
      </q-card-section>
    </q-card>

    <q-dialog v-model="card">
      <q-card class="my-card">
        <q-img src="https://img.20mn.fr/IWiMLh_hRfmDkHwVUZ10Dg/640x410_emmanuel-macron-conference-presse-salle-fetes-elysee-25-avril-2019.jpg" />

        <q-card-section>

          <div class="row no-wrap items-center">
            <div class="col text-subtitle1">
              Conférence avec Emmanuel Macron
            </div>
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-caption text-grey">
            Vous êtes sur le point de vous inscrire à cet événement. Merci de confirmer votre choix en ajoutant l'événement à votre agenda
          </div>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn v-close-popup flat color="primary" label="Annuler" />
          <q-btn flat color="primary" round icon="event" @click="showNotifAjoutAgenda"  to="/loggedin/index"/>
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="signaler">
      <q-card class="my-card" style="height: 300px">
        <q-card-section>
          <div class="bg-red">
            <div class="text-center text-bold text-white text-subtitle1">
              Signaler
            </div>
          </div>
        </q-card-section>
        <q-separator/>
        <q-card-section>
          <div class="row no-wrap items-center">
            <div class="col text-info text-black">
              Veuillez sélectionner une raison
            </div>
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-caption text-grey">
            <q-option-group
              :options="options"
              v-model="group"
            />
          </div>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn v-close-popup flat color="primary" label="Annuler" />
          <q-btn flat color="dark" round label="Signaler" @click="signaler2=true, signaler=false"/>
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="signaler2" persistent transition-show="scale" transition-hide="scale">
      <q-card class="bg-red text-white" style="width: 300px">
        <q-card-section>
          <div class="text-h6">Signaler événement</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          L'événement a été signalé à l'organisateur.
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-red">
          <q-btn flat label="Fermer" v-close-popup to="/loggedin/index"/>
        </q-card-actions>
      </q-card>
    </q-dialog>

  </q-page>
</template>

<script>
import {ref} from 'vue'
import {useQuasar} from "quasar";
export default {
  setup() {
    const $q=useQuasar()
    return {
      card: ref(false),
      signaler: ref(false),
      signaler2: ref(false),
      showNotifAjoutAgenda: function () {
        $q.notify({
          progress: true,
          message: 'Ajouté à votre agenda',
          color: 'primary'
        })
      },
      group: ref([]),
      options: [
        {label: 'Nudité', value:'op1'},
        {label: 'Violence', value:'op2'},
        {label: 'Harcèlement', value:'op3'},
        {label: 'Suicide ou automutilation', value:'op4'},
        {label: 'Fausse information', value:'op5'},
        {label: 'Contenu indésirable', value:'op6'},
        {label: 'Ventes interdites', value:'op7'},
        {label: 'Discours haineux', value:'op8'},
        {label: 'Terrorisme', value:'op9'},
        {label: 'Autre chose', value:'op0'},
      ]
    }
  }
  // name: 'PageName',
}
</script>
