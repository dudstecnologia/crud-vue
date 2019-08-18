<template>
  <div class="container">
    <h1>Tela de Aluno</h1>
    <h2>TOKEN SALVO: </h2>

    <button class="btn btn-primary" @click.prevent="salvarValor()">Salvar Valor de Teste</button>
    <button class="btn btn-primary" @click.prevent="requestTeste()">Request Teste</button>
    <button class="btn btn-primary" @click.prevent="logout()">Logout</button>
  </div>
</template>

<script>

export default {
  created () {
    // console.log('Criou o component de Aluno')
  },
  /*
  computed: {
    token () {
      // return this.$store.state.auth.token
    }
  },
  */
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
