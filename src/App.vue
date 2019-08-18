<template>
  <div id="app">
    <Header v-if="isLoggedIn" />
    <router-view />
  </div>
</template>

<script>
import Header from './components/layout/Header'
export default {
  name: 'App',
  data: function () {
    return {

    }
  },
  computed: {
    isLoggedIn : function(){ return this.$store.getters.isLoggedIn }
  },
  components: {
    Header
  }
}
</script>

<style>
</style>
