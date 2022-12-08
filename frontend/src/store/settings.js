import axios from "axios";

export let SettingsDataStore = {
    state() {
        return {
            settings: {
                idUser: "",
                goodMorning: false,
                gmTime: new Date(),
                goodNight: false,
                gnTime: new Date(),
                randomCat: false,
                rcTime: new Date(),
                template: false,
                templateText: '',
                templateTime: new Date(),
                id: '',
                tokenUser: ''
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
        // eslint-disable-next-line no-empty-pattern
        async createSetting({}, {user}) {
            await axios.get('http://localhost:7000/api/Settings',{
                headers:{
                    'token': `${user.token}`
                }
            }).then(resp=>{
                console.log(resp)
            })





            // await axios.post('http://localhost:7000/api/Settings', {
            //     idUser: user.id,
            //     goodMorning: false,
            //     gmTime: '10:00:00',
            //     goodNight: false,
            //     gnTime: '22:00:00',
            //     randomCat: false,
            //     rcTime: '15:00:00',
            //     template: false,
            //     templateText: '',
            //     templateTime: '18:00:00',
            //     idChat: user.chatId,
            //     tokenUser: user.token
            // })
            //     .then(() => {
            //             commit('setSettings', {
            //                 idUser: user.id,
            //                 goodMorning: false,
            //                 gmTime: '10:00:00',
            //                 goodNight: false,
            //                 gnTime: '22:00:00',
            //                 randomCat: false,
            //                 rcTime: '15:00:00',
            //                 template: false,
            //                 templateText: '',
            //                 templateTime: '18:00:00',
            //                 idChat: user.chatId,
            //                 tokenUser: user.token
            //             });
            //         }
            //     )
            //     .catch(error => {
            //         console.log(error);
            //     })
        },
        async updateSettings({commit}, {settings}) {
            let new_settings = {
                goodMorning: settings.goodMorning,
                gmTime: settings.gmTime,
                goodNight: settings.goodNight,
                gnTime: settings.gnTime,
                randomCat: settings.randomCat,
                rcTime: settings.rcTime,
                template: settings.template,
                templateText: settings.templateText,
                templateTime: settings.templateTime,
            }
            await axios.put('http://localhost:7000/api/Settings/' + settings.idUser, new_settings, {
                headers: {
                    'token': `${settings.tokenUser}`
                }
            })
                .then(commit('setSettings', new_settings))
                .catch(error => console.log(error))
        },
    }
}