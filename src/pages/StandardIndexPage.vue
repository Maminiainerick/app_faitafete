<template>
  <q-page>
    <recherche-card/>
    <liste-event-card/>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import RechercheCard from "components/rechercheCard";
import ListeEventCard from "components/listeEventCard";

export default defineComponent({
  name: 'StandardIndex',
  components: {ListeEventCard, RechercheCard}
})
</script>
