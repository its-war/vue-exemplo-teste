<template>
  <div class="about">
    <label for="nome">Nome</label>
    <input id="nome" type="text" v-model="nome" @keyup.enter.prevent="enviar"/>
    <button type="button" @click="enviar">Enviar</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      nome: ''
    }
  },
  methods: {
    enviar(){
      if(this.nome.length > 0){
        this.axios.post('/new-item', {item: this.nome}).then(resposta => {
          if(resposta.data.sucesso){
            this.nome = '';
          }
        });
      }
    }
  }
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
