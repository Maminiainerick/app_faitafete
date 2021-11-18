<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    >
    <composant-erick></composant-erick>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import ComposantErick from "components/composantErick";

export default defineComponent({
  name: 'PageIndex',
  components: {ComposantErick}
})
</script>
