<template>
  <q-page>
    <q-card class="my-card" flat>
      <q-item>
        <q-item-section avatar>
          <q-btn round>
            <q-avatar size="100px">
              <img src="../assets/pascal.jpg">
            </q-avatar>
          </q-btn>
        </q-item-section>

        <q-item-section>
          <div class="text-h4">
            Pascal
          </div>
          <q-item-label caption class="text-italic">Bonjour je suis Pascal. Hâte de faire des soirées avec vous!
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-card>
    <div class="q-pa-md items-start">
      <q-card style="background: rgba(111,145,181,0.32)">
        <q-item>
          <q-item-section>
            <div class="text-subtitle1">
              Contact :
            </div>
            <div class="row">
              <div class="col-1">
                <q-icon name="eva-phone"/>
              </div>
              <div class="col-10">
                <div class="text-info text-black">
                  06 06 06 06 06
                </div>
              </div>
              <div class="col-1">
                <q-icon name="eva-lock" class="disabled"/>
              </div>
            </div>
            <div class="row">
              <div class="col-1">
                <q-icon name="eva-at"/>
              </div>
              <div class="col-10">
                <div class="text-info text-black">
                  pascallegrandfrere@gmail.com
                </div>
              </div>
              <div class="col-1">
                <q-icon name="eva-lock" class="disabled"/>
              </div>
            </div>
          </q-item-section>
        </q-item>
      </q-card>
    </div>
    <div class="q-pa-md items-start q-gutter-md">
      <q-card style="background: rgba(239,143,136,0.29)">
        <q-item clickable to="/loggedin/myagenda">
          <q-item-section>
            <div class="row">
              <div class="col-1">
                <q-icon name="eva-calendar"/>
              </div>
              <div class="col-11">
                <div class="text-info text-black">
                  Mon agenda
                </div>
              </div>
            </div>
          </q-item-section>
        </q-item>
      </q-card>
      <q-card style="background: rgba(111,145,181,0.32)">
        <q-item clickable to="/loggedin/myevents">
          <q-item-section>
            <div class="row">
              <div class="col-1">
                <q-icon name="eva-monitor"/>
              </div>
              <div class="col-11">
                <div class="text-info text-black">
                  Mes événements
                </div>
              </div>
            </div>
          </q-item-section>
        </q-item>
      </q-card>
      <q-card style="background: rgba(239,143,136,0.29)">
        <q-item clickable to="/message">
          <q-item-section>
            <div class="row">
              <div class="col-1">
                <q-icon name="eva-message-square"/>
              </div>
              <div class="col-11">
                <div class="text-info text-black">
                  Ma messagerie
                </div>
              </div>
            </div>
          </q-item-section>
        </q-item>
      </q-card>
    </div>
    <div class="q-pa-md q-gutter-sm">
      <q-btn color="primary" flat rounded label="Modifier le profil" to="/loggedin/modifprofile"/>
      <q-btn color="secondary" flat rounded label="Se déconnecter" to="/" @click="showNotificationDisconnect"/>
      <q-btn color="red-3" flat rounded label="Supprimer le profil" @click="customBtn"/>
    </div>

  </q-page>
</template>

<script>
import {useQuasar} from "quasar";

export default {
  // name: 'PageName',

  setup() {

    const $q = useQuasar()

    return {
      showNotificationDisconnect: function () {
        $q.notify({
          progress: true,
          message: 'Vous êtes déconnecté !',
          color: 'primary'
        })
      },
      customBtn: function () {
        $q.dialog({
          title: 'Supprimer le profil',
          message: 'Vous êtes sûr(e) de vouloir supprimer votre profil ?',
          ok: {
            push: true,
            color: 'negative',
            label: 'Oui, supprimer mon profil',
            onclick: "document.location.href=\'http://localhost:8080/#/'"
          },
          cancel: {
            push: true,
            color: 'primary',
            label: 'Annuler'
          },
          persistent: true
        }).onOk(() => {

          // console.log('>>>> OK')
        }).onCancel(() => {
          // console.log('>>>> Cancel')
        }).onDismiss(() => {
          // console.log('I am triggered on both OK and Cancel')
        })
      }
    }
  }
}
</script>
