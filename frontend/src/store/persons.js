import axios from "axios";

export let PersonsDataStore = {
    state() {
        return {
            persons: []
        }
    },
    getters: {
        getPersons(state) {
            return state.persons;
        }
    },
    mutations: {
        setPersons(state, new_val) {
            state.persons = new_val;
        }
    },
    actions: {
        async getAllPersons({commit}, {user}) {
            await axios.get('http://localhost:7000/api/Person', {
                headers: {
                    'token': user.token
                }
            }).then(response => commit('setPersons', response.data))
        },
        updatePersons({commit}, {persons}) {
            commit('setPersons', persons)
        }
    }
}