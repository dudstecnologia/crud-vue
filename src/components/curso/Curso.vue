<template>
  <div class="container">
    <div class="row">
        <div class="col-sm">
            <h2>Curso</h2>
        </div>
        <div class="col-sm-alto">
            <b-button @click="openModal(null)" variant="primary">Cadastrar Novo</b-button>
        </div>
    </div>

    <b-modal id="modal-1" ref="modal" title="Cadastro" hide-footer>
      <form v-on:submit.prevent="formCurso()">
        <b-form-group label="Nome">
          <b-form-input id="nome" v-model="curso.nome" required></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-3"
          label="Professor"
          label-for="input-3">
						<b-form-select
                id="input-3"
                v-model="curso.id_professor"
                required>
						      <option v-for="(p, index) in professores" :key="index" v-bind:value="p.id" :selected="p.id">{{ p.nome }}</option>
						</b-form-select>
				</b-form-group>

        <div class="text-right">
          <b-button type="submit" class="btn btn-success">Salvar</b-button>
        </div>
      </form>
    </b-modal>

  </div>
</template>

<script>
export default {
  data () {
    return {
      id: null,
			professores: [],
			cursos: [],
      curso: {},
    };
  },
  created () {
    this.getDados()
  },
  methods: {
    getDados () {
      var app = this;
      this.$http.get('/curso')
        .then( function (resp) {

          console.log(resp.data)

          // console.log(resp.data.professores);
          // console.log(resp.data.cursos);

          app.professores = resp.data.professors;
          // app.cursos = resp.data.cursos;
        })
        .catch(function (err) {
          console.log(err)
        })
    },
    formCurso () {
      var app = this
      // var url = '/desafio2/api/curso'
      // if(this.id) url = `/desafio2/api/curso/${this.id}`

      var url, method

      app.id ? method = 'put' : method = 'post'
      app.id ? url = `/curso/${this.id}` : url = '/curso'

      this.$http({
        method: method,
        url: url,
        data: {
          nome: app.curso.nome,
          id_professor: app.curso.id_professor
        }
      })
        .then(function (resp) {
          // console.log(resp.data.retorno);
          app.getDados()

          app.curso = []

          app.$refs.modal.hide()
          app.toastSuccess('Curso salvo com sucesso')
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
        this.$http.get(`/curso/${id}`)
          .then(function (resp) {
            // console.log(resp.data);
            app.professores = resp.data.professores
            app.curso.nome = resp.data.curso.nome
            app.curso.id_professor = resp.data.curso.id_professor_encrypt

            app.$refs.modal.show()

            // app.toastError(`${resp.data.retorno}`)
          })
          .catch(function (resp) {
            // console.log("Ocorreu um erro");
            app.toastError(`${resp.data.retorno}`)
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* @import '../../assets/css/default.css' */
</style>
