<template>
  <div class="content-block">
    <div class="title-block">
      <span>ВСЕ НОВОСТИ</span>
    </div>
    <div class="container-block">
      <div class="btns-all-width">
        <div class="btns-group">
          <div></div>
          <button class="btn-style" style="width:166px; margin-top: 0px; margin-bottom: 22px;"
                  @click="loadAddNewsPage">
            ДОБАВИТЬ НОВОСТЬ
          </button>
        </div>
      </div>
      <div class="news-comp" v-for="item in news" :key="item">
        <img class="pht-style" :src="item.photo">
        <div class="news-block">
          <div class="news-title">
            {{ item.title }}
          </div>
          <div class="news-main">
            <div class="nw-item" v-for="i in item.content" :key="i">
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
import {mapActions, mapGetters} from "vuex";

export default {
  name: "newsPage",
  computed: {
    ...mapGetters({
      news: 'getNews'
    })
  },
  methods: {
    ...mapActions({
      loadAddNewsPage: 'loadAddNewsPage'
    })
  }
}
</script>

<style scoped>
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

.news-block {
  width: 100%;
  margin-left: 4%;
}

.news-comp {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  margin-bottom: 5%;
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

.news-img {
  border-radius: 20px;
  width: 80%;
  height: auto;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: 50%;
  background-position-y: 50%;
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

.news-main {
  display: flex;
  flex-wrap: wrap;
}

.pht-style {
  width: 80%;
  height: auto;
  border: 1px solid #405159;
  border-radius: 20px;
}
</style>