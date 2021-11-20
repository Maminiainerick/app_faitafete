<template>
  <q-card>
    <q-card-section>
      <div class="text-h5">
        Bonjour,<br>Johann
      </div>
    </q-card-section>
    <q-card-section>
      <option-section-card/>
    </q-card-section>
  </q-card>
</template>

<script>
import OptionSectionCard from "components/optionSectionCard";
export default {
  components: {OptionSectionCard},
  // name: 'ComponentName',
  setup () {
    return {}
  }
}
</script>
