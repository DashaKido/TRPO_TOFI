<template>
  <div class="main-block">
    <header-comp :is-login-page="isLoginPage"/>
    <div>
      <token-comp v-show="isShowToken" :onShowToken='onShowToken'/>
      <login-comp v-show="isShowLogin" :onShowLogin='onShowLogin'/>
      <registration-comp v-show="isShowRegistration" :onShowRegistration="onShowRegistration"/>
      <main-comp v-show="isShowMain"/>
    </div>
    <footer-comp/>
  </div>
</template>

<script>
import headerComp from "@/components/headerComp";
import footerComp from "@/components/footerComp";
import TokenComp from "@/components/tokenComp";
import LoginComp from "@/components/loginComp";
import RegistrationComp from "@/components/registrationComp";
import MainComp from "@/components/mainComp";

export default {
  name: 'App',
  components: {
    MainComp,
    RegistrationComp,
    LoginComp,
    TokenComp,
    headerComp,
    footerComp
  },
  data() {
    return {
      isLoginPage: false,
      isShowToken: false,
      isShowLogin: false,
      isShowRegistration: false,
      isShowMain:true,
      title: "ВВОД ТОКЕНА",
    }
  },
  methods: {
    onShowToken() {
      this.isShowLogin = false;
      this.isShowToken = false;
      this.isShowRegistration = true;
    },
    onShowLogin() {
      this.isShowLogin = false;
      this.isShowToken = true;
      this.isShowRegistration = false;
    },
    onShowRegistration() {
      this.isShowLogin = true;
      this.isShowToken = false;
      this.isShowRegistration = false;
    }
  }
}
</script>
<style>
.btn-style {
  height: 28px;
  width: 106px;
  font-size: 12px;
  line-height: 24px;
  background: #5B5657;
  border-radius: 6px;
  color: #FFFFFF;
  border: none;
}

.btn-style:hover {
  background: #6e6869;
}

.btn-style:focus, .btn-style:active {
  background: #6e6869;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.4));
}

.container {
  width: 100%;
  border-radius: 20px;
  background: #D7E0E9;
  padding: 26px;
  margin-top: 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.input-style {
  margin: 10px 0 20px;
  background: #405159;
  border-radius: 6px;
  outline: 0;
  color: #FFFFFF;
  height: 28px;
  width: 240px;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 24px;
  padding: 7px;
  border: none;
}

.content-block {
  height: calc(100vh - 72px);
  width: 100%;
  padding: 23px 88px;
}

.title-block {
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  font-size: 28px;
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
</style>
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');

body {
  width: 100%;
  height: 100vh;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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
