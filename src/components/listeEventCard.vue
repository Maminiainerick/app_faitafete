<template>
  <q-card>
    <q-card-section>
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
    </q-card-section>
    <q-card-section class="q-pa-md row items-start q-gutter-md">

      <q-card class="my-card">
        <q-img src="https://cdn.quasar.dev/img/parallax2.jpg"/>
        <q-card-section>
          <div class="text-subtitle5">Conférence avec Emmanuel Macron</div>
          <div class="text">Samedi 20 nov</div>
        </q-card-section>
      </q-card>

      <q-card class="my-card">
        <q-img src="https://cdn.quasar.dev/img/mountains.jpg"/>
        <q-card-section>
          <div class="text-subtitle5">Randonnée en montagne</div>
          <div class="text">Jeudi 18 nov</div>
        </q-card-section>
      </q-card>

      <q-card class="my-card">
        <q-img src="https://cdn.quasar.dev/img/parallax2.jpg"/>
        <q-card-section>
          <div class="text-subtitle5">Conférence avec Emmanuel Macron</div>
          <div class="text">Samedi 20 nov</div>
        </q-card-section>
      </q-card>

      <q-card class="my-card">
        <q-img src="https://cdn.quasar.dev/img/mountains.jpg"/>
        <q-card-section>
          <div class="text-subtitle5">Randonnée en montagne</div>
          <div class="text">Jeudi 18 nov</div>
        </q-card-section>
      </q-card>

    </q-card-section>

  </q-card>
</template>

<script>
import { reactive, computed } from 'vue'

export default {
  setup () {
    const event = reactive({
      Recent: false,
      Semaine: false,
      Proximite: false
    })

    return {
      event,
      selection: computed(() => {
        return Object.keys(event)
          .filter(type => event[ type ] === true)
          .join(', ')
      })
    }
  }
}
</script>
<style lang="sass" scoped>
.my-card
  width: 45%
  max-width: 50%
</style>
