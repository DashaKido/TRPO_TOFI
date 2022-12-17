<template>
  <div class="content-block">
    <div class="title-block">
      <span>ВСЕ ПОЛЬЗОВАТЕЛИ</span>
    </div>
    <div class="container-block">
      <b-table striped hover sticky-header :fields="fields" :items="allUsers">
        <template #cell(_id)="data">
          <button class="btn-style" @click="deleteUser(data.value)">
            УДАЛИТЬ
          </button>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
// eslint-disable-next-line no-unused-vars
import axios from "axios";

export default {
  name: "adminPage",
  data() {
    return {
      fields: [
        {key: 'token', label: 'Токен'},
        {key: 'chatId', label: 'ID чата'},
        {key: 'lastName', label: 'Фамилия'},
        {key: 'name', label: 'Имя'},
        {key: 'birth', label: 'Дата рождения'},
        {key: 'isPro', label: 'Версия'},
        {key: '_id', label: 'Удалить'}
      ]
    }
  },
  computed: {
    ...mapGetters({
      allUsers: 'getAllUsers',
      user: 'getUser'
    })
  },
  methods: {
    ...mapActions({
      updateUsers: 'updateUsers',
      createLog: 'createLog'
    }),
    async deleteUser(id) {
      let deleted_user = -1;
      for (let item of this.allUsers) {
        if (item._id == id) {
          deleted_user = item;
        }
      }
      let index = this.allUsers.indexOf(deleted_user)
      this.allUsers.splice(index, 1);
      this.updateUsers({users: this.allUsers});
      await this.createLog({action: 'Удаление пользователя', addedId: id, token: this.user.token})
      await axios.delete('http://localhost:7000/api/crud/User/' + id, {
        headers: {
          'token': this.user.token
        }
      })
    }
  }
}

</script>
<style scoped>

</style>