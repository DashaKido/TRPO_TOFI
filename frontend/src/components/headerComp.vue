<template>
  <div class="header-block">
    <span class="logo-text">TELEGRAM</span>
    <div class="main-sections-block" v-show="isLoginPage">
      <span class="link-item" :class="`${isShowMain?'active':''}`" @click="goToMain">ГЛАВНАЯ</span>
      <span class="link-item" :class="`${isShowCalendar?'active':''}`" @click="goToCalendar">КАЛЕНДАРЬ</span>
      <span class="link-item" :class="`${isShowSetting?'active':''}`" @click="goToSetting">НАСТРОЙКИ ЧАТА</span>
      <span class="link-item" :class="`${isShowAllPerson?'active':''}`" @click="goToAllPerson">ДРУЗЬЯ</span>
      <b-dropdown no-caret variant="link">
        <template #button-content>
          <div class="dropdown-btn"></div>
        </template>
        <b-dropdown-item class="text-style">РЕДАКТИРОВАТЬ ПРОФИЛЬ</b-dropdown-item>
        <b-dropdown-item class="text-style">ТАРИФЫ</b-dropdown-item>
        <b-dropdown-item class="text-style">ДОСУГ</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item class="text-style">ВЫХОД</b-dropdown-item>
      </b-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "headerComp",
  props: {
    'isLoginPage': Boolean,
    'isShowMain': Boolean,
    'isShowSetting': Boolean,
    'isShowCalendar': Boolean,
    'isShowAllPerson': Boolean,

    'goToMainPage': Function,
    'goToCalendarPage': Function,
    'goToSettingPage': Function,
    'goToAllPersonPage': Function,
  },
  data() {
    return {
      showMainPage: false,
      showCalendarPage: false,
      showSettingPage: false,
      showAllPersonPage: false,
    }
  },
  methods: {
    goToMain() {
      this.showMainPage = true;
      this.showCalendarPage = false;
      this.showSettingPage = false;
      this.showAllPersonPage = false;

      this.goToMainPage({
        showMainPage: this.showMainPage,
        showCalendarPage: this.showCalendarPage,
        showSettingPage: this.showSettingPage,
        showAllPersonPage: this.showAllPersonPage,
      })
    },
    goToCalendar() {
      this.showMainPage = false;
      this.showCalendarPage = true;
      this.showSettingPage = false;
      this.showAllPersonPage = false;

      this.goToCalendarPage({
        showMainPage: this.showMainPage,
        showCalendarPage: this.showCalendarPage,
        showSettingPage: this.showSettingPage,
        showAllPersonPage: this.showAllPersonPage,
      })
    },
    goToSetting() {
      this.showMainPage = false;
      this.showCalendarPage = false;
      this.showSettingPage = true;
      this.showAllPersonPage = false;

      this.goToSettingPage({
        showMainPage: this.showMainPage,
        showCalendarPage: this.showCalendarPage,
        showSettingPage: this.showSettingPage,
        showAllPersonPage: this.showAllPersonPage,
      })
    },
    goToAllPerson() {
      this.showMainPage = false;
      this.showCalendarPage = false;
      this.showSettingPage = false;
      this.showAllPersonPage = true;

      this.goToAllPersonPage({
        showMainPage: this.showMainPage,
        showCalendarPage: this.showCalendarPage,
        showSettingPage: this.showSettingPage,
        showAllPersonPage: this.showAllPersonPage,
      })
    }
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