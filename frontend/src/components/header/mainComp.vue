<template>
  <div class="content-block">
    <div class="title-block">
      <span>ГЛАВНЫЕ НОВОСТИ</span>
      <span>{{ todayTime }}</span>
    </div>
    <div class="container-block">
      <div class="main-comp">
        <div class="load-photo" style="width: 50%; margin-right: 0;">
          <div>
            <img class="photo-style" :src="news.photo">
          </div>
        </div>
        <div class="news-block">
          <div class="news-title">
            {{ news.title }}
          </div>
          <div class="news-main">
            <div class="nw-item" v-for="i in news.content" :key="i">
              <div class="nw-title">{{ i.title }}</div>
              <div class="nw-text">{{ i.content }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "mainComp",
  data() {
    return {}
  },
  methods: {},
  computed: {
    ...mapGetters({
      news: 'getOneNews'
    }),
    todayTime() {
      let date = new Date();
      return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
    },
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