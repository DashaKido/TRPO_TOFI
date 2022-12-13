<template>
  <div class="header-block">
    <span class="logo-text">TELEGRAM</span>
    <div class="main-sections-block" v-show="admin">
      <span class="link-item" :class="`${adminPage?'active':''}`" @click="loadAdminPage">ПОЛЬЗОВАТЕЛИ</span>
      <span class="link-item" :class="`${newsPage?'active':''}`" @click="loadNewsPage">НОВОСТИ</span>
      <span class="link-item" @click="loadTokenPage">ВЫХОД</span>
    </div>

    <div class="main-sections-block" v-show="!tokenPage&&!admin">
      <span class="link-item" :class="`${mainPage?'active':''}`" @click="loadMainPage">ГЛАВНАЯ</span>
      <span class="link-item" :class="`${calendarPage?'active':''}`" @click="loadCalendarPage">КАЛЕНДАРЬ</span>
      <span class="link-item" :class="`${settingsPage?'active':''}`" @click="loadSettingsPage">НАСТРОЙКИ ЧАТА</span>
      <span class="link-item" :class="`${allPersons?'active':''}`" @click="loadAllPersonsPage">ДРУЗЬЯ</span>
      <b-dropdown no-caret variant="link">
        <template #button-content>
          <img class="dropdown-btn" :src="user.fileLink">
        </template>
        <b-dropdown-item class="text-style" @click="loadEditProfilePage">РЕДАКТИРОВАТЬ ПРОФИЛЬ</b-dropdown-item>
        <b-dropdown-item class="text-style" @click="loadProVersionPage">ТАРИФЫ</b-dropdown-item>
        <b-dropdown-item class="text-style" @click="loadLeisurePage">ДОСУГ</b-dropdown-item>
        <b-dropdown-item class="text-style" @click="loadAllToDoPage">СПИСОК ДЕЛ</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item class="text-style" @click="goToTokenPage">ВЫХОД</b-dropdown-item>
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
      tokenPage: 'getShowTokenPage',

      mainPage: 'getShowMainPage',
      settingsPage: 'getShowSettingsPage',
      calendarPage: 'getShowCalendarPage',
      allPersons: 'getShowAllPersonsPage',
      admin: 'getAdmin',
      adminPage: 'getShowAdminPage',
      newsPage: 'getShowNewsPage',
      user: 'getUser'
    })
  },
  methods: {
    ...mapActions({
      loadTokenPage: 'loadTokenPage',

      loadMainPage: 'loadMainPage',
      loadSettingsPage: 'loadSettingsPage',
      loadCalendarPage: 'loadCalendarPage',
      loadAllPersonsPage: 'loadAllPersonsPage',

      loadEditProfilePage: 'loadEditProfilePage',
      loadProVersionPage: 'loadProVersionPage',
      loadLeisurePage: 'loadLeisurePage',

      loadAddEventPage: 'loadAddEventPage',
      loadAddPersonPage: 'loadAddPersonPage',

      loadAdminPage: 'loadAdminPage',
      loadNewsPage: 'loadNewsPage',
      createLog: 'createLog',
      loadAllToDoPage: 'loadAllToDoPage'
    }),
    goToTokenPage() {
      this.loadTokenPage()
      this.createLog({action: 'Выход из системы', token: this.user.token})
    }
  }
}
</script>

<style scoped>
.dropdown-btn {
  margin-top: 5px;
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