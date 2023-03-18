const { createApp } = Vue;

createApp({ //método que recibe un Onjeto...
    data(){ //que tiene una propiedad Data, que es un método, que 
        return{         //retorna un Objeto. Acá vamos a definir las        
            mensaje: "Hola mundo",   //propiedades que vamos a usar en el html
            miObjetoCompleto: [],
            miObjeto: [],
            inputSearch: '',
            filtrarPorSearch: [],
        }
    },
    created(){
        fetch("https://mindhub-xj03.onrender.com/api/amazing")
        .then(response => response.json())
        .then(data =>{ 
            this.miObjetoCompleto = data;
            this.miObjeto = data.events; 
            console.log(this.miObjeto)
            //console.log(this.miObjetoCompleto);
            //setTimeout(()=>this.mensaje = "AMAZING EVENTS", 2000)
            
        })
        .catch(err => console.error(err)) ;
    },
    methods: {
        filtrarInputTxt: function filtro(){
            this.filtrarPorSearch = this.miObjeto.filter(objeto => objeto.name.toLowerCase().includes(this.inputSearch.toLowerCase()));
            console.log(this.filtrarPorSearch);
        }
    }
}).mount("#app");