<script>

export default {
  name: "SideBare",
  data: () => ({
    urlUser: new URL("@/assets/users/1.webp", import.meta.url).href,
    email: "anton4ik2251@yandex.ru",
    title: "Кривчик Антон"
  }),
}
</script>

<template>
    <v-navigation-drawer
        expand-on-hover
        rail
    >
      <v-list>
        <v-list-item
            :prepend-avatar="urlUser"
            :subtitle="email"
            :title="title"
        ></v-list-item>
      </v-list>

      <v-divider/>
      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-image" color="indigo" title="Color" to="/"></v-list-item>
        <v-list-item prepend-icon="mdi-dialpad" color="gray" title="Gray" to="/gray"></v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<style scoped>

</style>