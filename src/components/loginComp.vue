<template>
  <div class="content-block">
    <span class="title-block">ВХОД</span>
    <div class="container-block">
      <div class="input-item">
        <label class="text-style">
          TELEGRAM
        </label>
        <input class="input-style">
      </div>

      <div class="input-item">
        <label class="text-style">
          ПАРОЛЬ
        </label>
        <input type="password" class="input-style">
      </div>

      <button class="btn-style" @click="onShow">
        ВОЙТИ
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "loginComp",
  props: ['onShowLogin'],
  data() {
    return {
      isShow: false,
    }
  },
  methods: {
    onShow() {
      this.onShowLogin({
        isShow: this.isShow,
      })
    }
  }
}
</script>
<style scoped>
</style>