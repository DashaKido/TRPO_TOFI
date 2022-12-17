<template>
  <div class="content-block">
    <div class="title-block">
      <span>РЕДАКТИРОВАНИЕ ПОЛЬЗОВАТЕЛЯ</span>
    </div>
    <div class="container-block" style="align-items: flex-start;">
      <div class="edit-profile">
        <div class="load-photo">
          <div>
            <img class="photo-style" :src="editUser.fileLink">
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
            <b-form-input class="input-style" v-model="editUser.lastName"></b-form-input>
          </div>

          <div class="input-item">
            <label class="text-style">
              ИМЯ
            </label>
            <b-form-input class="input-style" v-model="editUser.name"></b-form-input>
          </div>

          <div class="input-item">
            <label class="text-style">
              ДАТА РОЖДЕНИЯ
            </label>
            <input type="date" class="input-style" v-model="editUser.birth">
          </div>

          <div class="input-item">
            <label class="text-style">
              ВЕРСИЯ
            </label>
            <b-form-select v-model="editUser.isPro" :options="allVersions" class="select-style">
            </b-form-select>
          </div>
        </div>
      </div>

      <div class="btns-all-width">
        <div class="btns-group">
          <button class="btn-style btn-grey">
            ОТМЕНА
          </button>
          <button class="btn-style" @click="updateUser(editUser._id)">
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
  name: "editUserComp",
  data() {
    return {
      allVersions: [
        {
          value: true,
          text: 'PRO'
        },
        {
          value: false,
          text: 'FREE'
        }
      ]
    }
  },
  computed: {
    ...mapGetters({
      editUser: 'getEditUser',
      allUsers: 'getAllUsers',
      user: 'getUser'
    })
  },
  methods: {
    ...mapActions({
      updateUsers: 'updateUsers',
      createLog: 'createLog',
      loadAdminPage: 'loadAdminPage'
    }),
    handleInput(e) {
      if (!e.target.files) return;
      e.preventDefault();
      const selectedImg = e.target.files[0];
      this.createBase64Image(selectedImg);
    },
    createBase64Image(fileImg) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.editUser.fileLink = e.target.result;
        this.$emit('imgset', this.editUser.fileLink);
      }
      reader.readAsDataURL(fileImg)
    },
    async updateUser(id) {
      // eslint-disable-next-line no-unused-vars
      let new_user = {
        birth: this.editUser.birth,
        isPro: this.editUser.isPro,
        lastName: this.editUser.lastName,
        name: this.editUser.name,
        fileLink: this.editUser.fileLink
      }
      await axios.put('http://localhost:7000/api/crud/User/' + this.editUser._id, new_user, {
        headers: {
          'token': `${this.user.token}`
        }
      }).then(async () => {
        let edit_user = -1;
        for (let item of this.allUsers) {
          if (item._id == id) {
            edit_user = item;
          }
        }
        let index = this.allUsers.indexOf(edit_user)
        this.allUsers.splice(index, 1, this.editUser);
        this.updateUsers({users: this.allUsers});
        await this.createLog({action: 'Редактирование пользователя', addedId: id, token: this.user.token});
        this.loadAdminPage();
      })
    }
  }
}
</script>

<style scoped>
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

.edit-profile {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}

.select-style {
  margin: 5px 0 15px;
  background-color: #405159;
  background-image: url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill='none' stroke='%23D7E0E9' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3E%3C/svg%3E");
  border-radius: 6px;
  outline: 0;
  color: #FFFFFF;
  height: 28px;
  width: 100%;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  border: none;
}

.select-style:focus {
  box-shadow: 0 0 5px 0.25rem #8fb1c1;
}
</style>