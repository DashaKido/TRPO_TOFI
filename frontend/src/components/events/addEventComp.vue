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
            <b-form-input class="input-style" v-model="title"></b-form-input>
          </div>

          <div class="input-item">
            <label class="text-style">
              ВАЖНОСТЬ
            </label>
            <input class="input-style" v-model="importance">
          </div>

          <div class="input-item">
            <label class="text-style">
              ДАТА СОБЫТИЯ
            </label>
            <input type="date" class="input-style" v-model="startDate">
          </div>

          <div class="input-item">
            <label class="text-style">
              ВРЕМЯ
            </label>
            <input type="time" class="input-style" v-model="time">
          </div>
        </div>
      </div>

      <div class="btns-all-width">
        <div class="btns-group">
          <button class="btn-style btn-grey" @click="goToCalendar">
            ОТМЕНА
          </button>
          <button class="btn-style" @click="addEvent">
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
  name: "addEventComp",
  data() {
    return {
      selectedFriend: null,
      startDate: '2022-12-01',
      title: '',
      time: '12:00',
      importance: ''
    }
  },
  computed: {
    ...mapGetters({
      user: 'getUser',
      persons: 'getPersons',
      events: 'getEvents'
    }),
    allFriends() {
      let arr = []
      arr.push({
        value: this.user._id,
        text: 'Я'
      })
      for (let item of this.persons) {
        arr.push({
          value: item._id,
          text: item.name + " (" + item.nickname + ")"
        })
      }

      return arr;
    }
  },
  methods: {
    ...mapActions({
      loadCalendarPage: 'loadCalendarPage',
      updateEvents: 'updateEvents',
      createLog: 'createLog'
    }),
    goToCalendar() {
      this.loadCalendarPage();
    },
    async addEvent() {
      let date = new Date()
      date.setFullYear(this.startDate.substring(0, 4))
      date.setDate(this.startDate.substring(8, 10));
      date.setHours(this.time.substring(0, 2));
      date.setMonth(this.startDate.substring(5, 7) - 1);
      date.setMinutes(this.time.substring(3, 5));
      let new_event = {
        startDate: date,
        title: this.title,
        tooltip: this.title + ' (' + this.selectedFriend + ')',
        person: this.selectedFriend,
        importance: this.importance
      }
      await axios.post('http://localhost:7000/api/Event', new_event, {
        headers: {
          'token': this.user.token
        }
      }).then((response) => {
        new_event._id = response.data.insertedId;
        this.events.push(new_event);
        this.updateEvents({events: this.events})
        this.createLog({action: 'Добавление события', addedId: response.data.insertedId, token: this.user.token})
        this.loadCalendarPage();
        this.startDate = '';
        this.time = '';
        this.title = '';
        this.selectedFriend = 1;
        this.importance = '';
      })
          .catch(error => console.log(error))
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