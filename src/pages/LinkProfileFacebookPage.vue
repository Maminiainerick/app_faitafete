<template>
  <q-layout view="hHh lpR fFf">

    <q-header class="bg-blue-13 text-white">
      <q-toolbar>
        <q-toolbar-title class="text-weight-bold">
          <q-icon
            name="eva-facebook"
          />
          Log in with Facebook
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>

      <div class="column items-center justify-evenly self-center" style="height: 240px">
        <div class="col-4"/>
        <div class="col-3">
          <q-btn round flat>
            <q-avatar>
              <img
                src="../assets/Logo1.png"
                height="300px"
                style="max-width: 300px"
              />
            </q-avatar>
          </q-btn>
        </div>
        <div class="col">
          <div class="col">
            <div class="text-weight-bold">
              Fai'tafête veut avoir accès à :
            </div>
          </div>
        </div>
        <div class="col-1">
            Votre nom, votre photo de profil et votre liste d'amis
        </div>
        <div class="col-1"/>
        <div class="col">
          <div class="text">
            <q-btn flat no-caps color="blue-13">
              <q-icon name="eva-edit-outline"/>
              Modifier les autorisations
            </q-btn>
          </div>
        </div>
      </div>

      <div class="column items-center self-center" style="height: 150px">
        <div class="col"/>
        <div class="col text-info">
          Ceci n'autorise pas l'application à poster sur Facebook
        </div>
        <div class="col">
          <q-btn
            color="blue-13"
            class="full-width"
            label="Continuer sur votre profil"/>
        </div>
        <div class="col">
          <q-btn
            class="full-width"
            label="Annuler"/>
        </div>
      </div>
      <div class="column items-center justify-evenly self-center" style="height: 100px">
        <div class="col"/>
        <div class="col">
          <q-card flat>
            <q-card-section>
              <div class=" text-caption text-center text-weight-thin">
                En continuant, Faitafete recevra un accès permanent <br>
                aux informations que vous partagez et Facebook enregistrera
                quand Faitafete y accède. <br>
                <a href="https://www.facebook.com/help/">En savoir plus</a> sur ce partage et les paramètres dont vous disposez.

              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
      <router-view/>
    </q-page-container>

  </q-layout>
</template>
<script>
export default {
  // name: 'PageName',
}
</script>
