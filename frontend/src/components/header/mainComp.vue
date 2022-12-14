<template>
  <div class="content-block">
    <div class="title-block">
      <span>ГЛАВНЫЕ НОВОСТИ</span>
      <span>{{ todayTime }}</span>
    </div>
    <div class="container-block">
      <div class="news-comp">
        <div class="news-img news1">
        </div>
        <div class="news-block">
          <div class="news-title">
<!--            {{ news.title }}-->
          </div>
          <div class="news-main">
<!--            <div class="nw-item" v-for="i in news.content" :key="i">-->
<!--              <div class="nw-title">{{ i.title }}</div>-->
<!--              <div class="nw-text">{{ i.content }}</div>-->
<!--            </div>-->
          </div>
        </div>
      </div>
      <!--      <div class="main-comp" v-show="isNews1">-->
      <!--        <div class="news-img news1">-->
      <!--        </div>-->
      <!--        <div class="news-block">-->
      <!--          <div class="news-title">-->
      <!--            КАК ПОНРАВИТЬСЯ ДЕВОЧКЕ: СОВЕТЫ И ПСИХОЛОГИЧЕСКИЕ ТРЮКИ-->
      <!--          </div>-->
      <!--          <div class="news-main">-->
      <!--            <div class="nw-item" v-for="item in news.news1" :key="item">-->
      <!--              <div class="nw-title">{{ item.title }}</div>-->
      <!--              <div class="nw-text">{{ item.text }}</div>-->
      <!--            </div>-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </div>-->
      <!--      <div class="main-comp" v-show="isNews2">-->
      <!--        <div class="news-img news2">-->
      <!--        </div>-->
      <!--        <div class="news-block">-->
      <!--          <div class="news-title">-->
      <!--            6 ЧЕСТНЫХ ЦИТАТ О МУЖЧИНАХ ИЗ ЛУЧШИХ КНИГ ПО ПСИХОЛОГИИ-->
      <!--          </div>-->
      <!--          <div class="news-main">-->
      <!--            <div class="nw-item" v-for="item in news.news2" :key="item">-->
      <!--              <div class="nw-title">{{ item.title }}</div>-->
      <!--              <div class="nw-text">{{ item.text }}</div>-->
      <!--            </div>-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </div>-->
      <!--      <div class="main-comp" v-show="isNews3">-->
      <!--        <div class="news-img news3">-->
      <!--        </div>-->
      <!--        <div class="news-block">-->
      <!--          <div class="news-title">-->
      <!--            4 ПОЛЕЗНЫХ СОВЕТА ОТ САМОГО УСПЕШНОГО ПРЕДПРИНИМАТЕЛЯ В ИСТОРИИ ЯКОБА ФУГГЕРА-->
      <!--          </div>-->
      <!--          <div class="news-main">-->
      <!--            <div class="nw-item" v-for="item in news.news3" :key="item">-->
      <!--              <div class="nw-title">{{ item.title }}</div>-->
      <!--              <div class="nw-text">{{ item.text }}</div>-->
      <!--            </div>-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </div>-->
      <!--      <div class="btns-carousel">-->
      <!--        <button class="btn-carousel" :class="`${isNews1?'btn-carousel-active':' '}`" @click="showNews1"></button>-->
      <!--        <button class="btn-carousel" :class="`${isNews2?'btn-carousel-active':' '}`" @click="showNews2"></button>-->
      <!--        <button class="btn-carousel" :class="`${isNews3?'btn-carousel-active':' '}`" @click="showNews3"></button>-->
      <!--      </div>-->
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "mainComp",
  data() {
    return {
    }
  },
  methods: {
  },
  computed: {
    todayTime() {
      let date = new Date();
      console.log(this.news)
      return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
    },
    ...mapGetters({
      news: 'getOneNews'
    })
  }
}
</script>

<style scoped>
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

.news2 {
  background-image: url("@/assets/news2.jpg");
}

.news3 {
  background-image: url("@/assets/news3.jpg");
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
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
}
</style>