<template>
  <q-page padding>
    <q-img :ratio="16/9"
           src="https://th.bing.com/th/id/OIP.QEiQUSeDaKU5JWQKFrKdFQHaEK?pid=ImgDet&rs=1"/>
    <q-card flat>
      <q-card-section>
        <div class="text-bold text-center text-primary text-subtitle1">Réunion du BDE Economie et Gestion</div>
        <q-btn unelevated disable class="full-width text-capitalize" rounded color="orange" label="événement privé" size="sm"></q-btn>
        <div class="text-info text-center text-grey">
          Réunion ordinaire du BDE <br>
          Ordre du jour : réélection du bureau
        </div>
      </q-card-section>
      <q-card-section>
        <div class="text-info">
          <q-icon name="eva-calendar"/>
          Jeudi 18 Novembre 2021
        </div>
        <div class="text-info">
          <q-icon name="eva-pin"/>
          Amphi 7, PMF UGA
        </div>
        <div class="text-info text-bold text-orange">
          <q-icon name="eva-people"/>
          Uniquement les étudiants de l'UFR Economie-Gestion
        </div>
      </q-card-section>
      <q-card-section class="flex-center">
        <q-btn label="Participer à cet événement" color="primary" rounded class="full-width" @click="inscriptionNecessaire=true"/>
        <q-card-section>
          <q-btn label="Signaler à cet événement" color="dark" rounded outline class="full-width" @click="inscriptionNecessaire=true"/>
        </q-card-section>
      </q-card-section>
    </q-card>

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
        <q-card-actions align="right" class="bg-white text-primary">
          <q-btn flat label="Se connecter" to="/login" v-close-popup/>
          <q-btn flat label="Créer un compte" to="/login/signUp" v-close-popup/>
        </q-card-actions>
      </q-card>
    </q-dialog>

  </q-page>
</template>

<script>
import {ref} from 'vue'
export default {
  setup() {
    return {
      inscriptionNecessaire: ref(false)
    }
  }
}
</script>
