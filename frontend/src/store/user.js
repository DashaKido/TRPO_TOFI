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
                id: '',
                token: '',
                chatId: '',
                fileLink: '',
                roles: []
            },
            allUsers: [],
            file: ""
        }
    },
    getters: {
        getUser(state) {
            return state.user;
        },
        getAllUsers(state) {
            return state.allUsers
        },
        getUserFile(state) {
            return state.file
        }
    },
    mutations: {
        setUser(state, new_val) {
            state.user = new_val;
        },
        setAllUsers(state, new_val) {
            state.allUsers = new_val
        },
        setUserPRO(state, new_val) {
            state.user.isPro = new_val
        },
        setUserPhoto(state, new_val) {
            state.file = new_val
        },
        setUserFileLink(state, new_val) {
            state.user.fileLink = new_val
        }
    },
    actions: {
        fillUser({commit}, {birth, isPro, lastName, name, persons, id, token, chatId, fileLink, roles}) {
            let user = {
                birth: birth,
                isPro: isPro,
                lastName: lastName,
                name: name,
                persons: persons,
                id: id,
                token: token,
                chatId: chatId,
                fileLink: fileLink,
                roles: roles
            };
            commit('setUser', user);
        },
        updateUser({commit}, {user}) {
            commit('setUser', user);
        },
        updateUserPRO({commit}, {version}) {
            commit('setUserPRO', version)
        },
        updateUserPhoto({commit}, {photo}) {
            commit('setUserPhoto', photo)
        },
        updateUserFileLink({commit}, {photo}) {
            commit('setUserFileLink', photo)
        },
        // eslint-disable-next-line no-unused-vars
        async createLog({commit}, {action, addedId, token}) {
            let log = {
                action: action,
                token: token,
                date: new Date(),
                addedId: addedId
            }
            await axios.post('http://localhost:7000/api/crud/Logs', log, {
                headers: {
                    'token': token
                }
            })
                .catch(error => console.log(error));
        },
        // eslint-disable-next-line no-unused-vars
        async getAllUsers({commit}, {user}) {
            await axios.get('http://localhost:7000/api/crud/User', {
                headers: {
                    'token': user.token
                }
            }).then(response => {
                commit('setAllUsers', response.data)
            })
        },
        updateUsers({commit}, {users}) {
            commit('setAllUsers', users)
        }

    }
}