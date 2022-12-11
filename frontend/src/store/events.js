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
        async createEvents({commit}, {user}) {
            await axios.get('http://localhost:7000/api/Events', {
                headers: {
                    'token': `${user.token}`
                }
            })
                .then(async resp => {
                    let all_events = resp.data;
                    // let find = false;
                    let events = {};
                    for (let item of all_events) {
                        if (item.token == user.token) {
                            // find = true;
                            events = item;
                            events.id = item._id;
                            commit('setEvents', events);
                        }
                    }
                })
                .catch(error => console.log(error))
        },
    }
}