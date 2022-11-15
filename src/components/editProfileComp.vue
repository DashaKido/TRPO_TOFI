<template>
  <div class="content-block">
    <div class="title-block">
      <span>РЕДАКТИРОВАНИЕ ПРОФИЛЯ</span>
    </div>
    <div class="container-block" style="align-items: flex-start;">
      <div class="edit-profile">
        <div class="load-photo">
          <div>
            <img class="photo-style" :src="require('../assets/anon.jpg')">
          </div>
          <div>
            <label class="input-label">ЗАГРУЗИТЬ ФОТО</label>
          </div>
        </div>
        <div>
          <div class="input-item">
            <label class="text-style">
              ФАМИЛИЯ
            </label>
            <b-form-input class="input-style"></b-form-input>
          </div>

          <div class="input-item">
            <label class="text-style">
              ИМЯ
            </label>
            <b-form-input class="input-style"></b-form-input>
          </div>

          <div class="input-item">
            <label class="text-style">
              TELEGRAM
            </label>
            <b-form-input class="input-style"></b-form-input>
          </div>

          <div class="input-item">
            <label class="text-style">
              ДАТА РОЖДЕНИЯ
            </label>
            <input type="date" class="input-style">
          </div>
        </div>
      </div>

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
export default {
  name: "editProfileComp",
  data() {
    return {
      dateBirthday: null
    }
  }
}
</script>

<style scoped>

.edit-profile {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
</style>