<template>
  <v-app>
    <v-main>
      <Header></Header> 
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

import Header from '@/layout/Header';

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>
