<template>
  <div class="content-block">
    <div class="title-block">
      <span>КАЛЕНДАРЬ</span>
    </div>
    <div class="container-block" style="align-items: flex-start;">
      <div class="btns-all-width">
        <div class="btns-group" style="width: 35%;">
          <div></div>
          <button v-show="!user.isPro" class="btn-style" style="width:226px; margin-top: 0px; margin-bottom: 22px;"
                  @click="loadProVersionPage">
            РАЗБЛОКИРОВАТЬ КАЛЕНДАРЬ
          </button>
          <button class="btn-style" style="width:166px; margin-top: 0px; margin-bottom: 22px;"
                  @click="loadAddEventPage">
            ДОБАВИТЬ СОБЫТИЕ
          </button>
        </div>
      </div>

      <div class="style-comp" :style="`${!user.isPro?'filter: blur(10px);':''}`">
        <calendar-view :show-date="showDate" :starting-day-of-week="1" :enable-date-selection="false"
                       :locale="locale" :month-name-format="monthNameFormat" :current-period-label="currentPeriodLabel"
                       :show-times="true" :items="items" @click-item="updateEvent"
                       class="theme-default holiday-us-traditional holiday-us-official">
          <template #header="{headerProps}">
            <calendar-view-header :header-props="headerProps" @input="setShowDate"/>
          </template>
        </calendar-view>
      </div>

      <b-modal id="modal-edit-event" title="РЕДАКТИРОВАНИЕ СОБЫТИЯ" v-model="modalEditEvent" hide-footer>
        <div class="input-item" style="margin-bottom: 10px;">
          <label class="text-style">
            ВЫ ДЕЙСТВИТЕЛЬНО ХОТИТЕ ОТРЕДАКТИРОВАТЬ СОБЫТИЕ?
          </label>
        </div>
        <div class="input-item">
          <span style="font-weight: bold">НАЗВАНИЕ</span>
          <label class="text-style">
            {{ editEvent.tooltip }}
          </label>
        </div>
        <div class="input-item">
          <span style="font-weight: bold">ДАТА И ВРЕМЯ</span>
          <label class="text-style">
            {{ editEvent.startDate }}
          </label>
        </div>
        <div class="btns-all-width" style="display: block">
          <div class="btns-group" style="width: auto">
            <button class="btn-style btn-grey" @click="cancel">
              НЕТ
            </button>
            <button class="btn-style" @click="goToEdit">
              ДА
            </button>
          </div>
        </div>
      </b-modal>
    </div>
  </div>
</template>

<script>
import {CalendarView, CalendarViewHeader} from "vue-simple-calendar";
import '../../../node_modules/vue-simple-calendar/dist/css/default.css'
import '../../../node_modules/vue-simple-calendar/dist/css/holidays-us.css'
import {mapActions, mapGetters} from "vuex";

export default {
  name: "calendarComp",
  components: {CalendarViewHeader, CalendarView},
  data() {
    return {
      showDate: new Date(),
      locale: 'ru-RU',
      monthNameFormat: 'long',
      currentPeriodLabel: 'СЕГОДНЯ',
      modalEditEvent: false,
      editEvent: ''
    }
  },
  computed: {
    ...mapGetters({
      items: 'getEvents',
      user: 'getUser'
    })
  },
  methods: {
    ...mapActions({
      loadAddEventPage: 'loadAddEventPage',
      loadProVersionPage: 'loadProVersionPage',
      editEventPage: 'editEvent'
    }),
    setShowDate(d) {
      this.showDate = d;
    },
    updateEvent(e) {
      if (this.user.isPro) {
        this.editEvent = e.originalItem
        this.modalEditEvent = true;
      }
    },
    cancel() {
      this.modalEditEvent = false;
    },
    goToEdit() {
      this.editEventPage({id: this.editEvent._id})
      this.modalEditEvent = false;
    }
  }
}
</script>
<style>
.theme-default .cv-header {
  background-color: #405159;
  color: white;
  border-radius: 10px 10px 0 0;
  border: 1px solid #405159;
  border-bottom: none;
}

.theme-default .cv-header button {
  background-color: #405159;
  color: white;
}

.theme-default .cv-header-day {
  background-color: #4C7C8B;
  color: white;
}

.theme-default .cv-day.outsideOfMonth {
  background-color: #D7E0E9;
}

.theme-default .cv-day.today {
  background-color: #cce4ef;
}

.theme-default .cv-item {
  background-color: #405159;
  color: white;
}

.theme-default .cv-item .startTime, .theme-default .cv-item .endTime {
  color: white;
}

.cv-header-day, .cv-header-days {
  border-color: #4C7C8B !important;
}

.cv-header-day {
  text-transform: uppercase;
}

.cv-day, .cv-week, .cv-weeks {
  border-color: #8FB1C1 !important;
}

.cv-wrapper.future {
  background-color: transparent;
}

.future {
  background-color: #fafafa;
}

.periodLabel {
  text-transform: uppercase;
}

.nextYear {
  border-radius: 0 6px 6px 0;
}

.previousYear {
  border-radius: 6px 0 0 6px;
}

.cv-day-number {
  font-weight: bold;
}
</style>
<style scoped>

.style-comp {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  height: 100%;
  min-height: 60vh;
  max-height: 80vh;
  border-radius: 20px;
}
</style>
