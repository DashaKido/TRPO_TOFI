<template>
  <div class="header-block">
    <span class="logo-text">TELEGRAM</span>
    <div class="main-sections-block" v-show="isLoginPage">
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
  props: {
    'isLoginPage': Boolean,
  },
  data() {
    return {
      showAddEventPage: false,
      showAddPersonPage: false,
    }
  },
  computed: {
    ...mapGetters({
      mainPage: 'getShowMainPage',
      settingsPage: 'getShowSettingsPage',
      calendarPage: 'getShowCalendarPage',
      allPersons: 'getShowAllPersonsPage',
    })
  },
  methods: {
    ...mapActions({
      loadMainPage: 'setMainPage',
      loadSettingsPage: 'setSettingsPage',
      loadCalendarPage: 'setCalendarPage',
      loadAllPersonsPage: 'setAllPersonsPage',

      loadEditProfilePage: 'setEditProfilePage',
      loadProVersionPage: 'setProVersionPage',
      loadLeisurePage: 'setLeisurePage',

      loadAddEventPage: 'setAddEventPage',
      loadAddPersonPage: 'setAddPersonPage'
    }),
    goToMain() {
      this.loadMainPage(true);
      this.loadCalendarPage(false);
      this.loadSettingsPage(false);
      this.loadAllPersonsPage(false);

      this.loadEditProfilePage(false);
      this.loadProVersionPage(false);
      this.loadLeisurePage(false);

      this.loadAddEventPage(false);
      this.loadAddPersonPage(false);
    },
    goToCalendar() {
      this.loadMainPage(false);
      this.loadCalendarPage(true);
      this.loadSettingsPage(false);
      this.loadAllPersonsPage(false);

      this.loadEditProfilePage(false);
      this.loadProVersionPage(false);
      this.loadLeisurePage(false);

      this.loadAddEventPage(false);
      this.loadAddPersonPage(false);
    },
    goToSetting() {
      this.loadMainPage(false);
      this.loadCalendarPage(false);
      this.loadSettingsPage(true);
      this.loadAllPersonsPage(false);

      this.loadEditProfilePage(false);
      this.loadProVersionPage(false);
      this.loadLeisurePage(false);

      this.loadAddEventPage(false);
      this.loadAddPersonPage(false);
    },
    goToAllPerson() {
      this.loadMainPage(false);
      this.loadCalendarPage(false);
      this.loadSettingsPage(false);
      this.loadAllPersonsPage(true);

      this.loadEditProfilePage(false);
      this.loadProVersionPage(false);
      this.loadLeisurePage(false);

      this.loadAddEventPage(false);
      this.loadAddPersonPage(false);
    },

    goToEditProfile() {
      this.loadMainPage(false);
      this.loadCalendarPage(false);
      this.loadSettingsPage(false);
      this.loadAllPersonsPage(false);

      this.loadEditProfilePage(true);
      this.loadProVersionPage(false);
      this.loadLeisurePage(false);

      this.loadAddEventPage(false);
      this.loadAddPersonPage(false);
    },
    goToProVersion() {
      this.loadMainPage(false);
      this.loadCalendarPage(false);
      this.loadSettingsPage(false);
      this.loadAllPersonsPage(false);

      this.loadEditProfilePage(false);
      this.loadProVersionPage(true);
      this.loadLeisurePage(false);

      this.loadAddEventPage(false);
      this.loadAddPersonPage(false);
    },
    goToLeisure() {
      this.loadMainPage(false);
      this.loadCalendarPage(false);
      this.loadSettingsPage(false);
      this.loadAllPersonsPage(false);

      this.loadEditProfilePage(false);
      this.loadProVersionPage(false);
      this.loadLeisurePage(true);

      this.loadAddEventPage(false);
      this.loadAddPersonPage(false);
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