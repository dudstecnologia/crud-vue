<template>
  <div class="container">
    <div class="row">
        <div class="col-sm">
            <h2>Aluno</h2>
        </div>
        <div class="col-sm-alto">
            <b-button @click="openModal(null)" variant="primary">Cadastrar Novo</b-button>
            <a class="btn btn-success" href="">Relatorio</a>
        </div>
    </div>
    <b-modal id="modal-1" ref="modal" size="lg" title="Cadastro" hide-footer>
      <form v-on:submit.prevent="formAluno()">
        <!--
        <b-form-group label="Nome">
          <b-form-input id="nome" v-model="aluno.nome" required></b-form-input>
        </b-form-group>
        -->
        <div class="row">
          <div class="col-sm-5">
              <label>Nome</label>
              <input type="text" class="form-control" v-model="aluno.nome" required>
          </div>
          <div class="col-sm-3 col-md-3">
              <label>Data de Nascimento</label>
              <input type="date" class="form-control" v-model="aluno.data_nascimento" required>
          </div>
          <div class="col-sm-4">
              <label>Curso</label>
              <select class="form-control" v-model="aluno.id_curso" required>
                <option value="5">Professor 5</option>
              </select>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-2">
            <label>Cep</label>
            <input type="text" class="form-control" id="cep" v-model="aluno.cep" v-on:blur="buscaCep()">
          </div>
          <div class="col-sm-4">
            <label>Logradouro</label>
            <input type="text" class="form-control" id="logradouro" v-model="aluno.logradouro">
          </div>
          <div class="col-sm-2">
            <label>Número</label>
            <input type="text" class="form-control" id="numero" v-model="aluno.numero">
          </div>
          <div class="col-sm-4">
            <label>Bairro</label>
            <input type="text" class="form-control" id="bairro" v-model="aluno.bairro">
          </div>
        </div>

        <div class="row">
          <div class="col-sm-4">
            <label>Cidade</label>
            <input type="text" class="form-control" id="cidade" v-model="aluno.cidade">
          </div>

          <div class="col-sm-4">
            <label>Estado</label>
            <input type="text" class="form-control" id="estado" v-model="aluno.estado">
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <p class="text-danger" id="alerta-cep">{{ erro_cep }}</p>
          </div>
        </div>

        <div class="text-right">
          <b-button type="submit" class="btn btn-success">Salvar</b-button>
        </div>
      </form>
    </b-modal>

    <div class="row">
      <table class="table table-bordered table-striped">
          <thead class="thead-dark">
              <tr>
              <th>Nome</th>
              <th>Curso</th>
              <th> </th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="(a, index) in alunos" :key="index" :value="a.id">
                  <td>{{ a.nome }}</td>
                  <td>{{ a.cursos[0].nome }}</td>
                  <td>
                      <button class="btn btn-sm btn-info"
                          @click="openModal(a.id)">
                              Editar
                          </button>

                      <click-confirm id="clickconfirm"
                          :messages="{title: 'Deseja mesmo excluir?', yes: 'Sim', no: 'Não'}"
                          yes-class="btn btn-danger" >

                          <button class="btn btn-sm btn-danger"
                          @click="deleteAluno(a.id, index)">
                              Excluir
                          </button>

                      </click-confirm>
                  </td>
              </tr>
          </tbody>
      </table>
    </div>

    {{ aluno.cep }}

  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      id: null,
      cursos: [],
      alunos: [],
      aluno: {},
      erro_cep: ''
    }
  },
  created () {
    this.getDados()
  },
  methods: {
    getDados () {
      var app = this
      this.$http.get('/aluno')
        .then(function (resp) {
          app.cursos = resp.data.cursos
          app.alunos = resp.data.alunos
        })
        .catch(function (err) {
          console.log(err)
        })
    },
    buscaCep () {
      var app = this
      var cep = this.aluno.cep

      axios.get(`http://api.postmon.com.br/v1/cep/${cep}`)
        .then(response => {
          console.log(response.data)
          /*
          var end = response.data

          app.aluno.logradouro = end.logradouro
          app.aluno.bairro = end.bairro
          app.cidade = end.cidade
          app.estado = end.estado_info.nome
          app.erro_cep = ''
          // $("#numero").focus();
          */
        })
        .catch(function () {
          app.erro_cep = 'Endereço não encontrado'
        })
    },
    gerarRelatorio () {
      this.$http.get('/relatorio')
        .then(response => {
          console.log(response.data)
        })
        .catch(function () {
          console.log('Erro ao gerar')
        })
    },
    deleteAluno (id, index) {
      var app = this
      this.$http.delete('/aluno/' + id)
        .then(function (resp) {
          app.alunos.splice(index, 1)
          app.toastSuccess('Aluno excluído com sucesso')
        })
        .catch(function (resp) {
          app.toastError('Ocorreu um erro ao excluir')
        })
    },
    formAluno () {
      // console.log(this.aluno)
      var app = this

      var url, method
      app.id ? method = 'put' : method = 'post'
      app.id ? url = `/aluno/${this.id}` : url = '/aluno'

      this.$http({
        method: method,
        url: url,
        data: {
          nome: app.aluno.nome,
          data_nascimento: app.aluno.data_nascimento,
          id_curso: app.aluno.id_curso,
          cep: app.aluno.cep,
          logradouro: app.aluno.logradouro,
          numero: app.aluno.numero,
          bairro: app.aluno.bairro,
          cidade: app.aluno.cidade,
          estado: app.aluno.estado
        }
      })
        .then(function (resp) {
          // console.log(resp.data);
          // app.getDados()

          app.aluno = []

          app.$refs.modal.hide()
          app.toastSuccess('Aluno salvo com sucesso')
        })
        .catch(function (err) {
          console.log(err)
          app.$refs.modal.hide()
          app.toastError('Ocorreu um erro ao salvar')
        })
    },
    openModal (id) {
      if (!id) {
        this.professor = []
        this.id = null
        this.$refs.modal.show()
      } else {
        this.id = id
        var app = this

        this.$http.get(`/aluno/${id}`)
          .then(function (resp) {
            app.curso = resp.data
            app.$refs.modal.show()
          })
          .catch(function (resp) {
            // console.log("Ocorreu um erro");
            app.toastError('Ocorreu um erro ao selecionar')
          })
      }
    },
    toastSuccess ($msg) {
      this.$notification.success($msg, { timer: 5, showLeftIcn: false })
    },
    toastError ($msg) {
      this.$notification.error($msg, { timer: 5, infiniteTimer: false, showLeftIcn: false })
    }
    /*
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
    */
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#clickconfirm {
  display: inline;
}
</style>
