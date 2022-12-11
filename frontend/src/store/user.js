// eslint-disable-next-line no-unused-vars
import axios from "axios";

export let UserDataStore = {
    state() {
        return {
            user: {
                birth: new Date(),
                isPro: false,
                lastName: '',
                name: '',
                persons: [],
                id: '',
                token: '',
                chatId: ''
            },
        }
    },
    getters: {
        getUser(state) {
            return state.user;
        },
    },
    mutations: {
        setUser(state, new_val) {
            state.user = new_val;
        },
    },
    actions: {
        fillUser({commit}, {birth, isPro, lastName, name, persons, id, token, chatId}) {
            let user = {
                birth: birth,
                isPro: isPro,
                lastName: lastName,
                name: name,
                persons: persons,
                id: id,
                token: token,
                chatId: chatId
            };
            commit('setUser', user);
        },
        updateUser({commit}, {user}) {
            commit('setUser', user);
        },
        // eslint-disable-next-line no-unused-vars
        async createLog({commit}, {action, addedId, token}) {
            let log = {
                action: action,
                token: token,
                date: new Date(),
                addedId: addedId
            }
            await axios.post('http://localhost:7000/api/Logs', log, {
                headers: {
                    'token': token
                }
            })
                .catch(error => console.log(error));
        }
    }
}