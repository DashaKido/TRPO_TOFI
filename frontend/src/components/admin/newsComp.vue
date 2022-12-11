<template>
  <div class="content-block">
    <div class="title-block">
      <span>НОВОСТИ</span>
    </div>
    <div class="container-block" style="align-items: flex-start;">
      <div class="btns-all-width">
        <div class="btns-group">
          <div></div>
          <button class="btn-style" style="width:166px; margin-top: 0px; margin-bottom: 22px;"
                  @click="loadAddNewsPage">
            ДОБАВИТЬ СОБЫТИЕ
          </button>
        </div>
      </div>
      <div class="style-comp">
        ll
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "newsPage",
  methods: {
    ...mapActions({
      loadAddNewsPage: 'loadAddNewsPage'
    })
  }
}
</script>

<style scoped>
.style-comp {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  height: 100%;
  min-height: 60vh;
  max-height: 80vh;
  border-radius: 20px;
}
</style>