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
    }
}