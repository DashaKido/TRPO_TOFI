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
import {mapGetters} from "vuex";

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
      allUsers: 'getAllUsers'
    })
  },
  methods: {
    // async deleteUser(id) {
    //
    // }
  }
}
</script>
<style scoped>

</style>