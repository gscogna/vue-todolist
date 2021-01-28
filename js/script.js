// Realizzare una todolist con Vue.La lista deve essere già popolata con alcuni elementi e si deve dare la possibilità di aggiungere nuovi item e di cancellarli.
//Bonus 1): permettere ai file cancellati di finire in un'area 'cestino' dove possono essere eliminati del tutto oppure ripristinati.
// Bonus 2): Dare la possibilità di eliminare tutti i file dal cestino

let app = new Vue({
    el: '#app',
    data:{
        todos:[
            'Vincere il campionato',
            'Vincere la coppa italia',
            'Vincere la supercoppa',
            'Perdere la finale di champions'
        ],
        todosCancellati:[]
    },
    methods:{
        cancellaTodo(index){
            this.todosCancellati.push(this.todos[index]);
            this.todos.splice(index,1);
        },
        
        ristoraTodo(index){
            this.todos.push(this.todosCancellati[index]);
            this.todosCancellati.splice(index, 1);
        }
    }
});