<template>
  <div class="content-block">
    <div class="title-block">
      <span>ВСЕ ДРУЗЬЯ</span>
    </div>
    <div class="container-block">
      <div class="main-comp">
        <div class="one-person-block" v-for="person in persons" :key="person">
          <div class="load-photo" style="margin-bottom: 5%;">
            <img class="photo-style" :src="require('@/assets/friend.jpg')">
          </div>

          <div style="margin-right: 5%;">
            <div class="input-item">
              <label class="text-style">
                ИМЯ
              </label>
              <div class="input-style" style="cursor: default">{{ person.name }}</div>
            </div>

            <div class="input-item">
              <label class="text-style">
                ТЕЛЕГРАМ
              </label>
              <div class="input-style"  style="cursor: default">{{ person.nickname }}</div>
            </div>

            <div class="btns-all-width" style="justify-content: flex-start;">
              <div class="btns-group">
                <button class="btn-style" style="width: 117px;">
                  РЕДАКТИРОВАТЬ
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="one-person-block" v-show="countPersons >= 5 && !user.isPro">
          <button class="btn-upgrade" @click="loadProVersionPage"> РАЗБЛОКИРОВАТЬ ДОБАВЛЕНИЕ ДРУЗЕЙ</button>
        </div>
        <div class="one-person-block" v-show="(countPersons < 5 && !user.isPro) || (user.isPro)">
          <button class="btn-add-person" @click="loadAddPersonPage"></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "allFriends",
  computed: {
    ...mapGetters({
      persons: 'getPersons',
      user: 'getUser',
      countPersons: 'getCountPersons'
    })
  },
  methods: {
    ...mapActions({
      loadAddPersonPage: 'loadAddPersonPage',
      loadProVersionPage: 'loadProVersionPage'
    }),
  }
}
</script>

<style scoped>
.btn-add-person {
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

.btn-add-person:hover {
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='52' y1='5' x2='52' y2='95' stroke='%23E6ECF1' stroke-width='10' stroke-linecap='round'/%3E%3Cline x1='95' y1='53' x2='5' y2='53' stroke='%23E6ECF1' stroke-width='10' stroke-linecap='round'/%3E%3C/svg%3E%0A");
  background-color: #BBCAD8;
}

.btn-add-person:active, .btn-add-person:focus {
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='52' y1='5' x2='52' y2='95' stroke='%23E6ECF1' stroke-width='10' stroke-linecap='round'/%3E%3Cline x1='95' y1='53' x2='5' y2='53' stroke='%23E6ECF1' stroke-width='10' stroke-linecap='round'/%3E%3C/svg%3E%0A");
  background-color: #BBCAD8;
  box-shadow: 0 0 5px 0.25rem #ACACAD;
}

.btn-upgrade {
  font-size: 24px;
  font-weight: bold;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #b0abae;
  border-radius: 20px;
  color: #FFFFFF;
  border: none;
  width: 90%;
  height: 90%;
}

.btn-upgrade:hover {
  background-color: #c1bcbf;
}

.btn-upgrade:active, .btn-upgrade:focus {
  background-color: #b0abae;
  box-shadow: 0 0 5px 0.25rem #ACACAD;
}

.one-person-block {
  min-width: 50%;
  width: 50%;
  display: flex;
  max-height: 100%;
  height: 28vh;
}

.main-comp {
  display: flex;
  width: 100%;
  min-height: 60vh;
  height: 100%;
  flex-wrap: wrap;
}
</style>