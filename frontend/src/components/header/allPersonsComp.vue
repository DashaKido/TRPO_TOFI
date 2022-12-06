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
                КАТЕГОРИЯ
              </label>
              <div class="input-style">{{ person.category }}</div>
            </div>

            <div class="input-item">
              <label class="text-style">
                ТЕЛЕГРАМ
              </label>
              <div class="input-style">{{ person.telegram }}</div>
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
        <div class="one-person-block">
          <button class="btn-add-person" @click="goToAddPerson"></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "allFriends",
  data() {
    return {
      persons: [
        {
          photo: '@/assets/boyfriend.jpg',
          category: 'Парень/девушка',
          telegram: '@ya_naym',
        },
        {
          photo: '@/assets/friend.jpg',
          category: 'Подруга/друг',
          telegram: '@lissaaa',
        },
        {
          photo: '@/assets/sister.jpg',
          category: 'Сестра/брат',
          telegram: '@kat_rya',
        },
        // {
        //   photo: '@/assets/brother.jpg',
        //   category: 'Сестра/брат',
        //   telegram: '@shef.in',
        // },
      ],
    }
  },
  methods: {
    ...mapActions({
      loadMainPage: 'setMainPage',
      loadSettingsPage: 'setSettingsPage',
      loadCalendarPage: 'setCalendarPage',
      loadAllPersonsPage: 'setAllPersonsPage',

      loadEditProfilePage: 'setEditProfilePage',
      loadProVersionPage: 'setProVersionPage',
      loadLeisurePage: 'setLeisurePage',

      loadAddEventPage: 'setAddEventPage',
      loadAddPersonPage: 'setAddPersonPage'
    }),
    goToAddPerson() {
      this.loadMainPage(false);
      this.loadCalendarPage(false);
      this.loadSettingsPage(false);
      this.loadAllPersonsPage(false);

      this.loadEditProfilePage(false);
      this.loadProVersionPage(false);
      this.loadLeisurePage(false);

      this.loadAddEventPage(false);
      this.loadAddPersonPage(true);
    }
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

.one-person-block {
  min-width: 50%;
  width: 50%;
  display: flex;
  max-height: 100%;
  height: 28vh;
}

.btns-carousel {
  margin-top: 22px;
}

.btn-carousel, .btn-carousel:hover, .btn-carousel:focus, .btn-carousel:active {
  width: 10px;
  height: 10px;
  background: #8FB1C1;
  border-radius: 20px;
  border: none;
  padding: 0;
  margin-right: 5px;
}

.btn-carousel-active, .btn-carousel-active:hover, .btn-carousel-active:focus, .btn-carousel-active:active {
  background: #405159;
}

.nw-item {
  width: 50%;
  padding-bottom: 22px;
}

.nw-item:nth-child(2n) {
  padding-left: 22px;
}

.nw-title {
  color: #5B5657;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  margin-bottom: 2px;
  text-align: justify;
}

.nw-text {
  font-weight: 300;
  font-size: 12px;
  line-height: 15px;
  text-align: justify;
}

.news-main {
  display: flex;
  flex-wrap: wrap;
}

.news-title {
  font-size: 20px;
  color: #405159;
  font-weight: bold;
  width: 100%;
  margin-bottom: 22px;
  text-align: justify;
  margin-top: -5px;
}

.news-block {
  width: 100%;
  margin-left: 4%;
}

.news1 {
  background-image: url("@/assets/news1.jpg");
}

.news-img {
  border-radius: 20px;
  width: 80%;
  height: auto;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: 50%;
  background-position-y: 50%;
}

.main-comp {
  display: flex;
  width: 100%;
  min-height: 60vh;
  height: 100%;
  flex-wrap: wrap;
}
</style>