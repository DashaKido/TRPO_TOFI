<template>
  <div class="content-block">
    <div class="title-block">
      <span>РЕДАКТИРОВАНИЕ ПРОФИЛЯ</span>
    </div>
    <div class="container-block" style="align-items: flex-start;">
      <div class="edit-profile">
        <div class="load-photo">
          <div>
            <img class="photo-style" :src="require('@/assets/anon.jpg')">
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
            <b-form-input class="input-style" v-model="user.lastName"></b-form-input>
          </div>

          <div class="input-item">
            <label class="text-style">
              ИМЯ
            </label>
            <b-form-input class="input-style" v-model="user.name"></b-form-input>
          </div>

          <div class="input-item">
            <label class="text-style">
              ДАТА РОЖДЕНИЯ
            </label>
            <input type="date" class="input-style" v-model="user.birth">
          </div>

          <div class="input-item">
            <label class="text-style">
              ВЕРСИЯ
            </label>
            <div style="display: flex; justify-content: space-between;">
              <div class="input-style" style="cursor: default;width: 100%!important;">{{ version() }}</div>
              <button class="btn-style btn-grey btn-upgrade" @click="loadProVersion">
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
import axios from "axios";

export default {
  name: "editProfileComp",
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      user: 'getUser'
    }),
  },
  methods: {
    ...mapActions({
      loadProVersion: 'loadProVersionPage',
      loadMainPage: 'loadMainPage',
      updateUser: 'updateUser'
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
      };
      await axios.put('http://localhost:7000/api/User/' + this.user.id, new_user, {
        headers: {
          'token': `${this.user.token}`
        }
      })
          .then(this.updateUser({user: new_user}))
          .catch(error => console.log(error));
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
</style>