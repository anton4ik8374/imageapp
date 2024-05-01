<template>
  <v-app>
    <SideBare/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import SideBare from './components/SideBare.vue';
export default {
  name: 'App',
  components:{SideBare},
  data: () => ({
    //
  }),
}
</script>
