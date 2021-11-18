<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="row justify-center">
          <logo-img/>
        </q-toolbar-title>

        <div>
          <avatar-button></avatar-button>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Fai'ta'fête
        </q-item-label>
        <q-item-section>
          <q-item
            clickable
            v-ripple
          >
            <event-button/>
            <q-item-section>
              Mes événements
            </q-item-section>
          </q-item>
          <q-item>

          </q-item>
        </q-item-section>

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

import { defineComponent, ref } from 'vue'
import LogoImg from "components/logoImg";
import AvatarButton from "components/avatarButton";
import EventButton from "components/eventButton";

export default defineComponent({
  name: 'MainLayout',

  components: {
    EventButton,
    AvatarButton,
    LogoImg
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
