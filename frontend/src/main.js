import {createApp} from 'vue'
import App from './App.vue'
import {BootstrapVue3} from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import {CalendarView} from "vue-simple-calendar";
import {CalendarViewHeader} from "vue-simple-calendar";
import 'vue-simple-calendar/dist/style.css'
import {createStore} from "vuex";
import axios from "axios";

const store = createStore({
    state() {
        return {
            showTokenPage: true,

            showMainPage: false,
            showSettingsPage: false,
            showCalendarPage: false,
            showAllPersonsPage: false,

            showEditProfilePage: false,
            showProVersionPage: false,
            showLeisurePage: false,

            showAddEventPage: false,
            showAddPersonPage: false,
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
        getShowTokenPage(state) {
            return state.showTokenPage;
        },

        getShowMainPage(state) {
            return state.showMainPage;
        },
        getShowSettingsPage(state) {
            return state.showSettingsPage;
        },
        getShowCalendarPage(state) {
            return state.showCalendarPage;
        },
        getShowAllPersonsPage(state) {
            return state.showAllPersonsPage;
        },

        getShowEditProfilePage(state) {
            return state.showEditProfilePage;
        },
        getShowProVersionPage(state) {
            return state.showProVersionPage;
        },
        getShowLeisurePage(state) {
            return state.showLeisurePage;
        },

        getShowAddEventPage(state) {
            return state.showAddEventPage;
        },
        getShowAddPersonPage(state) {
            return state.showAddPersonPage;
        },
        getUser(state) {
            return state.user;
        },
        getSettings(state) {
            return state.settings;
        }
    },
    mutations: {
        setShowTokenPage(state, new_val) {
            state.showTokenPage = new_val;
        },

        setShowMainPage(state, new_val) {
            state.showMainPage = new_val;
        },
        setShowSettingsPage(state, new_val) {
            state.showSettingsPage = new_val;
        },
        setShowCalendarPage(state, new_val) {
            state.showCalendarPage = new_val;
        },
        setShowAllPersonsPage(state, new_val) {
            state.showAllPersonsPage = new_val;
        },

        setShowEditProfilePage(state, new_val) {
            state.showEditProfilePage = new_val;
        },
        setShowProVersionPage(state, new_val) {
            state.showProVersionPage = new_val;
        },
        setShowLeisurePage(state, new_val) {
            state.showLeisurePage = new_val;
        },

        setShowAddPersonPage(state, new_val) {
            state.showAddPersonPage = new_val;
        },
        setShowAddEventPage(state, new_val) {
            state.showAddEventPage = new_val;
        },

        setUser(state, new_val) {
            state.user = new_val;
        },
        setSettings(state, new_val) {
            state.settings = new_val;
        }
    },
    actions: {
        closeAllPages({commit}) {
            commit('setShowTokenPage', false);

            commit('setShowMainPage', false);
            commit('setShowSettingsPage', false);
            commit('setShowCalendarPage', false);
            commit('setShowAllPersonsPage', false);

            commit('setShowEditProfilePage', false);
            commit('setShowProVersionPage', false);
            commit('setShowLeisurePage', false);

            commit('setShowAddEventPage', false);
            commit('setShowAddPersonPage', false);
        },
        loadTokenPage({commit, dispatch}) {
            dispatch('closeAllPages');
            commit('setShowTokenPage', true);
        },
        loadMainPage({commit, dispatch}) {
            dispatch('closeAllPages');
            commit('setShowMainPage', true);
        },
        loadSettingsPage({commit, dispatch}) {
            dispatch('closeAllPages');
            commit('setShowSettingsPage', true);
        },
        loadCalendarPage({commit, dispatch}) {
            dispatch('closeAllPages');
            commit('setShowCalendarPage', true);
        },
        loadAllPersonsPage({commit, dispatch}) {
            dispatch('closeAllPages');
            commit('setShowAllPersonsPage', true);
        },

        loadEditProfilePage({commit, dispatch}) {
            dispatch('closeAllPages');
            commit('setShowEditProfilePage', true);
        },
        loadProVersionPage({commit, dispatch}) {
            dispatch('closeAllPages');
            commit('setShowProVersionPage', true);
        },
        loadLeisurePage({commit, dispatch}) {
            dispatch('closeAllPages');
            commit('setShowLeisurePage', true);
        },

        loadAddEventPage({commit, dispatch}) {
            dispatch('closeAllPages');
            commit('setShowAddEventPage', true);
        },
        loadAddPersonPage({commit, dispatch},) {
            dispatch('closeAllPages');
            commit('setShowAddPersonPage', true);
        },

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
})
const app = createApp(App)
app.use(BootstrapVue3)
app.use(CalendarViewHeader)
app.use(CalendarView)
app.use(store)
app.mount('#app')
