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
              <img src="https://cdn.quasar.dev/img/avatar2.jpg">
            </q-avatar>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      id="drawer"
      show-if-above
      :width="200"
      :breakpoint="500"
      bordered
      class="bg-grey-3"
    >
      <q-card class="my-card">
        <q-card-section>
          <div class="q-pa-md">
            <div class="column" style="height: 150px">
              <div class="col-4">
                <div>
                  <q-btn
                    flat
                    round
                    v-model="leftDrawerOpen"
                    size="10px"
                  >
                    <q-avatar size="20px" icon="close">

                    </q-avatar>
                  </q-btn>
                </div>
              </div>
              <div class="col-4">
                <div>
                  <q-btn
                    round
                    to="/loggedin/profile"
                  >
                    <q-avatar size="50px">
                      <img src="https://cdn.quasar.dev/img/avatar2.jpg">
                    </q-avatar>
                  </q-btn>
                </div>
              </div>
              <div class="col-4">
                <div class=" text-h6 text-bold">
                  Johann
                </div>
                <div class="text-info">
                  <q-item clickable to="/" dense>
                    Se déconnecter
                  </q-item>
                </div>
              </div>
            </div>
          </div>
        </q-card-section>
      </q-card>
      <q-scroll-area class="fit">
        <q-list>

          <template v-for="(menuItem, index) in menuList" :key="index">
            <q-item clickable :active="menuItem.label === 'Outbox'" v-ripple>
              <q-item-section avatar>
                <q-icon :name="menuItem.icon"/>
              </q-item-section>
              <q-item-section>
                {{ menuItem.label }}
              </q-item-section>
            </q-item>
            <q-separator :key="'sep' + index" v-if="menuItem.separator"/>
          </template>

        </q-list>
      </q-scroll-area>
    </q-drawer>
    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>

import {defineComponent, ref} from 'vue'
import LogoImg from "components/logoImg";
import AvatarButton from "components/avatarButton";
import EventButton from "components/eventButton";

export default defineComponent({
  name: 'MainLayout',

  components: {
    LogoImg
  },

  setup() {
    const leftDrawerOpen = ref(false)
    const menuList = [
      {
        icon: 'calendar_today',
        label: 'Mes événements',
        separator: true
      },
      {
        icon: 'view_agenda',
        label: 'Mon agenda',
        separator: false
      },
      {
        icon: 'message',
        label: 'Ma messagerie',
        separator: false
      },
      {
        icon: 'settings',
        label: 'Paramètres',
        separator: true
      }
    ]

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      menuList
    }
  }
})
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  height: 200px
  max-width: 250px
</style>
