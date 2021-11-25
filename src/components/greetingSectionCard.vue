<template>
  <q-card>
    <q-card-section>
      <div class="row">
        <div class="col">
          <div class="text-h5 text-bold">
            Bonjour,<br>Johann
          </div>
        </div>
        <div class="col">
          <option-section-card/>
        </div>
      </div>
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
