<template>
    <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-signin my-5">
          <div class="card-body">
            <h2 class="card-title text-center">CRUD</h2>
            <form class="form-signin" @submit.prevent="register()">
              <div class="form-group">
                <input type="text" v-model="user.name" id="nome" class="form-control" placeholder="Nome" required autofocus>
              </div>
              <div class="form-group">
                <input type="email" v-model="user.email" id="email" class="form-control" placeholder="Email" required>
              </div>
              <div class="form-group">
                <input type="password" v-model="user.password" id="password" class="form-control" placeholder="Senha" required>
              </div>
              <div class="form-group">
                <input type="password" v-model="user.password_confirmation" id="password_confirmation" class="form-control" placeholder="Confirma senha" required>
              </div>
              <button class="btn btn-primary btn-block text-uppercase" type="submit">Cadastrar</button>
              <hr class="my-4">
              <router-link to="/" class="btn btn-info btn-block text-uppercase">Voltar</router-link>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Register',
  data: function () {
    return {
      user: {}
    }
  },
  methods: {
    register: function () {
      this.$store.dispatch('register', this.user)
        .then(() => this.$router.push('/aluno'))
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style>
/* @import '../../assets/css/auth.css' */
</style>
