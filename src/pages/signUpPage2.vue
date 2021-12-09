<template>
  <q-page padding>
    <q-card class="my-card" flat>
      <q-item class="justify-center">
        <q-uploader
          url="http://localhost:4444/upload"
          label="Photo de profil"
          color="primary"
          style="max-width: 70%"
        />
      </q-item>
    </q-card>
    <div class="q-pa-md">
      <q-form @submit="onSubmit" @reset="onReset">
        <q-input
          v-model="nom"
          label="Nom *"
          counter
          maxlength="50"
          :rules="[val => !!val || 'Champ obligatoire']"/>
        <q-input
          v-model="prenom"
          label="Prenom *"
          counter
          maxlength="50"
          :rules="[val => !!val || 'Champ obligatoire']"/>
        <q-input
          filled
          v-model="Telephone"
          label="Telephone"
          mask="## ## ## ## ##"
          hint="Mask: ## ## ## ## ##" />
        <q-input
          v-model="description"
          autogrow
          label="Description"
          counter
          maxlength="250"
          :rules="[val => !!val || 'Champ obligatoire']"/>

        <q-card flat>
          <q-card-section>
            <div class="text-center">
              <q-btn label="Créer" type="submit" color="primary" @click="onSubmit" to="/loggedin/index"/>
              <q-btn label="Annuler" type="reset" color="primary" flat class="q-ml-sm" @click="onReset"/>
            </div>
          </q-card-section>
        </q-card>

      </q-form>
    </div>
  </q-page>
</template>

<script>
import {useQuasar} from "quasar"
import {ref} from "vue";

export default {
  setup() {
    const $q = useQuasar()
    return {
      nom: ref(''),
      prenom: ref(''),
      telephone: ref(null),
      description: ref(''),


      onSubmit() {
      },

      onReset() {
        nom.value = null
        prenom.value = null
        phone.value = null
        description.value = null

        nom.value.resetValidation()
        prenom.value.resetValidation()
        phone.value.resetValidation()
        description.value.resetValidation()
      }
    }
  }
}
</script>
