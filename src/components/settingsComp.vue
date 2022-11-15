<template>
  <div class="content-block">
    <div class="title-block">
      <span>НАСТРОЙКИ ЧАТА</span>
    </div>
    <div class="container-block" style="align-items: flex-start;">
      <span class="text-style" style="font-size: 14px;">ВЫБЕРИТЕ ПУНКТЫ, КОТОРЫЕ ХОТИТЕ, ЧТОБЫ ТЕЛЕГРАМ БОТ ВАМ ОТПРАВЛЯЛ:</span>

      <div class="check-item">
        <div style="display: flex; align-items: center;">
          <b-form-checkbox>
          </b-form-checkbox>
          <label class="text-style">
            ДОБРОЕ УТРО
          </label>
        </div>
        <input type="time" class="input-style input-settings">
      </div>

      <div class="check-item">
        <div style="display: flex; align-items: center;">
          <b-form-checkbox>
          </b-form-checkbox>
          <label class="text-style">
            СПОКОЙНОЙ НОЧИ
          </label>
        </div>
        <input type="time" class="input-style input-settings">
      </div>

      <div class="check-item">
        <div style="display: flex; align-items: center;">
          <b-form-checkbox>
          </b-form-checkbox>
          <label class="text-style">
            ОТПРАВКА РАНДОМНОГО КОТИКА
          </label>
        </div>
        <input type="time" class="input-style input-settings">
      </div>

      <div class="check-item">
        <div style="display: flex; align-items: center;">
          <b-form-checkbox>
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
        <div class="btns-group" style="width: 20%;">
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
export default {
  name: "settingsComp",
}
</script>

<style scoped>
.btns-all-width {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

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