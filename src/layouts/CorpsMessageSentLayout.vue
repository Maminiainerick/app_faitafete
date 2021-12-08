<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-item
            clickable
            to="/messagesent"
          >
            <q-avatar>
              <img src="../assets/man1.png">
            </q-avatar>
            Guy Tard
          </q-item>
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
