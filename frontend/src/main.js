import {createApp} from 'vue'
import App from './App.vue'
import {BootstrapVue3} from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import {CalendarView} from "vue-simple-calendar";
import {CalendarViewHeader} from "vue-simple-calendar";
import 'vue-simple-calendar/dist/style.css'
import Vuex from "vuex";
import {UserDataStore} from "./store/user.js"
import {SettingsDataStore} from './store/settings.js'
import {PagesDataStore} from "@/store/pages";
import {EventsDataStore} from "@/store/events";
import {PersonDataStore} from '@/store/person'

const store = new Vuex.Store({
    modules: {
        user: UserDataStore,
        settings: SettingsDataStore,
        pages: PagesDataStore,
        events: EventsDataStore,
        person: PersonDataStore
    }
})
const app = createApp(App)
app.use(BootstrapVue3)
app.use(CalendarViewHeader)
app.use(CalendarView)
app.use(store)
app.mount('#app')
