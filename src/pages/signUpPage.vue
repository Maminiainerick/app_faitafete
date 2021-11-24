<template>
  <q-page class="bg-primary row justify-center items-center">

    <div class="column">
      <div class="row justify-center">
        <h5 class="text-h5 text-white q-my-md">Page d'inscription</h5>
      </div>
      <div class="row justify-center">
        <q-card class="my-card">
          <q-card-section>
            <q-form
              @submit="onSubmit"
              @reset="onReset"
              class="q-gutter-md">

              <q-input
                square
                filled
                clearable
                v-model="login"
                type="login"
                label="Pseudo *"
                lazy-rules
                :rules="[val => val && val.length > 0 || 'Veuillez entrer quelque chose']"
              />

              <q-input
                square filled clearable v-model="email"
                type="email"
                label="Email *"
                lazy-rules
                :rules="[val => val && val.length > 0 || 'Veuillez entrer quelque chose']"
              />

              <q-input
                filled
                clearable
                v-model="email"
                type="email"
                label="Email *"
                hint="email"
                lazy-rules
                :rules="[val => val && val.length > 0 || 'Veuillez entrer quelque chose']"
              />

              <q-input
                filled
                clearable
                v-model="password"
                type="password"
                label="Password *"
                lazy-rules
                :rules="[val => val && val.length > 0 || 'Veuillez entrer quelque chose']"
              />

              <q-input
                filled
                clearable
                v-model="password"
                type="password"
                label="password *"
                lazy-rules
                :rules="[val => val && val.length > 0 || 'Veuillez entrer quelque chose']"
              />

              <q-toggle
                v-model="accept"
                label="J'accepte la license"
              />

            </q-form>

          </q-card-section>

          <q-card-actions class="q-px-md">
            <q-btn
              unelevated
              to="/signUp2"
              color="primary"
              size="lg"
              class="full-width"
              label="S'inscrire"
            />
          </q-card-actions>

          <q-card-section class="text-center q-pa-none">
            <q-btn
              flat class="text-red-4"
              label="Déja un compte? Se connecter."
              no-caps to="/login"
            />
          </q-card-section>

        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import {useQuasar} from "quasar";
import {ref} from 'vue'

export default {
  name: 'signUp',

  setup () {
    const accept = ref(false)
    const $q =useQuasar()

    const login = ref(null)
    const email = ref(null)
    const password = ref(null)
    return {
      login,
      email,
      password,
      accept,

      onSubmit () {
        if (accept.value !== true) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'You need to accept the license and terms first'
          })
        } else {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted'
          })
        }
      },
      onReset(){
        login.value = null
        email.value=null
        password.value=null
        accept.value=false
      }
    }
  }
}
</script>
