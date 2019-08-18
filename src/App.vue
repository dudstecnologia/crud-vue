<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  data: function () {
    return {

    }
  },
  methods: {
    /*
    verificaLogin: function () {
      var statusLogin = this.$store.getters.isLoggedIn
      if(!statusLogin) this.$router.push('/')
    } 
    */
  },
  created () {
    // this.verificaLogin()
    // console.log(`Status: ${this.$store.getters.isLoggedIn}`)
  },
  updated () {
    // this.verificaLogin()
    // console.log('Passou aqui')
  }
}
</script>

<style>
</style>
