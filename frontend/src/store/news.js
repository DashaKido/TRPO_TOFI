import axios from "axios";

export let NewsDataStore = {
    state() {
        return {
            news: []
        }
    },
    getters: {
        getNews(state) {
            return state.news;
        }
    },
    mutations: {
        setNews(state, new_val) {
            state.news = new_val;
        }
    },
    actions: {
        async getAllNews({commit}, {user}) {
            await axios.get('http://localhost:7000/api/News', {
                headers: {
                    'token': `${user.token}`
                }
            })
                .then(resp => {
                    commit('setNews', resp.data);
                })
                .catch(error => console.log(error))
        },
        updateNews({commit}, {news}) {
            commit('setNews', news)
        }
    }
}