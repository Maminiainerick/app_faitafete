<template>
  <q-page>
    <q-card>
      <q-card-section>

      </q-card-section>
    </q-card>
    <recherche-card/>
    <liste-event-card/>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import RechercheCard from "components/rechercheCard";
import ListeEventCard from "components/listeEventCard";

export default defineComponent({
  name: 'PageIndex',
  components: {ListeEventCard, RechercheCard}
})
</script>
