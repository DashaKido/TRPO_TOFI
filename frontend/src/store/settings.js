import axios from "axios";

export let SettingsDataStore = {
    state() {
        return {
            settings: {
                goodMorning: false,
                gmTime: new Date(),
                goodNight: false,
                gnTime: new Date(),
                randomCat: false,
                rcTime: new Date(),
                template: false,
                templateText: '',
                templateTime: new Date(),
                token: '',
                id: ''
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
            await axios.get('http://localhost:7000/api/Settings', {
                headers: {
                    'token': `${user.token}`
                }
            })
                .then(async resp => {
                    let all_settings = resp.data;
                    let find = false;
                    let settings = {}
                    for (let item of all_settings) {
                        if (item.token == user.token) {
                            find = true;
                            settings = item;
                            settings.id = item._id;
                            commit('setSettings', settings);
                        }
                    }
                    if (!find) {
                        settings = {
                            goodMorning: false,
                            gmTime: '10:00:00',
                            goodNight: false,
                            gnTime: '22:00:00',
                            randomCat: false,
                            rcTime: '15:00:00',
                            template: false,
                            templateText: '',
                            templateTime: '18:00:00',
                            token: user.token
                        };
                        await axios.post('http://localhost:7000/api/Settings', settings, {
                            headers: {
                                'token': `${user.token}`
                            }
                        })
                            .then(respon => {
                                    settings.id = respon.data.insertedId;
                                    commit('setSettings', settings);
                                }
                            )
                            .catch(error => console.log(error))
                    }
                })
                .catch(error => console.log(error))
        },
        updateSettings({commit}, {settings}) {
            commit('setSettings',settings)
        },
    }
}