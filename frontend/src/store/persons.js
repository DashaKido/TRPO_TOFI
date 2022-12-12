import axios from "axios";

export let PersonsDataStore = {
    state() {
        return {
            persons: [],
            countPersons: 0
        }
    },
    getters: {
        getPersons(state) {
            return state.persons;
        },
        getCountPersons(state) {
            return state.countPersons;
        }
    },
    mutations: {
        setPersons(state, new_val) {
            state.persons = new_val;
        },
        setCountsPersons(state, new_val) {
            state.countPersons = new_val;
        }
    },
    actions: {
        async getAllPersons({commit}, {user}) {
            await axios.get('http://localhost:7000/api/Person', {
                headers: {
                    'token': user.token
                }
            }).then(response => {
                commit('setCountsPersons', response.data.length)
                commit('setPersons', response.data)
            })
        },
        updatePersons({commit}, {persons}) {
            commit('setCountsPersons', persons.length)
            commit('setPersons', persons)
        }
    }
}