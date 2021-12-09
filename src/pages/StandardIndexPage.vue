<template>
  <q-page>
    <recherche-card/>
    <liste-event-standard-card/>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import RechercheCard from "components/rechercheCard";
import ListeEventCard from "components/listeEventConnectedCard";
import ListeEventStandardCard from "components/listeEventStandardCard";

export default defineComponent({
  name: 'StandardIndex',
  components: {ListeEventStandardCard, RechercheCard}
})
</script>
