import axios from "axios";

export let PersonsDataStore = {
    state() {
        return {
            persons: [],
            countPersons: 0,
            idEditPerson: ''
        }
    },
    getters: {
        getPersons(state) {
            return state.persons;
        },
        getCountPersons(state) {
            return state.countPersons;
        },
        getIdEditPerson(state) {
            return state.idEditPerson;
        },
        getEditPerson(state) {
            for (let item of state.persons) {
                if (item._id == state.idEditPerson) {
                    return item
                }
            }
            return ""
        }
    },
    mutations: {
        setPersons(state, new_val) {
            state.persons = new_val;
        },
        setCountsPersons(state, new_val) {
            state.countPersons = new_val;
        },
        setIdEditPerson(state, new_val) {
            state.idEditPerson = new_val;
        }
    },
    actions: {
        async getAllPersons({commit}, {user}) {
            await axios.get('http://localhost:7000/api/crud/Person', {
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
        },
        // eslint-disable-next-line no-unused-vars
        editPerson({commit, dispatch}, {id}) {
            dispatch('closeAllPages');
            commit('setIdEditPerson', id)
            commit('setShowEditPersonPage', true)
        }
    }
}