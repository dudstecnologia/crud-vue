<template>
    <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-signin my-5">
          <div class="card-body">
            <h2 class="card-title text-center">CRUD</h2>
            <form class="form-signin">
              <div class="form-group">
                <input type="text" id="nome" class="form-control" placeholder="Nome" required autofocus>
                <!-- <label for="nome">Nome</label> -->
              </div>
              <div class="form-group">
                <input type="email" id="email" class="form-control" placeholder="Email" required>
                <!-- <label for="email">Email</label> -->
              </div>
              <div class="form-group">
                <input type="password" id="password" class="form-control" placeholder="Senha" required>
                <!-- <label for="password">Senha</label> -->
              </div>
              <div class="form-group">
                <input type="password" id="password_confirmation" class="form-control" placeholder="Confirma senha" required>
                <!-- <label for="password_confirmation">Confirma senha</label> -->
              </div>
              <button class="btn btn-primary btn-block text-uppercase" type="submit">Cadastrar</button>
              <hr class="my-4">
              <router-link to="/login" class="btn btn-info btn-block text-uppercase">Voltar</router-link>
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
/* @import '../../assets/css/auth.css' */
</style>
