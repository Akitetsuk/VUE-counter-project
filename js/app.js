// Tu código aquí.

Vue.createApp({
    data() {
      return {
        counter: 0
      }
    },
  
    methods:{
        buttonPrev(){
         // TODO: Decrementar el index
         this.counter--
        
      },
      buttonNext(){
         // TODO: Incrementar el index
         this.counter++
       
      }
    
    },
  
    computed: {
      getColor() {
          if(this.counter<0){
              return 'red'
          }
          else if(this.counter>0){
              return'green'
          }
          else{
              return 'grey'
          }
        // return `url('./img/${pictures[this.index]}.jpeg')`; // tenemos que devolver un string a la ruta de la foto actual. Por ejemplo, la ruta de la primera foto es '../img/pictures[0]'
      }
    }
  
  }).mount('#app')

