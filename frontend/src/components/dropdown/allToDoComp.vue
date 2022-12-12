<template>
  <div class="content-block">
    <div class="title-block">
      <span>СПИСКИ ДЕЛ</span>
    </div>
    <div class="container-block">
      <div class="main-comp">
        <div class="one-todo-block" v-for="item in todo" :key="item">
          <div style="margin-right: 5%;">
            <div class="input-item">
              <label class="text-style">
                {{ item.title }}
              </label>
              <div class="input-style" style="height: auto;">
                <div v-for="td in item.items" :key="td" style="display: flex;">
                  <b-form-checkbox v-model="td.status" @change="changeStatus(item._id, item.items)">
                  </b-form-checkbox>
                  <span :class="`${td.status?'check_true':''}`">{{ td.value }}. {{ td.text }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="one-todo-block">
          <button class="btn-add-todo" @click="loadAddToDoPage"></button>
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
  name: "allToDoComp",
  computed: {
    ...mapGetters({
      todo: 'getToDo',
      user: 'getUser'
    })
  },
  methods: {
    ...mapActions({
      loadAddToDoPage: 'loadAddToDoPage',
      createLog: 'createLog',
      updateToDo: 'updateToDo',
    }),
    async changeStatus(id, items) {
      let new_todo = {
        items: items
      };
      await axios.put('http://localhost:7000/api/ToDo/' + id, new_todo, {
        headers: {
          'token': this.user.token
        }
      }).then(() => {
            this.updateToDo({todo: this.todo});
            this.createLog({action: 'Изменен список дел', token: this.user.token});
          }
      ).catch(error => console.log(error));
    }
  }
}
</script>

<style scoped>
.one-todo-block {
  min-width: 50%;
  width: 50%;
  display: flex;
  max-height: 100%;
  height: 28vh;
}

.btn-add-todo {
  font-size: 12px;
  line-height: 24px;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='52' y1='5' x2='52' y2='95' stroke='%23DDE5ED' stroke-width='10' stroke-linecap='round'/%3E%3Cline x1='95' y1='53' x2='5' y2='53' stroke='%23DDE5ED' stroke-width='10' stroke-linecap='round'/%3E%3C/svg%3E%0A");
  background-color: #c1ceda;
  border-radius: 20px;
  color: #FFFFFF;
  border: none;
  width: 90%;
  height: 90%;
}

.btn-add-todo:hover {
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='52' y1='5' x2='52' y2='95' stroke='%23E6ECF1' stroke-width='10' stroke-linecap='round'/%3E%3Cline x1='95' y1='53' x2='5' y2='53' stroke='%23E6ECF1' stroke-width='10' stroke-linecap='round'/%3E%3C/svg%3E%0A");
  background-color: #BBCAD8;
}

.btn-add-todo:active, .btn-add-todo:focus {
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='52' y1='5' x2='52' y2='95' stroke='%23E6ECF1' stroke-width='10' stroke-linecap='round'/%3E%3Cline x1='95' y1='53' x2='5' y2='53' stroke='%23E6ECF1' stroke-width='10' stroke-linecap='round'/%3E%3C/svg%3E%0A");
  background-color: #BBCAD8;
  box-shadow: 0 0 5px 0.25rem #ACACAD;
}

.main-comp {
  display: flex;
  width: 100%;
  min-height: 60vh;
  height: 100%;
  flex-wrap: wrap;
}
.check_true{
  text-decoration: line-through;
}
</style>