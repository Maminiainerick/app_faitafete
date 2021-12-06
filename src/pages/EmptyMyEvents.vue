<template>
  <q-page padding>
    <q-card class="text-center flex-center" flat>
      <q-card-section/>
      <q-card-section/>
      <q-card-section/>
      <q-card-section/>
      <q-card-section>
        <q-img
          class="justify-center"
          src="../assets/empty.png"
          style="height: 100px; max-width: 100px"
        />
      </q-card-section>
      <q-card-section/>
      <q-card-section>
        <div class="text-h6" align="center">
          Il n'y a pas encore<br/>d'événements ici...
        </div>
      </q-card-section>
      <q-card-section/>
      <q-card-section>
        <q-btn
          label="Créer un événement"
          to="/loggedin/createvents"
        />
      </q-card-section>
      <q-card-section/>
      <q-card-section/>
      <q-card-section/>
      <q-card-section/>
    </q-card>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>
