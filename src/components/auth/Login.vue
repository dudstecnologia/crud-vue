<template>
    <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-signin my-5">
          <div class="card-body">
            <h2 class="card-title text-center">CRUD</h2>
            <form class="form-signin" @submit.prevent="login">
              <div class="form-group">
                <input type="email" v-model="user.email" id="inputEmail" class="form-control" placeholder="Email" required autofocus>
                <!-- <label for="inputEmail">e-mail</label> -->
              </div>

              <div class="form-group">
                <input type="password" v-model="user.password" id="inputPassword" class="form-control" placeholder="Senha" required>
                <!-- <label for="inputPassword">senha</label> -->
              </div>
              <button class="btn btn-primary btn-block text-uppercase" type="submit">Login</button>
              <hr class="my-4">
              <router-link to="/register" class="btn btn-info btn-block text-uppercase">Cadastre-se</router-link>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data: function () {
    return {
      user: {}
    }
  },
  methods: {
    login: function () {
      this.$store.dispatch('login', this.user)
        .then((resp) => {
          // console.log(resp.data.user)
          this.$router.push('/aluno')
        })
        .catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>
/* @import '../../assets/css/auth.css' */
</style>
