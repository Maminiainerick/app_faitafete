<template>
  <q-page>
    <div class="q-pa-md">
        <div class="col-12 col-md-3">
          <greeting-section-card flat/>
      </div>
    </div>
    <recherche-card/>
    <list-event-connected-card/>

  </q-page>
</template>

<script>
import {defineComponent} from 'vue';
import RechercheCard from "components/rechercheCard";
import ListEventConnectedCard from "components/listeEventConnectedCard";
import GreetingSectionCard from "components/greetingSectionCard";

export default defineComponent({
  name: 'PageIndex',
  components: {GreetingSectionCard, ListEventConnectedCard, RechercheCard}
})
</script>
