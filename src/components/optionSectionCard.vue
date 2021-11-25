<template>
  <div class="q-pa-md">
    <q-btn-dropdown
      color="primary"
      >
      <q-list>
        <q-item
          clickable
          v-close-popup
          @click="onItemClick"
          to="/loggedin/createvents"
        >
          <q-item-section>
            <q-item-label>Créer un événement</q-item-label>
          </q-item-section>
        </q-item>

        <q-item
          clickable
          v-close-popup
          @click="onItemClick"
          to="/loggedin/myevents"
        >
          <q-item-section>
            <q-item-label>Mon agenda</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  setup () {
    return {
      onItemClick () {

      }
    }
  }
}
</script>
