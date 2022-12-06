<template>
  <div class="content-block">
    <div class="title-block">
      <span>ДОБАВЛЕНИЕ СОБЫТИЯ</span>
    </div>
    <div class="container-block" style="align-items: flex-start;">
      <div class="add-event">
        <div class="load-photo">
          <div>
            <img class="photo-style" :src="require('@/assets/friend.jpg')">
          </div>
        </div>

        <div>
          <div class="input-item">
            <label class="text-style">
              ВЫБОР ДРУГА
            </label>
            <b-form-select v-model="selectedFriend" :options="allFriends" class="select-style">
            </b-form-select>
          </div>

          <div class="input-item">
            <label class="text-style">
              НАЗВАНИЕ
            </label>
            <b-form-input class="input-style"></b-form-input>
          </div>

          <div class="input-item">
            <label class="text-style">
              ВАЖНОСТЬ
            </label>
            <input class="input-style">
          </div>

          <div class="input-item">
            <label class="text-style">
              ДАТА СОБЫТИЯ
            </label>
            <input type="date" class="input-style">
          </div>

          <div class="input-item">
            <label class="text-style">
              ВРЕМЯ
            </label>
            <input type="time" class="input-style">
          </div>
        </div>
      </div>
      <div class="btns-all-width">
        <div class="btns-group">
          <button class="btn-style btn-grey" @click="goToCalendar">
            ОТМЕНА
          </button>
          <button class="btn-style" @click="goToCalendar">
            СОХРАНИТЬ
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "addEventComp",
  data() {
    return {
      selectedFriend: null,
      allFriends: [
        {
          value: null,
          text: 'Я (@mytg)'
        },
        {
          value: 1,
          text: 'Friend 1 (@tg1)'
        },
        {
          value: 2,
          text: 'Friend 2 (@tg2)'
        },
        {
          value: 3,
          text: 'Friend 3 (@tg3)'
        },
        {
          value: 4,
          text: 'Friend 4 (@tg4)'
        },
      ],
    }
  },
  methods: {
    ...mapActions({
      loadCalendarPage: 'loadCalendarPage',
    }),
    goToCalendar() {
      this.loadCalendarPage();
    },
  }
}
</script>

<style scoped>

.add-event {
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
  width: 240px;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  border: none;
}

.select-style:focus {
  box-shadow: 0 0 5px 0.25rem #8fb1c1;
}
</style>