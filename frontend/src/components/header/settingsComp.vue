<template>
  <div class="content-block">
    <div class="title-block">
      <span>НАСТРОЙКИ ЧАТА</span>
    </div>
    <div class="container-block" style="align-items: flex-start;">
      <span class="suptext-style">ВЫБЕРИТЕ ПУНКТЫ, КОТОРЫЕ ХОТИТЕ, ЧТОБЫ ТЕЛЕГРАМ БОТ ВАМ ОТПРАВЛЯЛ:</span>

      <div class="check-item">
        <div style="display: flex; align-items: center;">
          <b-form-checkbox v-model="settings.goodMorning">
          </b-form-checkbox>
          <label class="text-style">
            ДОБРОЕ УТРО
          </label>
        </div>
        <input type="time" class="input-style input-settings">
      </div>

      <div class="check-item">
        <div style="display: flex; align-items: center;">
          <b-form-checkbox v-model="settings.goodNight">
          </b-form-checkbox>
          <label class="text-style">
            СПОКОЙНОЙ НОЧИ
          </label>
        </div>
        <input type="time" class="input-style input-settings">
      </div>

      <div class="check-item">
        <div style="display: flex; align-items: center;">
          <b-form-checkbox v-model="settings.randomCat">
          </b-form-checkbox>
          <label class="text-style">
            ОТПРАВКА РАНДОМНОГО КОТИКА
          </label>
        </div>
        <input type="time" class="input-style input-settings">
      </div>

      <div class="check-item">
        <div style="display: flex; align-items: center;">
          <b-form-checkbox v-model="settings.template">
          </b-form-checkbox>
          <label class="text-style">
            СООБЩЕНИЕ ПО ШАБЛОНУ
          </label>
        </div>
        <input type="time" class="input-style input-settings">
      </div>

      <b-form-textarea class="input-style textarea-style">
      </b-form-textarea>

      <div class="btns-all-width">
        <div class="btns-group">
          <button class="btn-style btn-grey">
            ОТМЕНА
          </button>
          <button class="btn-style">
            СОХРАНИТЬ
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "settingsComp",
  computed: {
    ...mapGetters({
      settings: 'getSettings'
    })
  },
  methods: {
    ...mapActions({
      updateSettings: 'updateSettings'
    }),
    updateSettingsBtn(){

    }
  }
}
</script>

<style scoped>
.textarea-style {
  width: 50% !important;
  margin-top: 15px;
  height: 150px;
}

.input-settings {
  margin: 0px;
  width: 30% !important;
}

.check-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  margin: 15px 0 0;
}
</style>