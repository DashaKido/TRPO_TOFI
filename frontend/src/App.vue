<template>
  <div class="main-block">
    <div>
      <header-comp/>
      <div>
        <token-comp v-show="tokenPage"/>
        <main-comp v-show="mainPage"/>
        <edit-profile-comp v-show="editProfilePage"/>

        <add-event-comp v-show="addEventPage"/>

        <add-person-comp v-show="addPersonPage"/>
        <settings-comp v-show="settingsPage"/>
        <pro-version-comp v-show="proVersionPage"/>
        <calendar-comp v-show="calendarPage"/>
        <all-persons v-show="allPersons"/>
        <leisure-page v-show="leisurePage"/>
      </div>
    </div>
    <footer-comp/>
  </div>
</template>

<script>
import headerComp from "./components/headerComp";
import footerComp from "./components/footerComp";
import TokenComp from "@/components/login/tokenComp";
import MainComp from "@/components/header/mainComp";
import EditProfileComp from "@/components/dropdown/editProfileComp";
import AddEventComp from "@/components/events/addEventComp";
import AddPersonComp from "@/components/events/addPersonComp";
import SettingsComp from '@/components/header/settingsComp'
import ProVersionComp from "@/components/dropdown/proVersionComp";
import CalendarComp from "@/components/header/calendarComp";
import AllPersons from "@/components/header/allPersonsComp";
import LeisurePage from "@/components/dropdown/leisurePage";
import {mapGetters} from "vuex";

export default {
  name: 'App',
  components: {
    LeisurePage,
    AllPersons,
    CalendarComp,
    ProVersionComp,
    SettingsComp,
    AddPersonComp,
    AddEventComp,
    EditProfileComp,
    MainComp,
    TokenComp,
    headerComp,
    footerComp
  },
  data() {
    return {
      isLoginPage: false,
    }
  },
  computed: {
    ...mapGetters({
      tokenPage: 'getShowTokenPage',

      mainPage: 'getShowMainPage',
      settingsPage: 'getShowSettingsPage',
      calendarPage: 'getShowCalendarPage',
      allPersons: 'getShowAllPersonsPage',

      editProfilePage: 'getShowEditProfilePage',
      proVersionPage: "getShowProVersionPage",
      leisurePage: 'getShowLeisurePage',

      addPersonPage: 'getShowAddPersonPage',
      addEventPage: 'getShowAddEventPage'
    })
  },
  methods: {
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');

::-webkit-scrollbar {
  width: 10px;
  height: 10px
}

::-webkit-scrollbar-track {
  background: #CBCBCC;
}

::-webkit-scrollbar-thumb {
  background: #8F898C;
}

::-webkit-scrollbar-thumb:hover {
  background: #6b6566;
}

.btn-style {
  height: 28px;
  width: 106px;
  font-size: 12px;
  line-height: 24px;
  background: #5B5657;
  border-radius: 6px;
  color: #FFFFFF;
  border: none;
  margin-top: 7px;
}

.btn-style:hover {
  background: #6e6869;
}

.btn-style:focus, .btn-style:active {
  box-shadow: 0 0 5px 0.25rem #ACACAD;
  background: #5B5657;
}

.btn-grey {
  background: #8F898C;
}

.btn-grey:hover {
  background: #9f999c;
}

.btn-grey:focus, .btn-grey:active {
  background: #8F898C;
  box-shadow: 0 0 5px 0.25rem #ACACAD;
}

.load-photo {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 5%;
  width: 25%;
}

.photo-style {
  max-width: 100%;
  max-height: 100%;
  border: 1px solid #405159;
  border-radius: 20px;
}

.btns-all-width {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

.btns-group {
  display: flex;
  justify-content: space-between;
  width: 20%;
}

.input-label {
  margin-top: 22px;
  text-decoration-line: underline;
}

.container-block {
  width: 100%;
  border-radius: 20px;
  background: #D7E0E9;
  padding: 26px 5%;
  margin-top: 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.input-style {
  margin: 5px 0 15px;
  background: #405159 !important;
  border-radius: 6px !important;
  outline: 0;
  color: #FFFFFF !important;
  height: 28px;
  width: 240px !important;
  font-style: normal;
  font-weight: 500 !important;
  font-size: 12px !important;
  border: none !important;
  padding: 0.375rem 0.75rem;
}

.input-style:focus {
  box-shadow: 0 0 5px 0.25rem #8fb1c1 !important;
}

::-webkit-calendar-picker-indicator {
  filter: invert(1);
}

.content-block {
  width: 100%;
  padding: 23px 5%;
}

.title-block {
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  font-size: 28px;
}

.suptext-style {
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 19px;
}

.text-style {
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
}

.input-item {
  display: flex;
  flex-direction: column;
}

body {
  width: 100%;
  height: 100vh;
}

#app {
  font-family: 'Inter', sans-serif;
  color: #5B5657;
  font-size: 12px;
  height: 100%;
}

.main-block {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
}

</style>
