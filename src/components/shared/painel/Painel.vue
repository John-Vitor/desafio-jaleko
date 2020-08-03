<template> 

<div id="Painel">

  </div>
</template>

<script>
export default {
  name: "Painel",
  data() {
    return {
      search: "",
    
    videos: [
      {
        title: "5 melhores livros de anatomia! - Listas Jaleko #02"
      },
      {
        title: "Chegou o novo Jaleko! Uma nova experiência em estudar Medicina!"
      },
      {
        title: "5 hipóteses diagnósticas que você pode lançar em toda sessão clínica! - Listas Jaleko #01"
      },
      {
        title: "5 lesões comuns em esportes populares - Listas Jaleko #04"
      },
      {
        title: "5 piores tipos de professores - Listas Jaleko #05"
      },
      {
        title: "5 drogas recreativas que todo médico deve conhecer - Listas Jaleko #08"
      }

    ]

    };
  },
  computed: {

        searchVideo() {
      return this.search
        ? this.videos.filter(video => {
            return video.title.includes(this.search);
          })
        : this.videos;
    }
  },
  methods: {
    getData() {}
  }
};
</script>

<style scoped> /* faz com que o valor de Css seja somente deste componente e se for levado a outro lugar, o css deste componente nao afete todo o resto da page. */



</style>
