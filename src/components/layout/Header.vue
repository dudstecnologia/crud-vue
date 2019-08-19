<template>
  <b-navbar id="navbar" toggleable="lg" type="dark" variant="dark">
    <div class="container">
    <b-navbar-brand href="#">CRUD</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!--
      <b-navbar-nav class="ml-auto">
        <b-nav-item :to="{ name: 'aluno' }">Aluno</b-nav-item>
        <b-nav-item :to="{ name: 'curso' }">Curso</b-nav-item>
        <b-nav-item :to="{ name: 'professor' }">Professor</b-nav-item>
        <b-nav-item @click.prevent="logout()">Logout</b-nav-item>
      </b-navbar-nav>
      -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item v-bind:class="{ active: indiceAtivo[index], 'active': rotaNormal}" :to="{ name: m.link }"  v-for="(m, index) in menus" :key="index" :value="m">{{ m.nome }}</b-nav-item>
      </b-navbar-nav>
    </b-collapse>


    </div>
  </b-navbar>
</template>

<script>
export default {
  data () {
    return {
      menus: [],
      indiceAtivo: [],
      rotaNormal: ''
    }
  },
  created () {
      this.montarMenu()
  },
  methods: {
    logout: function () {
      this.$store.dispatch('logout')
        .then(() => { this.$router.push('/') })
        .catch(error => {
          console.log(error)
          this.$router.push('/')
        })
    },
    montarMenu: function () {
      var rotaAtual = this.$router.currentRoute.name;
      console.log(rotaAtual);
      var app = this
      this.$http.get('/menu')
        .then(function (resp) {
          console.log(resp)
          app.menus = resp.data

          array.forEach(element => {

          });
        })
        .catch(function (err) {
          console.log(err)
        })
    }
  },
  computed: {
    userData: function () {
      return this.$store.getters.userData
    }
  }
}
</script>

<style>
#navbar {
  margin-bottom: 10px
}
</style>
