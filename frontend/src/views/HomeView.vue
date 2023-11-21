<script>
export default {
  data(){
    return {
      lista: []
    }
  },
  methods: {
    getLista(){
      this.axios.get('/lista').then(resposta => {
        this.lista = resposta.data.lista;
      });
    },
    removeItem(index){
      this.axios.delete('/remove-item', {
        data: {
          index: index
        }
      }).then(resposta => {
        if(resposta.data.sucesso){
          this.lista.splice(index, 1);
        }
      });
    }
  },
  mounted() {
    this.getLista();
  }
}
</script>

<template>
  <main>
    <table style="border-collapse: collapse">
      <thead>
      <tr>
        <th>ID</th>
        <th>Nome</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, i) in lista" :key="i">
        <td>{{ i + 1 }}</td>
        <td>{{ item }}</td>
        <td><button @click="removeItem(i)">X</button></td>
      </tr>
      </tbody>
    </table>
    <h3 v-if="lista.length === 0">Lista de nomes vazia.</h3>
  </main>
</template>

<style scoped>
td, th {
  border: 1px solid white;
  padding: 7px;
}
</style>