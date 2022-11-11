<template>
  <div class="content-block">
    <span class="title-block">ПЕРВОНАЧАЛЬНЫЙ ВХОД</span>
    <div class="container-block">
      <div class="input-item">
        <span class="text-style">
          ИМЯ
        </span>
        <input class="input-style">
      </div>

      <div class="input-item">
        <span class="text-style">
          ПАРОЛЬ
        </span>
        <input type="password" class="input-style">
      </div>

      <div class="input-item">
        <span class="text-style">
          ПОВТОРИТЕ ПАРОЛЬ
        </span>
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
  name: "registrationComp",
  props: ['onShowRegistration'],
  data() {
    return {
      isShow: false,
    }
  },
  methods: {
    onShow() {
      this.onShowRegistration({
        isShow: this.isShow
      })
    }
  }
}
</script>

<style scoped>

</style>