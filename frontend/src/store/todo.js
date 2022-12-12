import axios from "axios";

export let ToDoDataStore = {
    state() {
        return {
            todo: []
        }
    },
    getters: {
        getToDo(state) {
            return state.todo;
        }
    },
    mutations: {
        setToDo(state, new_val) {
            state.todo = new_val;
        }
    },
    actions: {
        async getAllToDo({commit}, {user}) {
            await axios.get('http://localhost:7000/api/ToDo', {
                headers: {
                    'token': user.token
                }
            }).then(response => commit('setToDo', response.data))
        },
        updateToDo({commit}, {todo}) {
            commit('setToDo', todo)
        }
    }
}