import axios from "axios";

export let NewsDataStore = {
    state() {
        return {
            news: [],
            oneNews: {
                title: "",
                content: "",
                photo: "",
                sectionCount: 1,
            }
        }
    },
    getters: {
        getNews(state) {
            return state.news;
        },
        getOneNews(state) {
            let index = Math.floor(Math.random() * state.news.length)
            if (state.news[index] == undefined) {
                return state.oneNews
            }
            return state.news[index]
        }
    },
    mutations: {
        setNews(state, new_val) {
            state.news = new_val;
        }
    },
    actions: {
        async getAllNews({commit}, {user}) {
            await axios.get('http://localhost:7000/api/crud/News', {
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