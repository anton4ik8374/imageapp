<template>
  <v-card class="mx-5 my-5 pa-3">
    <v-row>
      <v-col
          v-for="n in 200"
          :key="n"
          cols="1"
          sm="3"
          md="2"
          lg="1"
      >
        <v-card @click="getLink">
          <v-img
              :lazy-src="`https://loremflickr.com${color}50/30/cats?lock=${n * 5 + 10}`"
              :src="`https://loremflickr.com${color}500/300/cats?lock=${n * 5 + 10}`"
              aspect-ratio="1"
              cover
          >
            <template v-slot:placeholder>
              <v-row
                  align="center"
                  class="fill-height ma-0"
                  justify="center"
              >
                <v-progress-circular
                    color="grey-lighten-5"
                    indeterminate
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'ImagesGallery',
  props: {
    color: String
  },
  methods:{
    getLink(e){
      console.log(e);
    }
  }
});
</script>
