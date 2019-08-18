<template>
    <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-signin my-5">
          <div class="card-body">
            <h5 class="card-title text-center">CRUD</h5>
            <form class="form-signin">
              <div class="form-label-group">
                <input type="text" id="nome" class="form-control" placeholder="Email address" required autofocus>
                <label for="nome">Nome</label>
              </div>
              <div class="form-label-group">
                <input type="email" id="email" class="form-control" placeholder="Email address" required>
                <label for="email">Email</label>
              </div>
              <div class="form-label-group">
                <input type="password" id="password" class="form-control" placeholder="Password" required>
                <label for="password">Senha</label>
              </div>
              <div class="form-label-group">
                <input type="password" id="password_confirmation" class="form-control" placeholder="Password" required>
                <label for="password_confirmation">Confirma senha</label>
              </div>
              <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Cadastrar</button>
              <hr class="my-4">
              <router-link to="/login" class="btn btn-lg btn-nav btn-block text-uppercase">Voltar</router-link>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
@import '../../assets/css/auth.css'
</style>
