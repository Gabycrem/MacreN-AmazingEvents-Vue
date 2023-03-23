const { createApp } = Vue;

createApp({
    data(){
        return{
            id: '',
            miObjeto: [],
            claves: [],
        }
    },
    created(){
        fetch("https://mindhub-xj03.onrender.com/api/amazing")
        .then(response => response.json())
        .then(data => {
            this.id = new URLSearchParams(location.search).get("id");
            this.miObjeto = data.events.find(objeto => objeto._id == this.id);
            this.claves = Object.keys(this.miObjeto);
            this.claves = this.claves.map(clave => clave.charAt(0).toUpperCase().concat(clave.slice(1)));
        })
        .catch(err => console.error(err));
    }
}).mount("#app")