<template>
  <div class="content-block">
    <div class="title-block">
      <span>РЕДАКТИРОВАНИЕ ПРОФИЛЯ</span>
    </div>
    <div class="container-block" style="align-items: flex-start;">
      <div class="edit-profile">
        <div class="load-photo">
          <div>
            <img class="photo-style" :src="file">
          </div>
          <div class="input_wrapper">
            <input @input="handleInput" type="file" name="file" id="input_file_user" accept="image/*"
                   class="input input_file">

            <label for="input_file_user" class="input-label">ЗАГРУЗИТЬ ФОТО</label>
          </div>
        </div>

        <div>
          <div class="input-item">
            <label class="text-style">
              ФАМИЛИЯ
            </label>
            <b-form-input required class="input-style" v-model="user.lastName"></b-form-input>
          </div>

          <div class="input-item">
            <label class="text-style">
              ИМЯ
            </label>
            <b-form-input required class="input-style" v-model="user.name"></b-form-input>
          </div>

          <div class="input-item">
            <label class="text-style">
              ДАТА РОЖДЕНИЯ
            </label>
            <input required type="date" class="input-style" v-model="user.birth">
          </div>

          <div class="input-item">
            <label class="text-style">
              ВЕРСИЯ
            </label>
            <div style="display: flex; justify-content: space-between;">
              <div class="input-style" style="cursor: default;width: 100%!important;">{{ version() }}</div>

              <button v-show="!user.isPro" class="btn-style btn-grey btn-upgrade" @click="loadProVersion">
                УЛУЧШИТЬ
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="btns-all-width">
        <div class="btns-group">
          <button class="btn-style btn-grey">
            ОТМЕНА
          </button>
          <button class="btn-style" @click="updateUserBtn">
            СОХРАНИТЬ
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
// eslint-disable-next-line no-unused-vars
import axios from "axios";

export default {
  name: "editProfileComp",
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      user: 'getUser',
      file: 'getUserFile'
    }),
  },
  methods: {
    ...mapActions({
      loadProVersion: 'loadProVersionPage',
      loadMainPage: 'loadMainPage',
      updateUser: 'updateUser',
      createLog: 'createLog',
      updatePhoto: 'updateUserPhoto',
      updateUserFileLink: 'updateUserFileLink'
    }),
    version() {
      if (this.user.isPro) {
        return 'PRO'
      } else {
        return 'FREE'
      }
    },
    async updateUserBtn() {
      let new_user = {
        birth: this.user.birth,
        isPro: this.user.isPro,
        lastName: this.user.lastName,
        name: this.user.name,
        fileLink: this.file
      };
      await axios.put('http://localhost:7000/api/crud/User/' + this.user.id, new_user, {
        headers: {
          'token': `${this.user.token}`
        }
      })
          .then(() => {
            this.createLog({action: "Редактирование пользователя", token: this.user.token})
            this.updateUser({user: this.user})
            this.updateUserFileLink({photo: this.file})
            this.loadMainPage();
          })
          .catch(error => console.log(error));
    },
    handleInput(e) {
      if (!e.target.files) return;
      e.preventDefault();
      const selectedImg = e.target.files[0];
      this.createBase64Image(selectedImg);
    },
    createBase64Image(fileImg) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.updatePhoto({photo: e.target.result})
      }
      reader.readAsDataURL(fileImg)
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

.btn-upgrade {
  margin-top: 5px;
  margin-left: 5%;
  min-width: 106px;
}

.input_wrapper {
  width: 100%;
  position: relative;
  margin: 15px 0;
  text-align: center;
}

.input_file {
  opacity: 0;
  visibility: hidden;
  position: absolute;
}
</style>