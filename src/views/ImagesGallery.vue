<template>
  <v-card class="mx-5 my-5 pa-3">
    <v-alert v-if="alert"
        text="Ссылка на изображение скопирована в ваш буфер обмен."
        title="Информация"
        type="success"
    ></v-alert>
    <v-row>
      <v-col
          v-for="n in 200"
          :key="n"
          cols="1"
          sm="3"
          md="2"
          lg="1"
      >
        <v-card @click="copyUrl(`https://loremflickr.com${color}${w}/${h}/cats?lock=${n * 5 + 10}`)">
          <v-img
              :lazy-src="`https://loremflickr.com${color}50/30/cats?lock=${n * 5 + 10}`"
              :src="`https://loremflickr.com${color}${w}/${h}/cats?lock=${n * 5 + 10}`"
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
    color: String,
    w: {
      type: String,
      default: '500'
    },
    h: {
      type: String,
      default: '300'
    },
  },
  data: () => ({
    alert: false
  }),
  methods:{
    async copyUrl(url){
          this.alert = true;
         await navigator.clipboard.writeText(url)
    }
  },
  mounted() {
    let self = this;
     setTimeout(function(){
       if(self.alert){
         self.alert = false;
       }
     }, 5000);
  }
});
</script>
