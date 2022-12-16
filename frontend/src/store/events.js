import axios from "axios";

export let EventsDataStore = {
    state() {
        return {
            events: []
        }
    },
    getters: {
        getEvents(state) {
            return state.events;
        }
    },
    mutations: {
        setEvents(state, new_val) {
            state.events = new_val;
        }
    },
    actions: {
        async getAllEvents({commit}, {user}) {
            await axios.get('http://localhost:7000/api/crud/Event', {
                headers: {
                    'token': `${user.token}`
                }
            })
                .then(resp => {
                    commit('setEvents', resp.data);
                })
                .catch(error => console.log(error))
        },
        updateEvents({commit}, {events}) {
            commit('setEvents', events)
        }
    }
}