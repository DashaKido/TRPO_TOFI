<template>
  <div class="header-block">
    <span class="logo-text">TELEGRAM</span>
    <div class="main-sections-block" v-show="isLoginPage">
      <span v-for="lnk in links" v-bind:key="lnk" class="link-item">{{ lnk }}</span>
      <img class="avatar" src="../assets/profile.jpg"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "headerComp",
  props:[
      'isLoginPage',
  ],
  data() {
    return {
      links: [
        "ГЛАВНАЯ",
        "КАЛЕНДАРЬ",
        "НАСТРОЙКИ ЧАТА",
        "ДРУЗЬЯ",
      ]
    }
  }
}
</script>

<style scoped>
.avatar {
  width: 30px;
  height: 30px;
  border: 1px solid #405159;
  border-radius: 50px;
}

.link-item {
  display: flex;
  align-items: center;
  margin-right: 39px;
  font-weight: 500;
  color: #405159;
  line-height: 19px;
}

.link-item:last-child {
  margin-right: 0;
}

.logo-text {
  color: #405159;
  font-weight: 700;
  font-size: 15px;
  line-height: 29px;
}

.main-sections-block {
  display: flex;
}

.header-block {
  width: 100%;
  height: 42px;
  min-height: 42px;
  background: #D7E0E9;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>