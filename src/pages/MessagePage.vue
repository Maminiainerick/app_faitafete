<template>
  <div class="q-pa-md row justify-center fixed-bottom">
    <q-chat-message
      label="Aujourd'hui"
    />
    <div style="width: 100%; max-width: 400px">
      <q-chat-message
        name="Guy"
        avatar="../assets/man1.png"
        :text="['Salut Johann ! J\'ai vu ton anniversaire dans la liste des événements du coup je me suis inscrit ! Tu veux qu\'on emmène quelque chose en particulier pour la soirée ou pas ?']"
      />
      <q-chat-message
        name="Moi"
        avatar="https://cdn.quasar.dev/img/avatar2.jpg"
        :text="['Hey ! Tout sera pris en charge, j\'ai pris un traiteur. Je voudrai juste savoir si tu viens accompagné ou pas ?']"
        sent
      />
      <q-chat-message
        name="Guy"
        avatar="../assets/man1.png"
        :text="['Ok d\'accord ! Je serai avec ma copine, si ça ne te dérange pas, donc on sera 2 à venir !']"
      />
    </div>
    <div class="row items-center">
      <q-input rounded v-model="myText" outlined id="messagecontent">
        <template v-slot:append>
          <q-btn round icon="send" color="primary" to="/corpsent/sent"/>
        </template>
      </q-input>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'

export default {
  setup() {
    return {
      avatar: ref(''),
      myText: ref(''),

      sendMessage: function () {
        let messagetext = document.getElementById('f_317e34ac-a82e-4f0d-afde-f434051ea6da');
        //let newMessage;
        //newMessage = document.createElement('q-chat-message',{name:'Moi', avatar:'https://cdn.quasar.dev/img/avatar2.jpg', text:this.messagetext});
        console.log(messagetext);
      }
    }
  }
  // name: 'PageName',
}
</script>
