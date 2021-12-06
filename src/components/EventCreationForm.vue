<template>
  <q-form @submit="onSubmit" @reset="onReset">
    <q-input
      v-model="titre"
      label="Titre de l'événement"
      counter
      maxlength="50"
      :rules="[val => !!val || 'Champ obligatoire']"/>
    <q-input
      v-model="date"
      type="date"
      :rules="[val => !!val || 'Champ obligatoire']"/>
    <q-input
      v-model="lieu"
      label="Lieu"
      :rules="[val => !!val || 'Champ obligatoire']"/>
    <q-input
      v-model="description"
      autogrow
      label="Description"
      counter
      maxlength="250"
      :rules="[val => !!val || 'Champ obligatoire']"/>
    <div class="text-info">
      Confidentialité
    </div>
    <q-radio
      v-model="shape"
      val="privé"
      label="En petit comité"/>
    <q-radio
      v-model="shape"
      val="Public"
      label="Ouvert à tous"/>
    <q-input
      v-model="nbParticipants"
      type="number"
      label="Nombre de participants"
      counter
      maxlength="3"/>
    <div class="text-info">Autres options</div>
    <div class="bg-grey-2 q-pa-sm rounded-borders">
      <q-checkbox
        v-model="alcool"
        true-value="alcool"
        label="Alcool"
      />
      <q-checkbox
        v-model="deguisement"
        true-value="déguisé"
        label="Déguisements"
      />
      <q-checkbox
        v-model="accompagnant"
        true-value="accompagnant"
        label="Accompagnant autorisé"
      />
    </div>
    <q-card flat>
      <q-card-section>
        <div class="text-center">
          <q-btn label="Créer" type="submit" color="primary" @click="onSubmit" to="/loggedin/myevents"/>
          <q-btn label="Annuler" type="reset" color="primary" flat class="q-ml-sm" @click="onReset"
                 to="/loggedin/profile"/>
        </div>
      </q-card-section>
    </q-card>

  </q-form>
</template>

<script>
import {useQuasar} from "quasar";
import {ref} from "vue";

export default {
  setup() {
    const $q = useQuasar()
    return {
      titre: ref(''),
      date: ref(''),
      lieu: ref(''),
      theme: ref(''),
      nbParticipants: ref('0'),
      description: ref(''),
      shape: ref(''),
      alcool: ref('null'),
      deguisement: ref('null'),
      accompagnant: ref('null'),

      onSubmit() {
        $q.notify({
          color: 'primary',
          textColor: 'white',
          icon: 'checked',
          message: 'Evénement créé !'
        })
      },

      onReset() {
        $q.notify({
          color: 'grey',
          textColor: 'white',
          message: 'Annulé'
        })
      }
    }
  }
}
</script>
