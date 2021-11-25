<template>
  <div class="q-pa-md row justify-center">
    <q-chat-message
      label="Aujourd'hui"
    />
    <div style="width: 100%; max-width: 400px">
      <q-chat-message
        name="Moi"
        avatar="https://cdn.quasar.dev/img/avatar2.jpg"
        :text="['Yo ! Bienvenu sur faitafete mon poto']"
        sent
      />
      <q-chat-message
        name="Guy"
        avatar="https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1637808837~hmac=ab0c9dcfd4826659967d2ad570ec371b"
        :text="['Yeeess ! Enfin j\'ai pu créé enfin mon compte Faitafete']"
      />
      <q-chat-message
        name="Moi"
        avatar="https://cdn.quasar.dev/img/avatar2.jpg"
        :text="['De ouf ! En plus il y a tout dessus']"
        sent
      />
      <q-chat-message
        name="Guy"
        avatar="https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1637808837~hmac=ab0c9dcfd4826659967d2ad570ec371b"
        :text="['Mais de ouf ! C\'est une grave bonne idée en vrai']"
      />
      <q-chat-message
        name="Moi"
        avatar="https://cdn.quasar.dev/img/avatar2.jpg"
        :text="['Quand est-ce qu\'on se voit du coup ?']"
        sent
      />
    </div>

  </div>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>
