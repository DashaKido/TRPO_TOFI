<template>
  <div class="main-block">
    <header-comp :is-login-page="isLoginPage"/>
    <div class="content-block">
      <title-comp title="Вход"/>
      <first-login-comp/>
    </div>
    <footer-comp/>
  </div>
</template>

<script>
import headerComp from "@/components/headerComp";
import footerComp from "@/components/footerComp";
import TitleComp from "@/components/titleComp";
import FirstLoginComp from "@/components/firstLoginComp";

export default {
  name: 'App',
  components: {
    FirstLoginComp,
    TitleComp,
    headerComp,
    footerComp
  },
  data() {
    return {
      isLoginPage: false,
    }
  }
}
</script>

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
.content-block{
  height: calc(100vh - 72px);
  width: 100%;
  padding: 23px 88px;
}
.main-block {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
}
</style>
