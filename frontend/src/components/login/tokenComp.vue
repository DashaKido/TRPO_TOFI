<template>
  <div class="content-block">
    <span class="title-block">ВВОД ТОКЕНА</span>
    <div class="container-block">
      <div class="input-item">
      <span class="text-style">
        TOKEN
      </span>

        <input class="input-style">
      </div>

      <button class="btn-style" @click="onShow">
        ВОЙТИ
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "tokenComp",
  props: ['onShowToken'],
  data() {
    return {
      isShow: false,
    }
  },
  methods: {
    onShow() {
      this.onShowToken({
        isShow: this.isShow,
      })
    }
  }
}
</script>

<style scoped>
</style>