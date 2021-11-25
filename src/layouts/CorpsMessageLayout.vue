<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-item
            clickable
            to="/message"
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

    <q-footer class="bg-white">
      <div class="row">
        <div class="col-3">
          <q-btn flat icon="chevron_right"/>
        </div>
        <div class="col-8">
          <q-input rounded outlined v-model="text">
            <template v-slot:append>
              <q-btn round icon="send" color="primary"/>
            </template>
          </q-input>
        </div>
      </div>
    </q-footer>


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
