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
      tokenValidate: true,
      user_data: ''
    }
  },
  methods: {
    async validateToken () {
      this.tokenValidate = true

      const json = localStorage.getItem(userKey)
      const userData = JSON.parse(json)
      this.$store.commit('setUser', null)

      if (!userData) {
        console.log('Não tem usuário salvo')
        this.tokenValidate = false
        this.$router.push({ path: '/' })
        return
      }

      this.user_data = userData

      console.log('Tem usuário salvo')
      const res = await axios.get(`${baseApiUrl}/user`)

      console.log(res.data)
    }
  },
  created () {
    // this.validateToken()
    // this.user_data = this.$store.state.user
    /*
    axios.get(`${baseApiUrl}/user`)
      .then(res => {
        console.log(res.data)
      }).catch(function (error) {
        console.log(error)
      })
      */
  },
  updated () {
    // console.log('Passou aqui')
  }
}
</script>

<style>
</style>
