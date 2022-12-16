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
        <div type="time" class="input-style input-settings">{{ settings.gmTime }}</div>
      </div>

      <div class="check-item">
        <div style="display: flex; align-items: center;">
          <b-form-checkbox v-model="settings.goodNight">
          </b-form-checkbox>
          <label class="text-style">
            СПОКОЙНОЙ НОЧИ
          </label>
        </div>
        <div type="time" class="input-style input-settings">{{ settings.gnTime }}</div>
      </div>

      <div class="check-item">
        <div style="display: flex; align-items: center;">
          <b-form-checkbox v-model="settings.randomCat">
          </b-form-checkbox>
          <label class="text-style">
            ОТПРАВКА РАНДОМНОГО КОТИКА
          </label>
        </div>
        <div type="time" class="input-style input-settings">{{ settings.rcTime }}</div>
      </div>

      <div class="check-item">
        <div style="display: flex; align-items: center;">
          <b-form-checkbox v-model="settings.template">
          </b-form-checkbox>
          <label class="text-style">
            СООБЩЕНИЕ ПО ШАБЛОНУ
          </label>
        </div>
        <div type="time" class="input-style input-settings">{{ settings.templateTime }}</div>
      </div>

      <b-form-textarea class="input-style textarea-style" v-model="settings.templateText">
      </b-form-textarea>

      <div class="btns-all-width">
        <div class="btns-group">
          <button class="btn-style btn-grey">
            ОТМЕНА
          </button>
          <button class="btn-style" @click="updateSettingsBtn">
            СОХРАНИТЬ
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import axios from "axios";

export default {
  name: "settingsComp",
  computed: {
    ...mapGetters({
      settings: 'getSettings',
    })
  },
  methods: {
    ...mapActions({
      updateSettings: 'updateSettings',
      createLog: 'createLog',
      loadMainPage: 'loadMainPage'
    }),
    async updateSettingsBtn() {
      let new_settings = {
        goodMorning: this.settings.goodMorning,
        goodNight: this.settings.goodNight,
        randomCat: this.settings.randomCat,
        template: this.settings.template,
        templateText: this.settings.templateText,
      }
      await axios.put('http://localhost:7000/api/crud/Settings/' + this.settings.id, new_settings, {
        headers: {
          'token': `${this.settings.token}`
        }
      })
          .then(() => {
                this.updateSettings({settings: this.settings});
                this.createLog({action: 'Изменение настроек чата', token: this.settings.token})
                this.loadMainPage();
              }
          )
          .catch(error => console.log(error))
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
  cursor: default;
}

.check-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  margin: 15px 0 0;
}
</style>