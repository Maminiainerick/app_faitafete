<template>
  <q-page class="bg-primary row justify-center items-center">

    <div class="column">
      <div class="row justify-center">
        <img src="../assets/Logo1.png" style="width:30%;height:30%;"/>
      </div>

      <div class="row justify-center">
        <h5 class="text-h5 text-white q-my-md">Page d'inscription</h5>
      </div>
      <div class="row justify-center">
        <q-card class="my-card">
          <q-card-section>
            <q-form class="q-gutter-md">
              <q-input square filled clearable v-model="login" type="login" label="pseudo" />
              <q-input square filled clearable v-model="email" type="email" label="email" />
              <q-input square filled clearable v-model="password" type="password" label="password" />

            </q-form>
          </q-card-section>
            <q-card-section>
              <div class ="row justify-center">
                <p>Importer photo</p>
                <q-form class="q-gutter-md">
                  <q-btn
                    round
                    color="secondary"
                    @click="startComputing(1)"
                    icon="cloud_upload"
                  />
                </q-form>
              </div>
            </q-card-section>

          <q-card-actions class="q-px-md">
            <q-btn unelevated to="/" color="primary" size="lg" class="full-width" label="Se connecter" />
          </q-card-actions>
          <q-card-section class="text-center q-pa-none">
            <q-btn flat class="text-red-4" label="Déja un compte? Se connecter." no-caps to="/login"/>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>

export default {
  name: 'signUp',
  components:{

  },
  data () {
    return {
      login:'',
      email: '',
      password: ''
    }
  }
}
</script>
