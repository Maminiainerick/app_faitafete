<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          <q-item
            clickable
            to="/loggedin/profilesent"/>
          Messagerie
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view/>
    </q-page-container>

  </q-layout>
</template>

<script>
import {ref} from 'vue'

export default {
  // name: 'LayoutName',

  setup() {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>
