<template>
    <div class="text-h6">Découvrir des événements</div>
    <q-chip
      v-model:selected="event.Recent"
      color="primary"
      text-color="white"
      icon="eva-clock-outline"
      size="sm"
    >
      Ajoutés récemment
    </q-chip>
    <q-chip
      v-model:selected="event.Semaine"
      color="primary"
      text-color="white"
      icon="eva-calendar-outline"
      size="sm"
    >
      Cette semaine
    </q-chip>
    <q-chip
      v-model:selected="event.Proximite"
      color="primary"
      text-color="white"
      icon="eva-pin-outline"
      size="sm"
    >
      A proximité
    </q-chip>
</template>

<script>
export default {
  // name: 'ComponentName',
  setup () {
    return {}
  }
}
</script>
