<template>
  <q-page padding>
    <div class="text-h5 text-primary text-bold text-center">Créer un événement</div>
    <div class="q-pa-md">
      <EventCreationForm/>
    </div>
  </q-page>
</template>

<script>

import EventCreationForm from "components/EventCreationForm";
export default {
  components: {EventCreationForm}
}
</script>
