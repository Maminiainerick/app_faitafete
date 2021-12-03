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
          <logo-img to="/loggedin/index"/>
        </q-toolbar-title>

        <div>
          <q-btn
            round
            to="/loggedin/profile"
          >
            <q-avatar size="42px">
              <img src="https://cdn-s-www.estrepublicain.fr/images/BFFFE250-24DD-44A1-B140-6A9229B524FB/NW_raw/photo-dr-1573744884.jpg">
            </q-avatar>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
          <div class="text-weight-bold">Razvan Stoenescu</div>
          <div>@rstoenescu</div>
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
