<template>
  <q-page padding>
    <q-img :ratio="16/9"
           src="https://th.bing.com/th/id/R.f19126c6f1e60b6c469965ba475e1eae?rik=rmXhbCd5iHfLZg&riu=http%3a%2f%2fwww.douvres-la-delivrande.fr%2fimages%2factualite%2f1601471526-unnamed.jpg&ehk=d84ykc5kVuRWOW3fcGxsYYtY7R95mKX9C5XQGJuq4WQ%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"/>
    <q-card flat>
      <q-card-section>
        <div class="text-bold text-center text-primary text-subtitle1">Randonnée en Chartreuse</div>
        <q-btn unelevated disable class="full-width text-capitalize" rounded color="green" label="événement public" size="sm"></q-btn>
        <div class="text-info text-center text-grey">
          Est-ce que tu aimes faire de la randonnée ? <br>
          Est-ce que tu viens d'arriver sur Grenoble ? <br>
          Est-ce que tu aimerais rencontrer du monde ? <br>
          Cette randonnée est faite pour toi !
        </div>
      </q-card-section>
      <q-card-section>
        <div class="text-info">
          <q-icon name="eva-calendar"/>
          Jeudi 18 Novembre 2021
        </div>
        <div class="text-info">
          <q-icon name="eva-pin"/>
          Les Gre'ats rando
        </div>
        <div class="text-info">
          <q-icon name="eva-people"/>
          Par groupe de 6 randonneurs
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
        <q-card-actions align="right" class="bg-white text-primary" vertical>
          <q-btn flat label="Se connecter" to="/login" v-close-popup/>
          <q-btn flat label="Créer un compte" to="/login/signUp" v-close-popup/>
          <q-btn flat label="Annuler" v-close-popup/>
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
      inscriptionNecessaire: ref(false),
    }
  }
  // name: 'PageName',
}
</script>
