import axios from "axios";

export let PersonDataStore = {
    state() {
        return {
            person: {
                id: '',
                age: '',
                birthdate: '',
                name: '',
                type: '',
                category: '',
                lastName: '',
                nickname: '',
                token: '',
            }
        }
    },
    getters: {
        getPerson(state) {
            return state.person;
        }
    },
    mutations: {
        setPerson(state, new_val) {
            state.person = new_val;
        }
    },
    actions: {
        // eslint-disable-next-line no-unused-vars
        async createPerson({commit}, {person, token}) {

            await axios.post('http://localhost:7000/api/Person', person, {
                headers: {
                    'token': token
                }
            })
                .then(response => {
                    console.log(response)
                })
                .catch(error => console.log(error))
            // await axios.get('http://localhost:7000/api/Events', {
            //     headers: {
            //         'token': `${user.token}`
            //     }
            // })
            //     .then(async resp => {
            //         let all_events = resp.data;
            //         // let find = false;
            //         let events = {};
            //         for (let item of all_events) {
            //             if (item.token == user.token) {
            //                 // find = true;
            //                 events = item;
            //                 events.id = item._id;
            //                 commit('setEvents', events);
            //             }
            //         }
            //     })
            //     .catch(error => console.log(error))
        },
        // eslint-disable-next-line no-unused-vars
        async getAllPersons({commit}, {user}) {
            await axios.get('http://localhost:7000/api/Person', {
                headers: {
                    'token': `${user.token}`
                }
            })
                .then(response => {
                        return response.data;
                    }
                )
        }
    }
}