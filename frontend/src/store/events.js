import axios from "axios";

export let EventsDataStore = {
    state() {
        return {
            events: [],
            idEditEvent: ''
        }
    },
    getters: {
        getEvents(state) {
            return state.events;
        },
        getEditEvent(state) {
            for (let item of state.events) {
                if (item._id == state.idEditEvent) {
                    return item
                }
            }
            return ""
        }
    },
    mutations: {
        setEvents(state, new_val) {
            state.events = new_val;
        },
        setIdEditEvent(state, new_val) {
            state.idEditEvent = new_val;
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
        },
        editEvent({commit, dispatch}, {id}) {
            dispatch('closeAllPages');
            commit('setIdEditEvent', id)
            commit('setShowEditEventPage', true)
        }
    }
}