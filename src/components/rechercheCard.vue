<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">Rechercher un événement</div>
      <q-input rounded outlined v-model="text" label="Tapez ce que vous recherchez ici">
        <template v-slot:append>
          <q-icon name="eva-search-outline"/>
        </template>
      </q-input>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  // name: 'ComponentName',
  setup () {
    return {}
  }
}
</script>
