<template>
  <q-page class="bg-primary row justify-center items-center">

    <div class="column">
      <div class="row justify-center">
        <h5 class="text-h5 text-white q-my-md">Inscription</h5>
      </div>
      <div class="row justify-center">
        <q-card class="my-card">
          <q-card-section>
            <form @submit.prevent.stop="onSubmit" @reset.prevent.stop="onReset" class="q-gutter-md">
              <q-input
                ref="emailRef"
                filled
                v-model="email"
                label="email *"
                hint="email"
                lazy-rules
                :rules="emailRules"
              />

              <q-input
                ref="mdpRef"
                filled
                type="password"
                v-model="password"
                label="votre mdp *"
                lazy-rules
                :rules="mdpRules"
              />

              <q-toggle v-model="accept" label="I accept the license and terms" />

              <div>
                <q-btn label="Submit" color="primary" @click="onSubmit"/>
                <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
              </div>
            </form>
          </q-card-section>

          <q-card-section class="text-center q-pa-none">
            <q-btn
              flat class="text-red-4"
              label="Déja un compte? Se connecter."
              no-caps to="/login"
            />
          </q-card-section>

          <q-card-section class ="text-center q-pa-none">
            <q-btn
              size="11px"
              no-caps
              rounded
              color="grey-5"
              to="/login/ggLog"
            >
              <q-avatar size="25px">
                <img src="../assets/logo-google.png">
              </q-avatar>
              Inscription avec Goggle
            </q-btn>
          </q-card-section>

          <q-card-section class ="text-center q-px-md">
            <q-btn
              size="11px"
              no-caps
              rounded
              color="grey-5"
              to="/login/fbLog"
            >
              <q-avatar size="25px">
                <img src="../assets/logoFb.png">
              </q-avatar>
              Inscription avec Facebook
            </q-btn>
          </q-card-section>

        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'

export default {
  setup () {
    const $q = useQuasar()

    const email = ref(null)
    const emailRef = ref(null)

    const mdp = ref(null)
    const mdpRef = ref(null)

    const accept = ref(false)

    return {
      email,
      emailRef,
      emailRules: [
        val => (val && val.length > 0) || 'Please type something'
      ],

      mdp,
      mdpRef,
      mdpRules: [
        val => (val && val.length > 0) || 'Please type something'
      ],

      accept,

      onSubmit () {
        emailRef.value.validate()
        mdpRef.value.validate()

        if (emailRef.value.hasError || mdpRef.value.hasError) {
          // form has error
        }
        else if (accept.value !== true) {
          $q.notify({
            color: 'negative',
            message: 'You need to accept the license and terms first'
          })
        }
        else {
          $q.notify({
            icon: 'done',
            color: 'positive',
            message: 'Submitted',
            onclick: "document.location.href=\'http://localhost:8080/#/signUp2'"
          })
        }
      },

      onReset () {
        email.value = null
        mdp.value = null

        emailRef.value.resetValidation()
        mdpRef.value.resetValidation()
      }
    }
  }
}
</script>
