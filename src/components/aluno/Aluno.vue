<template>
  <div class="container">
    <h1>Aluno</h1>
    <!--
    <button class="btn btn-primary" @click.prevent="salvarValor()">Salvar Valor de Teste</button>
    <button class="btn btn-primary" @click.prevent="requestTeste()">Request Teste</button>
    <button class="btn btn-primary" @click.prevent="logout()">Logout</button>
    -->
  </div>
</template>

<script>

export default {
  created () {
  },
  methods: {
    requestTeste () {
      this.$http.get(`/teste`).then(res => {
        console.log(res.data)
      }).catch(function (error) {
        console.log(error)
      })
    },
    logout: function () {
      this.$store.dispatch('logout')
        .then(() => { this.$router.push('/') })
        .catch(error => {
          console.log(error)
          this.$router.push('/')
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* @import '../../assets/css/default.css' */
</style>
