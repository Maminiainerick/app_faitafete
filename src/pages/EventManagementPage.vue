<template>
  <q-page padding>
    <q-img :ratio="16/9"
           src="https://th.bing.com/th/id/R.3f5ec62091a7e4d7ba76a95129774587?rik=WKhPikqETLa%2f%2fg&pid=ImgRaw&r=0"/>
    <q-card flat>
      <q-card-section>
        <div class="text-bold text-center text-primary text-subtitle1">Anniversaire de Johann</div>
        <q-btn unelevated disable class="full-width text-capitalize" rounded color="orange" label="événement privé"
               size="sm"></q-btn>
        <div class="text-info text-center text-grey">
          25 ans, ça se fête ! <br>
        </div>
      </q-card-section>
      <q-card-section>
        <div class="text-info">
          <q-icon name="eva-calendar"/>
          Samedi 20 Novembre 2021
        </div>
        <div class="text-info">
          <q-icon name="eva-pin"/>
          Parc Paul Mistral, Grenoble
        </div>
        <div class="text-info" v-show="nbparticipant">
          <q-icon name="eva-people"/>
          5 participants, dont 1 à confirmer
        </div>
        <div class="text-info" v-show="nbnewparticipantsuppr">
          <q-icon name="eva-people"/>
          4 participants
        </div>
        <div class="text-info" v-show="nbnewparticipantajout">
          <q-icon name="eva-people"/>
          5 participants
        </div>
      </q-card-section>
    </q-card>
    <div class="q-pa-md q-gutter-sm">
      <q-list>
        <q-card flat>
          <q-card-section horizontal class="text-grey" v-show="participant1">
            A valider
          </q-card-section>
        </q-card>
        <q-card>
          <q-item v-show="participant1">
            <q-item-section avatar>
              <q-avatar>
                <img src="../assets/man1.png">
              </q-avatar>
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-bold text-orange">Guy Tard</q-item-label>
            </q-item-section>
            <q-btn round icon="delete" push color="dark" @click="confirmDelete=true"/>
            <q-btn round icon="check_circle" push color="green" @click="confirmAdd=true"/>
          </q-item>
        </q-card>
        <q-card flat>
          <q-card-section horizontal class="text-grey">
            Participants validés :
          </q-card-section>
        </q-card>
        <q-card>
          <q-item v-show="participant2">
            <q-item-section avatar>
              <q-avatar>
                <img src="../assets/man2.png">
              </q-avatar>
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-green">Abel Hauboisdormant</q-item-label>
            </q-item-section>
            <q-btn round icon="delete" push color="dark"/>
          </q-item>
          <q-separator/>
          <q-item v-show="participant3">
            <q-item-section avatar>
              <q-avatar>
                <img src="../assets/woman3.png">
              </q-avatar>
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-green">Adèle Taplane</q-item-label>
            </q-item-section>
            <q-btn round icon="delete" push color="dark"/>
          </q-item>
          <q-separator/>
          <q-item v-show="participant4">
            <q-item-section avatar>
              <q-avatar>
                <img src="../assets/woman4.png">
              </q-avatar>
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-green">Bénédicte Ature</q-item-label>
            </q-item-section>
            <q-btn round icon="delete" push color="dark"/>
          </q-item>
          <q-separator/>
          <q-item v-show="participant5">
            <q-item-section avatar>
              <q-avatar>
                <img src="../assets/man6.png">
              </q-avatar>
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-green">Jacques Ouzi</q-item-label>
            </q-item-section>
            <q-btn round icon="delete" push color="dark"/>
          </q-item>
          <q-separator/>
          <q-item v-show="participant6">
            <q-item-section avatar>
              <q-avatar>
                <img src="../assets/man1.png">
              </q-avatar>
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-green">Guy Tard</q-item-label>
            </q-item-section>
            <q-btn round icon="delete" push color="dark"/>
          </q-item>
        </q-card>
      </q-list>
    </div>
    <div class="q-pa-md q-gutter-sm">
      <q-btn
        color="primary"
        to="/loggedin/myevents"
        label="Enregistrer"
      />
    </div>

    <!--Boite de dialogue confirmation suppression d'un participant-->
    <q-dialog v-model="confirmDelete" persistent transition-show="scale" transition-hide="scale">
      <q-card class="bg-dark text-white" style="width: 300px">
        <q-card-section>
          <div class="text-h6">Supprimer participant ?</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          Etes vous sûr(e) de supprimer ce participant ?
        </q-card-section>
        <q-card-actions align="right" class="bg-white text-primary" vertical>
          <q-btn flat label="Oui" v-close-popup
                 @click="participant1=false, nbnewparticipantsuppr=true, nbparticipant=false"/>
          <q-btn flat label="Annuler" v-close-popup/>
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!--Boite de dialogue confirmation ajout d'un participant-->
    <q-dialog v-model="confirmAdd" persistent transition-show="scale" transition-hide="scale">
      <q-card class="bg-green text-white" style="width: 300px">
        <q-card-section>
          <div class="text-h6">Ajout participant ?</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          Etes vous sûr(e) d'ajouter ce participant ?
        </q-card-section>
        <q-card-actions align="right" class="bg-white text-primary" vertical>
          <q-btn flat label="Oui" v-close-popup
                 @click="participant1=false, participant6=true, nbnewparticipantajout=true, nbparticipant=false"/>
          <q-btn flat label="Annuler" v-close-popup/>
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
    const $q = useQuasar()
    return {
      participant1 : ref(true),
      participant2 : ref(true),
      participant3 : ref(true),
      participant4 : ref(true),
      participant5 : ref(true),
      participant6 : ref(false),
      confirmDelete : ref(false),
      confirmAdd : ref(false),
      nbparticipant : ref(true),
      nbnewparticipantsuppr : ref(false),
      nbnewparticipantajout : ref(false)
    }
  }
}
</script>
