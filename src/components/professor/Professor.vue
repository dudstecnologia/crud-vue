<template>
  <div class="container">
    <div class="row">
        <div class="col-sm">
            <h2>Professor</h2>
        </div>
        <div class="col-sm-alto">
            <b-button @click="openModal(null)" variant="primary">Cadastrar Novo</b-button>
        </div>
    </div>
    <b-modal id="modal-1" ref="modal" title="Cadastro" hide-footer>
      <form v-on:submit.prevent="formProfessor()">
        <b-form-group label="Nome">
            <b-form-input
            id="nome"
            v-model="professor.nome"
            required
            ></b-form-input>
        </b-form-group>

        <b-form-group label="Data de Nascimento">
            <b-form-input
            id="data_nascimento"
            v-model="professor.data_nascimento"
            type="date"
            required
            ></b-form-input>
        </b-form-group>

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
              <th>Data de Nascimento</th>
              <!-- <th>Data de Criação</th> -->
              <th>Opções</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="(p, index) in professores" :key="index" :value="p.id_encrypt">
                  <td>{{ p.nome }}</td>
                  <td>{{ p.data_nascimento | moment("DD/MM/YYYY") }}</td>
                  <!-- <td>{{ p.data_criacao }}</td> -->
                  <td>
                      <button class="btn btn-sm btn-info"
                          @click="openModal(p.id)">
                              Editar
                          </button>

                      <click-confirm id="clickconfirm"
                          :messages="{title: 'Deseja mesmo excluir?', yes: 'Sim', no: 'Não'}"
                          yes-class="btn btn-danger" >

                          <button class="btn btn-sm btn-danger"
                          @click="deleteProfessor(p.id, index)">
                              Excluir
                          </button>

                      </click-confirm>
                  </td>
              </tr>
          </tbody>
        </table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      id: null,
      professores: [],
      professor: {}
    }
  },
  created () {
    this.getProfessores()
  },
  methods: {
    getProfessores () {
      var app = this
      this.$http.get('/professor')
        .then(function (resp) {
          app.professores = resp.data
          // console.log(resp.data)
        })
        .catch(function () {
          // console.log(error)
        })
    },
    deleteProfessor (id, index) {
      var app = this
      this.$http.delete('/professor/' + id)
        .then(function (resp) {
          app.professores.splice(index, 1)

          app.toastSuccess('Professor excluído com sucesso')
        })
        .catch(function () {
          app.toastError('Ocorreu um erro ao excluir')
        })
    },
    formProfessor: function () {
      var app = this

      var url, method

      app.id ? method = 'put' : method = 'post'
      app.id ? url = `/professor/${this.id}` : url = '/professor'

      this.$http({
        method: method,
        url: url,
        data: {
          nome: app.professor.nome,
          data_nascimento: app.professor.data_nascimento
        }
      })
        .then(function (resp) {
          // console.log(resp.data)

          app.getProfessores()
          app.professor = []
          app.$refs.modal.hide()

          app.toastSuccess('Professor Cadastrado com sucesso')
        })
        .catch(function () {
          // console.log(err)

          app.$refs.modal.hide()
          app.toastError('Ocorreu um erro ao cadastrar')
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
        this.$http.get(`/professor/${id}`)
          .then(function (resp) {
            app.professor = resp.data
            app.$refs.modal.show()
          })
          .catch(function () {
            app.toastError('Erro ao buscar os dados do professor')
          })
      }
    },
    toastSuccess ($msg) {
      this.$notification.success($msg, { timer: 5, showLeftIcn: false })
    },
    toastError ($msg) {
      this.$notification.error($msg, { timer: 5, infiniteTimer: false, showLeftIcn: false })
    }
  }
}
</script>

<style scoped>
#clickconfirm {
  display: inline;
}
</style>
