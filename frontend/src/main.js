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
import {PersonsDataStore} from '@/store/persons'
import {ToDoDataStore} from '@/store/todo'
import {NewsDataStore} from "@/store/news";
import VueCryptojs from 'vue-cryptojs'

const store = new Vuex.Store({
    modules: {
        user: UserDataStore,
        settings: SettingsDataStore,
        pages: PagesDataStore,
        events: EventsDataStore,
        persons: PersonsDataStore,
        todos: ToDoDataStore,
        news: NewsDataStore
    }
})
const app = createApp(App)
app.use(BootstrapVue3)
app.use(CalendarViewHeader)
app.use(CalendarView)
app.use(store)
app.use(VueCryptojs)
app.mount('#app')
