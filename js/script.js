// Realizzare una todolist con Vue.La lista deve essere già popolata con alcuni elementi e si deve dare la possibilità di aggiungere nuovi item e di cancellarli.
//Bonus 1): permettere ai file cancellati di finire in un'area 'cestino' dove possono essere eliminati del tutto oppure ripristinati.
// Bonus 2): Dare la possibilità di eliminare tutti i file dal cestino

let app = new Vue({
    el: '#app',
    data:{
        newTodo: ' ',
        todos:[
            'Vincere il campionato',
            'Vincere la coppa italia',
            'Vincere la supercoppa',
            'Perdere la finale di champions'
        ],
        todosCancellati:[]
    },
    methods:{
        aggiungiTodo() {
            if (this.newTodo.length < 4) {
                alert('lunghezza minore di 4 caratteri ')
            } else {
                this.todos.push(this.newTodo);
                this.newTodo = ' ';
            }
        },

        cancellaTodo(index){
            this.todosCancellati.push(this.todos[index]);
            this.todos.splice(index,1);
        },
        
        ristoraTodo(index){
            this.todos.push(this.todosCancellati[index]);
            this.todosCancellati.splice(index, 1);
        },

        cancellaTrash(index){
            this.todosCancellati.splice(index, 1);
        },

        eliminaTutto(){
            this.todosCancellati = [];
        }
    }
});



// ew Vue({
//     el: '#app',
//     data: {
//         todos: [
//             { title: 'one value', edit: false },
//             { title: 'one value', edit: false },
//             { title: 'otro titulo', edit: false }
//         ],
//         editedTodo: null,
//         message: 'Hello Vue.js!'
//     },
//     methods: {
//         editTodo: function (todo) {
//             this.editedTodo = todo
//         }
//     },
//     directives: {
//         focus: {
//             inserted(el) {
//                 el.focus()
//             }
//         }
//     }
// })
// HTML

//     < div id = "app" >
//         Click the values to edit!
//             < ul class="todo-list" >
//                 <li v-for="todo in todos">
//                     <input
//                         v-if="todo.edit"
//                         v-model="todo.title"
//                 @blur="todo.edit = false; $emit('update')"
//                 @keyup.enter="todo.edit=false; $emit('update')"
//                 v-focus
//             >
//             <div v-else>
//                         <label @{{ todo.title }} </label>
//             </div>
//         </li >
//     </ >
// </div >