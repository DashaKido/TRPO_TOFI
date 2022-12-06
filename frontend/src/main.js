import {createApp} from 'vue'
import App from './App.vue'
import {BootstrapVue3} from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import {CalendarView} from "vue-simple-calendar";
import {CalendarViewHeader} from "vue-simple-calendar";
import 'vue-simple-calendar/dist/style.css'
import {createStore} from "vuex";

const store = createStore({
    state() {
        return {
            showMainPage: true,
            showSettingsPage: false,
            showCalendarPage: false,
            showAllPersonsPage: false,

            showEditProfilePage: false,
            showProVersionPage: false,
            showLeisurePage: false,

            showAddEventPage: false,
            showAddPersonPage: false
        }
    },
    getters: {
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
    },
    mutations: {
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
    },
    actions: {
        setMainPage({commit}, value) {
            commit('setShowMainPage', value);
            return value;
        },
        setSettingsPage({commit}, value) {
            commit('setShowSettingsPage', value);
            return value;
        },
        setCalendarPage({commit}, value) {
            commit('setShowCalendarPage', value);
            return value;
        },
        setAllPersonsPage({commit}, value) {
            commit('setShowAllPersonsPage', value);
            return value;
        },

        setEditProfilePage({commit}, value) {
            commit('setShowEditProfilePage', value);
            return value;
        },
        setProVersionPage({commit}, value) {
            commit('setShowProVersionPage', value);
            return value;
        },
        setLeisurePage({commit}, value) {
            commit('setShowLeisurePage', value);
            return value;
        },

        setAddEventPage({commit}, value) {
            commit('setShowAddEventPage', value);
            return value;
        },
        setAddPersonPage({commit}, value) {
            commit('setShowAddPersonPage', value);
            return value;
        },
    }

})
const app = createApp(App)
app.use(BootstrapVue3)
app.use(CalendarViewHeader)
app.use(CalendarView)
app.use(store)
app.mount('#app')
