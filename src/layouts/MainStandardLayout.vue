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
          <q-btn
            round color="primary"
            icon="eva-person-outline"
            to="login"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-img
        class="absolute-top"
        style="height: 150px">
        <div class="absolute-bottom bg-blue-1">
          <q-btn
            round
            flat
            color="primary"
            icon="eva-person-outline"
            to="login"
          />
          <div
            class="text-weight-bold text-primary"
          >
            <q-btn flat to="login" no-caps>Se connecter</q-btn>
          </div>
          <div
            class="text-info text-black text-weight-regular">
            Pas encore de compte ?
          </div>
          <div
            class="text-info
                   text-black
                   text-weight-regular
                   text-italic"
            >
            <q-btn flat to="login/signUp" no-caps>Inscrivez-vous</q-btn>
          </div>
        </div>
      </q-img>
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
