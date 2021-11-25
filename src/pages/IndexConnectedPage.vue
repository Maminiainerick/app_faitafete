<template>
  <q-page>
    <div class="q-pa-md">
        <div class="col-12 col-md-3">
          <greeting-section-card flat/>
      </div>
    </div>

    <recherche-card/>
    <liste-event-card/>
  </q-page>
</template>

<script>
import {defineComponent} from 'vue';
import RechercheCard from "components/rechercheCard";
import ListeEventCard from "components/listeEventCard";
import GreetingSectionCard from "components/greetingSectionCard";

export default defineComponent({
  name: 'PageIndex',
  components: {GreetingSectionCard, ListeEventCard, RechercheCard}
})
</script>
