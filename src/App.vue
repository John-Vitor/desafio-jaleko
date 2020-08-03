<template>
  <div class="app">
      <div class="header"> 
        <img class="logo-header" src="./assets/logo-jaleko.svg" alt="logo">
        <div  class="slogan">
          <h1 class="texto"> {{ titulo }} </h1> 
        </div>
      </div>
       <link href="https://fonts.googleapis.com/css2?family=Nunito:ital@1&display=swap" rel="stylesheet"> <!-- Fonte Nunito-->
        

        <div class="corpo"> <!-- Lista de videos -->
          
           <input class="filtro" type="search" v-model="search" placeholder="Busque um video">
            
            <div class="box-videos">

                <div v-for="video in searchVideo" :key="video.title"> 
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/TVrqxIbrfv8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen> </iframe>
                </div>

                <div v-for="video2 in searchVideo2" :key="video2.title">
                   <iframe width="560" height="315" src="https://www.youtube.com/embed/os6KfEpozSk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen> </iframe>
                </div>

                <div v-for="video3 in searchVideo3" :key="video3.title">
                   <iframe width="560" height="315" src="https://www.youtube.com/embed/-LA8htAdsqQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen> </iframe>
                </div>
            </div> 

           <div class="box-videos2"> 

                <div v-for="video4 in searchVideo4" :key="video4.title">  
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/TYg1ZVsWlD0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                <div v-for="video5 in searchVideo5" :key="video5.title">  
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Z0CkfBTCPYU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>  </iframe>
                </div>

                <div v-for="video6 in searchVideo6" :key="video6.title">  
                   <iframe width="560" height="315" src="https://www.youtube.com/embed/jtN4P2dBgWk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>  </iframe>
                </div>

            </div>  
       </div>

      <!-- Imagens Footer  -->
        <div class="footer">
          
              <img class="logo-footer" src="./assets/logo-footer.png" alt="logo-rodape">
            <div class="container">
              
              <a class="logo-instagram" target="_blank" href="https://www.instagram.com/jalekoacademicos/">
                <img class="logo-instagram" src="./assets/instagram.png" alt="logo-instagram">
              </a>

              <a class="logo-facebook" target="_blank" href="https://web.facebook.com/grupoJaleko/?_rdc=1&_rdr">
                <img class="logo-facebook" src="./assets/facebook.png" alt="logo-facebook">
              </a>

              <a class="logo-youtube" target="_blank" href="https://www.youtube.com/channel/UCoGDzJkGOb2YfM-VQ9rJyMg">
                <img class="logo-youtube" src="./assets/youtube.png" alt="logo-youtube">
              </a>

              <a class="logo-twitter" target="_blank" href="https://twitter.com/JalekoAcad">
                <img class="logo-twitter" src="./assets/twitter.png" alt="logo-twitter">
              </a>
            
            </div>
        </div>
        
  </div>
</template>

<script>
import Painel from './components/shared/painel/Painel.vue';
import VideoResponsivo from './components/shared/video-responsivo/videoResponsivo.vue';

export default {
  name: "Painel",
  components: {
    Painel,
    'meu-painel' : Painel, /* Nome que e utilizado no template acima */
    'video-responsivo': VideoResponsivo
  },

  name: 'app',

  data () {

    return {
      titulo: 'A MELHOR PLATAFORMA DE ENSINO PARA ESTUDANTES DE MEDICINA', 
      search: "",
     
  videos: [
      {
        title: "Chegou o novo Jaleko! Uma nova experiência em estudar Medicina!" 
      }
    ],

  videos2: [
    {
      title: "5 melhores livros de anatomia! - Listas Jaleko #02"
    },
  ],

  videos3: [
    {
      title: "5 lesões comuns em esportes populares - Listas Jaleko #04"

    },
  ],

  videos4: [
    {
      title: "Novo Jaleko! Saiba como usar"

    },
  ],

  videos5: [
    {
      title: "5 piores tipos de professores - Listas Jaleko #05"

    },
  ],

    videos6: [
    {
      title: "5 drogas recreativas que todo médico deve conhecer - Listas Jaleko #08"

    },
  ]
   
  }
    
},

    computed: {
      searchVideo() {
      return this.search
        ? this.videos.filter(video => {
            return video.title.includes(this.search);
          })
        : this.videos;
    },

      searchVideo2() {
      return this.search
        ? this.videos2.filter(video2 => {
            return video2.title.includes(this.search);
          })
        : this.videos2;
    },

      searchVideo3() {
      return this.search
        ? this.videos3.filter(video3 => {
            return video3.title.includes(this.search);
          })
        : this.videos3;
    },

      searchVideo4() {
      return this.search
        ? this.videos4.filter(video4 => {
            return video4.title.includes(this.search);
          })
        : this.videos4;
    },

      searchVideo5() {
      return this.search
        ? this.videos5.filter(video5 => {
            return video5.title.includes(this.search);
          })
        : this.videos5;
    },
    
      searchVideo6() {
      return this.search
        ? this.videos6.filter(video6 => {
            return video6.title.includes(this.search);
          })
        : this.videos6;
    }    

  },


  methods: {
    getData() {}
  }
 
};

</script>

<style> /* Css integrado com o App, pq assim se for aproveitado o codigo, o estilo tambem vai junto*/
  
  .corpo {
    font-family: 'Nunito', sans-serif;
    width: 96%;
    height: 1400px;
    margin: 0 auto;

    background-color: antiquewhite;
  }

  .slogan {
    line-height: 55px;
    
  }

  .texto {
    width: 100%;
    height: 120px;
    text-align: center;
    background-color: aqua;
    color: white;    
    
  }

/*  Css dos videos (box) */

  .box-videos {
    
    margin-left: 10%;
    padding-top: 100px;
    /* position: absolute; */

    width: 150px;
    height: 150px;
    position: relative;
    
  }

  .box-videos2 {
    float: right;
    margin-right: 35%;
    

    width: 150px;
    height: 150px;
    position: relative;
    margin-top: -149px;
    
    } 

  .app-videos{
    list-style: none;
    width: 100%;
    
  }

  .lista-videos {
    list-style: none;
  }

  .lista-videos .lista-videos-item {
    display: inline-block;
  }

.header {
    width: 96%;
    margin: 0 auto;
}

.logo-header {
  display: flex; 
  width: 11%;
  

  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
}

.filtro {
  
  width: 10%;
  float: right;
    
  padding-left:5px;
  margin-top: 15px;
  margin-right: 10px;
  font-style:italic;
  font-size:18px;
  box-sizing: border-box;
  height:32px;
  width:260px;

  border-radius:4px;
  box-shadow: 1px 1px 2px #333333;

}

/* Footer */ 

.footer {
  width: 96%;
  margin: 0 auto;
  margin-bottom: 0;

  
  bottom:0;

  padding-bottom: 10px;
  padding-top: 0px;
  background-color: #363953;

}

.logo-footer {

  display: flex; 
  width: 5%;
  
  margin-left: auto;
  margin-right: auto;
  padding-top: 2%;
  margin-bottom: 2%;
  
}

.container {
  width: 100%;
  display: table;
  text-align: center;
  justify-content: space-between;

  display: inline-block;
   
 }

.logo-instagram {
  width: 2%;
  align-items: center;
  
}

.logo-facebook {
  width: 2%;
}

.logo-youtube {
  width: 2%;
  background-color: transparent;
}

.logo-twitter {
  width: 2%;
}
</style>
