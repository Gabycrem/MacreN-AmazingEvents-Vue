const { createApp } = Vue;

createApp({                 
    data(){                
        return{                  
            currentDate: undefined,
            miObjeto: [],
            miObjetoFiltrado: [],
            categorias: [],
            inputSearch: '',
            filtrarPorSearch: [],
            checked : [],
        }
    },
    created(){
        fetch("https://mindhub-xj03.onrender.com/api/amazing")
        .then(response => response.json())
        .then(data =>{ 
            this.currentDate = new Date(data.currentDate);
            this.miObjeto = data.events;
            this.miObjeto = this.miObjeto.filter(objeto => {
                const eventDate = new Date(objeto.date);
                return eventDate > this.currentDate
            })  
            this.miObjetoFiltrado = this.miObjeto;    
            this.categorias = [... new Set(this.miObjeto.map(elemento => elemento.category))];
        })
        .catch(err => console.error(err)) ;
    },
    methods: {
        filtrar(){
            this.miObjetoFiltrado = this.miObjeto.filter( objeto => {
                return (this.checked.includes(objeto.category) || this.checked.length === 0) && objeto.name.toLowerCase().includes(this.inputSearch.toLowerCase())
            }
            )
        }
    }
}).mount("#app");