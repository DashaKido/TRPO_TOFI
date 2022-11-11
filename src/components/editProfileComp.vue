<template>
  <div class="content-block">
    <div class="title-block">
      <span>РЕДАКТИРОВАНИЕ ПРОФИЛЯ</span>
    </div>
    <div class="container-block edit-profile">
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
          <b-form-input class="input-style"></b-form-input>
        </div>
        <div class="btns-edit">
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
}
</script>

<style scoped>
.btns-edit {
  display: flex;
  justify-content: space-between;
}

.input-label {
  margin-top: 22px;
  text-decoration-line: underline;
}

.photo-style {
  max-width: 100%;
  border: 1px solid #405159;
  border-radius: 20px;
}


.load-photo {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 30px;
  width: 25%;
}

.edit-profile {
  flex-direction: row;
  align-items: flex-start;
}
</style>