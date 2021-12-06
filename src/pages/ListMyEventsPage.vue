<template>
  <q-page padding>
    <div class="text-primary text-center text-bold text-h5">Mes événements</div>
    <q-card bordered>
      <q-card-section>
        <div class="text-h5 text-bold">Anniversaire Johann</div>
        <div class="text-caption text-grey">
          <q-icon
            name="eva-calendar"
          />
          12 Décembre 2021
        </div>
        <div class="text-caption text-grey">
          <q-icon
            name="eva-pin"
          />
          Bar à jeux
        </div>
        <div class="text-caption text-grey">
          <q-icon
            name="eva-people"
          />
          Nombre de participants : 12
        </div>
      </q-card-section>
      <q-card-actions>
        <q-btn push size="sm" padding="sm md" rounded color="primary" label="Modifier" to="/loggedin/modification-profil"/>
        <q-btn rounded size="sm" padding="sm md" outline color="dark" label="Supprimer" @click="supprBtn"/>
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
import {ref} from 'vue'
import {useQuasar} from 'quasar'

export default {
  setup() {
    const $q = useQuasar()
    function supprBtn () {
      $q.dialog({
        title: 'Supprimer',
        message: 'Etes-vous sûr(e) de supprimer cet événement ?',
        ok: {
          push: true,
          color: 'negative',
          label: 'Oui, supprimer',
          onclick: "document.location.href=\'http://localhost:8080/#/loggedin/emptyevents'"
        },
        cancel: {
          push: true,
          label: 'Annuler'
        },
        persistent: true
      }).onOk(() => {
        // console.log('>>>> OUI')
      }).onCancel(() => {
        // console.log('>>>> Cancel')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
    }
    return {
      expanded: ref(false),
      supprBtn
    }
  }
}
</script>
