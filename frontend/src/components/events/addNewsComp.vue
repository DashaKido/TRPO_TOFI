<template>
  <div class="content-block">
    <div class="title-block">
      <span>ДОБАВЛЕНИЕ НОВОСТИ</span>
    </div>
    <div class="container-block" style="align-items: flex-start;">
      <div class="add-news">
        <div class="load-photo">
          <div>
            <img class="photo-style" :src="require('@/assets/friend.jpg')">
          </div>
          <div>
            <label class="input-label">ЗАГРУЗИТЬ ФОТО</label>
          </div>
        </div>

        <div style="width: 100%">
          <div class="input-item">
            <label class="text-style">
              ЗАГОЛОВОК
            </label>
            <b-form-input class="input-style" style="width: 100%!important;" v-model="name"></b-form-input>
          </div>

          <div class="input-item">
            <label class="text-style">
              КОЛИЧЕСТВО РАЗДЕЛОВ
            </label>
            <b-form-select @change="changeSelect" v-model="selectedCount" :options="allCounts" class="select-style">
            </b-form-select>
          </div>
          <div class="news-main">
            <div class="nw-item" v-for="item in arr_news" :key="item">
              <div class="input-item">
                <label class="text-style">
                  НАЗВАНИЕ
                </label>
                <b-form-input class="input-style" style="width: 100%!important;" v-model="item.title"></b-form-input>
              </div>

              <div class="input-item">
                <label class="text-style">
                  СОДЕРЖАНИЕ
                </label>
                <b-form-textarea class="input-style textarea-style" style="width: 100%!important;"
                                 v-model="item.content"></b-form-textarea>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div class="btns-all-width">
        <div class="btns-group">
          <button class="btn-style btn-grey" @click="loadNewsPage">
            ОТМЕНА
          </button>
          <button class="btn-style" @click="addNews">
            СОХРАНИТЬ
          </button>
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
  name: "addNewsComp",
  data() {
    return {
      title: '',
      content: '',
      selectedCount: 2,
      allCounts: [
        {
          value: 2,
          text: 2
        },
        {
          value: 4,
          text: 4
        },
        {
          value: 6,
          text: 6
        },
        {
          value: 8,
          text: 8
        },
      ],
      errorTitle: false,
      errorContent: false,
      photo: '',
      arr_news: [{title: '', content: ''}, {title: '', content: ''}],
      name: ''
    }
  },
  computed: {
    ...mapGetters({
      user: 'getUser',
      news: 'getNews'
    })
  },
  methods: {
    ...mapActions({
      loadNewsPage: 'loadNewsPage',
      updateNews: 'updateNews',
      createLog: 'createLog'
    }),
    changeSelect(value) {
      this.arr_news = [];
      let index = this.allCounts.findIndex(item => item.value == value);
      this.selectedCount = this.allCounts[index].value;
      for (let i = 0; i < value; i++) {
        this.arr_news.push({title: '', content: ''})
      }
    },
    async addNews() {

      let new_news = {
        title: this.name,
        content: this.arr_news,
        photo: this.photo,
        sectionCount: this.selectedCount
      }
      await axios.post('http://localhost:7000/api/News', new_news, {
        headers: {
          'token': this.user.token
        }
      }).then((response) => {
            new_news._id = response.data.insertedId;
            this.news.push(new_news);
            this.updateNews({news: this.news});
            this.createLog({action: 'Добавление новости', addedId: response.data.insertedId, token: this.user.token})
            this.loadNewsPage();
            this.name = '';
            this.selectedCount = 2;
            this.arr_news =  [{title: '', content: ''}, {title: '', content: ''}];
          }
      ).catch(error => console.log(error))
    }
  }
}
</script>

<style scoped>
.textarea-style {
  margin-top: 15px;
  /*height: 150px;*/
}

.add-news {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
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

.news-main {
  display: flex;
  flex-wrap: wrap;
}

.nw-item {
  width: 50%;
  padding-bottom: 22px;
}

.nw-item:nth-child(2n) {
  padding-left: 22px;
}

.news-block {
  width: 100%;
  margin-left: 4%;
}
</style>