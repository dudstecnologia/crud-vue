<template>
  <div class="container">
    <div class="row">
        <div class="col-sm">
            <h2>Aluno</h2>
        </div>
        <div class="col-sm-alto">
            <b-button @click="openModal(null)" variant="primary">Cadastrar Novo</b-button>
        </div>
    </div>


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
#clickconfirm {
  display: inline;
}
</style>
