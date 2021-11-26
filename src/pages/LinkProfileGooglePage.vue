<template>
  <q-layout view="hHh lpR fFf">

    <q-header class="bg-white text-grey-14">
      <q-toolbar>
        <q-toolbar-title class="text-h6 text-left">
          <q-icon
            name="eva-google"
          />
          Se connecter avec Google
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <div class="column items-center justify-evenly self-center" style="height: 100px">
        <div class="col-1"/>
        <div class="col">
          <div class="col">
            <div class="text text-weight-bold">
              Fai'tafête souhaite accéder à votre compte Google
            </div>
          </div>
        </div>
        <div class="col">
          <div class="text-info">
            <q-icon
              name="eva-person-outline"/>
            johann@gmail.com
          </div>
        </div>
      </div>
      <q-card flat>
        <q-card-section>
          Fai'tafête pourra ainsi :
        </q-card-section>
        <q-card-section>
          <div class="row">
            <div class="col-1">
              <q-icon name="eva-person-done-outline"/>
            </div>
            <div class="col-10">
              <div class="text-info text-black ti-align-justify">
                Créer une relation entre vous et vos informations personnelles sur Google
              </div>
            </div>
            <div class="col-1">
              <q-icon name="eva-info-outline"/>
            </div>
          </div>
        </q-card-section>
        <q-card-section>
          <div class="row">
            <div class="col-1">
              <q-icon name="eva-person-done-outline"/>
            </div>
            <div class="col-10">
              <div class="text-info text-black ti-align-justify">
                Consulter vos informations personnelles, y compris celles que vous avez choisi de rendre disponibles publiquement
              </div>
            </div>
            <div class="col-1">
              <q-icon name="eva-info-outline"/>
            </div>
          </div>
        </q-card-section>
        <q-card-section>
          <div class="row">
            <div class="col-1">
              <q-icon name="eva-person-done-outline"/>
            </div>
            <div class="col-10">
              <div class="text-info text-black ti-align-justify">
                Afficher l'adresse e-mail principale associée à votre compte Google
              </div>
            </div>
            <div class="col-1">
              <q-icon name="eva-info-outline"/>
            </div>
          </div>
        </q-card-section>
        <q-card-section>
          <div class="text text-bold">
            Vérifiez que l'application Fai'tafête est digne de confiance
          </div>
          <div class="text-info text-black ti-align-justify">
            <p>Il se peut que vous partagiez des informations sensibles avec ce site ou cette application. Vous pouvez à tout moment consulter ou supprimer les autorisations d'accès dans votre
              <a href="https://myaccount.google.com/permissions">compte Google.</a></p>
            <p>Découvrez comment Google vous aide à <a href="http://bitly.ws/jErC">partager vos données de manière sécurisée</a></p>
            <p>Consultez les Règles de confidentialités et Conditions d'utilisation de Fai'tafête</p>
          </div>
        </q-card-section>
        <q-card-section>
          <div class="row justify-center">
            <div class="col-4">
              <q-btn no-caps label="Annuler" to="/"/>
            </div>
            <div class="col-4">
              <q-btn no-caps label="Connexion" to="/loggedin/index"/>
            </div>
          </div>
        </q-card-section>

      </q-card>

      <router-view />
    </q-page-container>

  </q-layout>
</template>
<script>
export default {
  // name: 'PageName',
}
</script>
