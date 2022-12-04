import {createApp} from 'vue'
import App from './App.vue'
import {BootstrapVue3} from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import {CalendarView} from "vue-simple-calendar";
import {CalendarViewHeader} from "vue-simple-calendar";
import 'vue-simple-calendar/dist/style.css'

const app = createApp(App)
app.use(BootstrapVue3)
app.use(CalendarViewHeader)
app.use(CalendarView)
app.mount('#app')
