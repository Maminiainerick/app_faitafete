<template>
  <q-page>
    <q-card class="my-card" flat>
      <q-item class="justify-center">
          <q-uploader
            url="http://localhost:4444/upload"
            label="Photo de profil"
            color="primary"
            style="max-width: 70%"
          />
      </q-item>
    </q-card>
        <q-item-section>
          <div class="text-h4">
            <q-input
              label="Nom"
              v-model="name"
              class="text-h4"
            />
          </div>
          <q-input
            autogrow
            label="Description"
            v-model="description"
            class="text-italic">
          </q-input>
        </q-item-section>


    <div class="q-pa-md items-start">
      <q-card style="background: rgba(111,145,181,0.32)">
        <q-item>
          <q-item-section>
            <div class="text-subtitle1">
              Contact :
            </div>
            <div class="row">
              <div class="col-10">
                <div class="text-info text-black">
                  <q-input
                    borderless
                    v-model="phone"
                  >
                    <template v-slot:prepend>
                      <q-icon size="xs" name="eva-phone"/>
                    </template>
                  </q-input>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-10">
                <div class="text-info text-black">
                  <q-input
                    borderless
                    v-model="email">
                    <template v-slot:prepend>
                      <q-icon name="eva-at"/>
                    </template>
                  </q-input>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-10">
                <div class="text-info text-black">
                  <q-input
                    borderless
                    type="password"
                    v-model="mdp">
                    <template v-slot:prepend>
                      <q-icon name="eva-at"/>
                    </template>
                  </q-input>
                </div>
              </div>
            </div>
          </q-item-section>
        </q-item>
      </q-card>
    </div>

    <q-item class="justify-center">
      <q-btn
        class ="justify-center"
        unelevated rounded
        color="dark"
        label="Enregistrer les modifications"
        to="/modifier"
      />
    </q-item>

  </q-page>
</template>

<script>
import {ref} from 'vue'
export default {
  // name: 'PageName',
  setup(){
    return {
      name: ref('Johann'),
      description:ref('"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."'),
      phone : ref ('01 02 03 04 05'),
      email: ref ('johann@gmail.com'),
      mdp: ref('Johannlesang')
    }
  }
}
</script>
