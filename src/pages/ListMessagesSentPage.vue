<template>
  <q-page padding>
    <q-list>
      <q-card flat class="my-card" bordered>

        <q-item
          clickable
          to="/corps"
        >

          <q-item-section avatar>
            <q-avatar>
              <img src="../assets/man1.png">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label >Guy Tard</q-item-label>
            <q-item-label caption>
              Vous : Ça marche ! Merci !
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-separator />

        <q-item
          clickable
          to="/corps"
        >
          <q-item-section avatar>
            <q-avatar>
              <img src="../assets/woman1.png">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>Lara Clette</q-item-label>
            <q-item-label caption>
              Bonjour je vous contacte par rapport à ...
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-separator />

        <q-item
          clickable
          to="/corps"
        >
          <q-item-section avatar>
            <q-avatar>
              <img src="../assets/man2.png">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>Abel Hauboisdormant</q-item-label>
            <q-item-label caption>
              Vous : C'est noté !
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-separator />

        <q-item
          clickable
          to="/corps"
        >
          <q-item-section avatar>
            <q-avatar>
              <img src="../assets/man3.png">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>Edmond Prochain</q-item-label>
            <q-item-label caption>
              Merci !
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-separator />

        <q-item
          clickable
          to="/corps"
        >
          <q-item-section avatar>
            <q-avatar>
              <img src="../assets/woman2.png">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>Adèle Taplane</q-item-label>
            <q-item-label caption>
              Je voudrais avoir plus d'informations sur...
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-separator />

        <q-item
          clickable
          to="/corps"
        >
          <q-item-section avatar>
            <q-avatar>
              <img src="../assets/man4.png">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>Thibauld Lognaise</q-item-label>
            <q-item-label caption>
              Nickel, tu gères !
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-separator />

        <q-item
          clickable
          to="/corps"
        >
          <q-item-section avatar>
            <q-avatar>
              <img src="../assets/woman3.png">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>Edith Moitou</q-item-label>
            <q-item-label caption>
              Vous : C'est noté !
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-separator />

        <q-item
          clickable
          to="/corps"
        >
          <q-item-section avatar>
            <q-avatar>
              <img src="../assets/man5.png">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>Jean Tanlelou</q-item-label>
            <q-item-label caption>
              Vous : Dommage, merci quand même !
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-separator />

        <q-item
          clickable
          to="/corps"
        >
          <q-item-section avatar>
            <q-avatar>
              <img src="../assets/woman4.png">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>Bénédicte Ature</q-item-label>
            <q-item-label caption>
              Vous : C'est noté !
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-separator />

        <q-item
          clickable
          to="/corps"
        >
          <q-item-section avatar>
            <q-avatar>
              <img src="../assets/man6.png">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>Jacques Ouzi</q-item-label>
            <q-item-label caption>
              <div class="text text-italic">Ce message a été supprimé</div>
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-separator />

      </q-card>
    </q-list>
  </q-page>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      active: ref(true)
    }
  }
}
</script>
