<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md q-gutter-sm">
      <q-btn color="primary" text-color="black" label="Standard" />
      <q-btn color="secondary" label="Primary" />
      <q-btn color="accent" label="Secondary" />
      <q-btn color="dark" label="Amber" />
      <q-btn color="positive" label="Brown 5" />
      <q-btn color="negative" label="Deep Orange" />
      <q-btn color="info" label="Purple" />
      <q-btn color="warning" label="Black" />
      <q-btn color="another" text-color="black" label="Deep Orange" />
      <q-btn color="other" text-color="black" label="Purple" />
      <q-btn color="morning" text-color="black" label="Black" />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  components: {}
})
</script>
