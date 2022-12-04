<template>
  <div class="content-block">
    <div class="title-block">
      <span>КАЛЕНДАРЬ</span>
    </div>
    <div class="container-block" style="align-items: flex-start;">
      <div class="btns-all-width">
        <div class="btns-group">
          <div></div>
          <button class="btn-style" style="width:166px; margin-top: 0px; margin-bottom: 22px;">
            ДОБАВИТЬ СОБЫТИЕ
          </button>
        </div>
      </div>

      <div class="style-comp">
        <calendar-view :show-date="showDate" :starting-day-of-week="1" :enable-date-selection="false"
                       :locale="locale" :month-name-format="monthNameFormat" :current-period-label="currentPeriodLabel"
                       :show-times="true" :items="items"
                       class="theme-default holiday-us-traditional holiday-us-official">
          <template #header="{headerProps}">
            <calendar-view-header :header-props="headerProps" :month-names="monthNames"
                                  @input="setShowDate"/>
          </template>
        </calendar-view>
      </div>
    </div>
  </div>
</template>

<script>
import {CalendarView, CalendarViewHeader} from "vue-simple-calendar";
import '../../../node_modules/vue-simple-calendar/dist/css/default.css'
import '../../../node_modules/vue-simple-calendar/dist/css/holidays-us.css'

export default {
  name: "calendarComp",
  components: {CalendarViewHeader, CalendarView},
  data() {
    return {
      showDate: new Date(),
      locale: 'ru-RU',
      monthNameFormat: 'long',
      currentPeriodLabel: 'СЕГОДНЯ',
      items: [
        {
          id: 1,
          startDate: new Date(2022, (12 - 1), 24, 12, 0),
          title: 'самое лучшее событие1',
          tooltip: '@самое лучшее событие1'
        },
        {
          id: 2,
          startDate: new Date(2022, (12 - 1), 24, 12, 0),
          title: 'самое лучшее событие2',
          tooltip: '@самое лучшее событие2'
        },
        {
          id: 3,
          startDate: new Date(2022, (12 - 1), 1, 12, 0),
          title: 'самое лучшее событие3',
          tooltip: '@самое лучшее событие3'
        },
        {
          id: 4,
          startDate: new Date(2022, (12 - 1), 12, 12, 0),
          title: 'самое лучшее событие4',
          tooltip: '@самое лучшее событие4'
        },
        {
          id: 5,
          startDate: new Date(2022, (12 - 1), 13, 12, 0),
          title: 'самое лучшее событие5',
          tooltip: '@самое лучшее событие5'
        },
        {
          id: 6,
          startDate: new Date(2022, (11 - 1), 28, 12, 0),
          title: 'самое лучшее событие2',
          tooltip: '@самое лучшее событие2'
        },
        {
          id: 7,
          startDate: new Date(2022, (12 - 1), 28, 12, 0),
          title: 'самое лучшее событие3',
          tooltip: '@самое лучшее событие3'
        },
        {
          id: 8,
          startDate: new Date(2023, (1 - 1), 1, 12, 0),
          title: 'самое лучшее событие4',
          tooltip: '@самое лучшее событие4'
        },
        {
          id: 9,
          startDate: new Date(2022, (12 - 1), 10, 12, 0),
          title: 'самое лучшее событие5',
          tooltip: '@самое лучшее событие5'
        },
        {
          id: 10,
          startDate: new Date(2023, (1 - 1), 28, 12, 0),
          title: 'самое лучшее событие3',
          tooltip: '@самое лучшее событие3'
        },
        {
          id: 8,
          startDate: new Date(2023, (2 - 1), 1, 12, 0),
          title: 'самое лучшее событие4',
          tooltip: '@самое лучшее событие4'
        },
        {
          id: 9,
          startDate: new Date(2023, (1 - 1), 10, 12, 0),
          title: 'самое лучшее событие5',
          tooltip: '@самое лучшее событие5'
        },
      ]
    }
  },
  methods: {
    setShowDate(d) {
      this.showDate = d;
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
