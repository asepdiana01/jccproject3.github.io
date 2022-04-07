<style>
  @import 'https://fonts.googleapis.com/css?family=Lato:100,300,400,500,700,900';
  @import './assets/css/style.css';
</style>

<template>
  <v-app>
    <Dialog />

    <v-main class="grey lighten-2">
        <v-slide-x-transition leave-absolute>
          <router-view />
        </v-slide-x-transition>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {
    Dialog : () => import(/* webpackChunkName: "about" */ './components/Dialog.vue')
  },
};
</script>