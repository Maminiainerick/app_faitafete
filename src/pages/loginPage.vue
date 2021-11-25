<template>
  <q-page class="bg-primary row justify-center items-center">

    <div class="column">
      <div class="row justify-center">
        <img
          src="../assets/Logo1.png"
          style="width:30%;height:30%;"/>
      </div>

      <div class="row justify-center">
        <h5 class="text-h5 text-white q-my-md"> Page de connexion </h5>
      </div>
      <div class="row justify-center">
        <q-card class="my-card">
          <q-card-section>
            <q-form class="q-gutter-md">
              <q-input
                square
                filled
                clearable
                v-model="email"
                type="email"
                label="email"/>
              <q-input
                square
                filled
                clearable
                v-model="password"
                type="password"
                label="password"/>
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-md">
            <q-btn
              unelevated
              to="/loggedin/index"
              color="primary"
              size="lg"
              class="full-width"
              label="Se connecter"/>
          </q-card-actions>
          <q-card-section class="text-center q-pa-none">
            <q-btn flat class="text-red-4" label="Créer un compte" no-caps to="/signUp"/>
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
              Connexion avec Goggle
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
              Connexion avec Facebook
            </q-btn>
          </q-card-section>

        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>

export default {
  name: 'Login',
  components: {},
  data() {
    return {
      onClick(){
      },
      email: '',
      password: ''
    }
  }
}
</script>
