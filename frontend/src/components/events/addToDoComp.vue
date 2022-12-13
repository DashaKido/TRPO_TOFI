<template>
  <div class="content-block">
    <div class="title-block">
      <span>ДОБАВЛЕНИЕ СПИСКА ДЕЛ</span>
    </div>
    <div class="container-block" style="align-items: flex-start;">
      <div style="width: 100%;">
        <div class="input-item">
          <label class="text-style">
            ЗАГОЛОВОК
          </label>

          <div class="btns-group-small">
            <input v-model="title" class="input-style">
          </div>
        </div>
        <div class="input-item">
          <label class="text-style">
            НАЗВАНИЕ
          </label>

          <div class="btns-group-small">
            <input style="margin-bottom: 0px;" v-model="name" class="input-style">
            <button class="btn-add" @click="addNewItem"></button>
          </div>
        </div>

        <div style="margin-top: 20px;">
          <label class="text-style">
            СПИСОК ДЕЛ
          </label>

          <div class="btns-group-small">
            <b-form-select v-model="selectedName" :options="allItems" class="select-style">
            </b-form-select>
            <button @click="deleteInfo" class="btn-add btn-delete"></button>
          </div>
          <div style="height: auto; width: 100% !important;"
               class="input-style">
            <div v-for="item in allItems" :key="item">
              {{ item.value }}. {{ item.text }}
            </div>
          </div>
        </div>
      </div>
      <div class="btns-all-width">
        <div class="btns-group">
          <button class="btn-style btn-grey" @click="loadAllPersonsPage">
            ОТМЕНА
          </button>
          <button class="btn-style" @click="addToDo">
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
  name: "addToDoComp",
  data() {
    return {
      name: '',
      allItems: [],
      selectedName: 1,
      title: ''
    }
  },
  computed: {
    ...mapGetters({
      user: 'getUser',
      todo: 'getToDo'
    })
  },
  methods: {
    ...mapActions({
      updateToDo: 'updateToDo',
      createLog: 'createLog',
      loadAllToDoPage: 'loadAllToDoPage'
    }),
    addNewItem() {
      let value = 0;
      if (this.allItems.length == 0) {
        value = 1;
      } else {
        value = this.allItems[this.allItems.length - 1].value + 1;
      }
      this.allItems.push({text: this.name, value: value, status: false})
      this.name = '';
    },
    deleteInfo() {
      let index = this.allItems.findIndex(item => item.value == this.selectedName);
      this.allItems.splice(index, 1);
      this.selectedName = '';
    },
    async addToDo() {
      let new_todo = {
        items: this.allItems,
        token: this.user.token,
        title: this.title
      }
      await axios.post('http://localhost:7000/api/ToDo', new_todo, {
        headers: {
          'token': this.user.token
        }
      }).then((response) => {
        new_todo._id = response.data.insertedId;
        this.todo.push(new_todo);
        this.updateToDo({todo: this.todo});
        this.createLog({action: 'Добавление списка дел', addedId: response.data.insertedId, token: this.user.token});
        this.loadAllToDoPage();
        this.name = '';
        this.allItems = [];
        this.selectedName = 1;
        this.title = '';
      }).catch(error => console.log(error));
    }
  }
}
</script>

<style scoped>
.btns-group-small {
  display: flex;
}

.btn-add {
  margin: 10px 0 0 10px;
  padding: 0;
  background-image: url("data:image/svg+xml,%3Csvg width='15' height='15' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='7.5' y1='6.55671e-08' x2='7.5' y2='15' stroke='%23405159' stroke-width='3'/%3E%3Cline y1='7.5' x2='15' y2='7.5' stroke='%23405159' stroke-width='3'/%3E%3C/svg%3E%0A");
  background-repeat: no-repeat;
  border: 0;
  width: 21px;
  height: 21px;
  background-color: #D7E0E9;
}

.btn-delete {
  margin-top: 17px;
  background-image: url("data:image/svg+xml,%3Csvg width='15' height='3' viewBox='0 0 15 3' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cline y1='1.5' x2='15' y2='1.5' stroke='%23405159' stroke-width='3'/%3E%3C/svg%3E%0A");
}

.subtext-style {
  font-style: normal;
  font-weight: 500;
  font-size: 9px;
  line-height: 9px;
}


.select-style {
  margin: 5px 0 15px;
  background-color: #405159;
  background-image: url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill='none' stroke='%23D7E0E9' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3E%3C/svg%3E");
  border-radius: 6px;
  outline: 0;
  color: #FFFFFF;
  height: 28px;
  width: 240px !important;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  border: none;
}

.select-style:focus {
  box-shadow: 0 0 5px 0.25rem #8fb1c1;
}
</style>