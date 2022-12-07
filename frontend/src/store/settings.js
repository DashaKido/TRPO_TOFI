import axios from "axios";

export let SettingsDataStore = {
    state() {
        return {
            settings: {
                _id: "",
                goodMorning: true,
                gmTime: new Date(),
                goodNight: false,
                gnTime: new Date(),
                randomCat: false,
                rcTime: new Date(),
                template: false,
                templateText: '',
                templateTime: new Date(),
                id: '',
                token: ''
            }
        }
    },
    getters: {
        getSettings(state) {
            return state.settings;
        }
    },
    mutations: {
        setSettings(state, new_val) {
            state.settings = new_val;
        }
    },
    actions: {
        async createSetting({commit}, {user}) {
            let settings = {
                _id: user.id,
                goodMorning: true,
                gmTime: '10:00:00',
                goodNight: false,
                gnTime: '22:00:00',
                randomCat: false,
                rcTime: '15:00:00',
                template: false,
                templateText: '',
                templateTime: '18:00:00',
                id: user.chatId,
                token: user.token
            };
            await axios.post('http://localhost:7000/api/Settings', {
                settings
            })
                .then(
                    commit('setSettings', settings)
                )
                .catch(error => {
                    console.log(error);
                })
        },
        updateSettings({commit}, {settings}) {
            commit('setSettings', settings)
        },
    }
}