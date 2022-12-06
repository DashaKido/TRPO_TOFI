<template>
  <div class="header-block">
    <span class="logo-text">TELEGRAM</span>
    <div class="main-sections-block" v-show="!tokenPage">
      <span class="link-item" :class="`${mainPage?'active':''}`" @click="goToMain">ГЛАВНАЯ</span>
      <span class="link-item" :class="`${calendarPage?'active':''}`" @click="goToCalendar">КАЛЕНДАРЬ</span>
      <span class="link-item" :class="`${settingsPage?'active':''}`" @click="goToSetting">НАСТРОЙКИ ЧАТА</span>
      <span class="link-item" :class="`${allPersons?'active':''}`" @click="goToAllPerson">ДРУЗЬЯ</span>
      <b-dropdown no-caret variant="link">
        <template #button-content>
          <div class="dropdown-btn"></div>
        </template>
        <b-dropdown-item class="text-style" @click="goToEditProfile">РЕДАКТИРОВАТЬ ПРОФИЛЬ</b-dropdown-item>
        <b-dropdown-item class="text-style" @click="goToProVersion">ТАРИФЫ</b-dropdown-item>
        <b-dropdown-item class="text-style" @click="goToLeisure">ДОСУГ</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item class="text-style">ВЫХОД</b-dropdown-item>
      </b-dropdown>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: "headerComp",
  computed: {
    ...mapGetters({
      tokenPage:'getShowTokenPage',

      mainPage: 'getShowMainPage',
      settingsPage: 'getShowSettingsPage',
      calendarPage: 'getShowCalendarPage',
      allPersons: 'getShowAllPersonsPage',
    })
  },
  methods: {
    ...mapActions({
      loadTokenPage:'loadTokenPage',

      loadMainPage: 'loadMainPage',
      loadSettingsPage: 'loadSettingsPage',
      loadCalendarPage: 'loadCalendarPage',
      loadAllPersonsPage: 'loadAllPersonsPage',

      loadEditProfilePage: 'loadEditProfilePage',
      loadProVersionPage: 'loadProVersionPage',
      loadLeisurePage: 'loadLeisurePage',

      loadAddEventPage: 'loadAddEventPage',
      loadAddPersonPage: 'loadAddPersonPage'
    }),
    goToMain() {
      this.loadMainPage();
    },
    goToCalendar() {
      this.loadCalendarPage();
    },
    goToSetting() {
      this.loadSettingsPage();
    },
    goToAllPerson() {
      this.loadAllPersonsPage();
    },

    goToEditProfile() {
      this.loadEditProfilePage();
    },
    goToProVersion() {
      this.loadProVersionPage();
    },
    goToLeisure() {
      this.loadLeisurePage(true);
    },
  }
}
</script>

<style scoped>
.dropdown-btn {
  margin-top: 5px;
  background-image: url("@/assets/anon.jpg");
  background-repeat: no-repeat;
  background-color: transparent;
  width: 30px;
  height: 30px;
  border: 1px solid #405159;
  border-radius: 50px;
}

.active {
  text-decoration: underline;
}


.link-item {
  display: flex;
  align-items: center;
  margin-right: 4%;
  font-weight: 500;
  color: #405159;
  line-height: 19px;
  cursor: pointer;
}

.logo-text {
  color: #405159;
  font-weight: 700;
  font-size: 15px;
  line-height: 29px;
}

.main-sections-block {
  display: flex;
  width: 100%;
  justify-content: flex-end;
}

.header-block {
  width: 100%;
  height: 42px;
  min-height: 42px;
  background: #D7E0E9;
  padding: 0 40px;
  display: flex;
  align-items: center;
  /*justify-content: space-between;*/
}
</style>