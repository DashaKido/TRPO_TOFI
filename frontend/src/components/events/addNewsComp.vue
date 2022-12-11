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
            <b-form-input class="input-style" style="width: 100%!important;" v-model="title"></b-form-input>
          </div>

          <!--          <div class="input-item">-->
          <!--            <label class="text-style">-->
          <!--              КОЛИЧЕСТВО РАЗДЕЛОВ-->
          <!--            </label>-->
          <!--            <b-form-select v-model="selectedCount" :options="allCounts" class="select-style">-->
          <!--            </b-form-select>-->
          <!--          </div>-->

          <!--          <div v-for="">-->
          <!--          <div class="input-item">-->
          <!--            <label class="text-style">-->
          <!--              НАЗВАНИЕ-->
          <!--            </label>-->
          <!--            <b-form-input class="input-style" style="width: 100%!important;" v-model="title"></b-form-input>-->
          <!--          </div>-->

          <div class="input-item">
            <label class="text-style">
              СОДЕРЖАНИЕ
            </label>
            <b-form-textarea class="input-style textarea-style" style="width: 100%!important;"
                             v-model="text"></b-form-textarea>
          </div>
          <!--          </div>-->
        </div>
      </div>

      <div class="btns-all-width">
        <div class="btns-group">
          <button class="btn-style btn-grey" @click="loadNewsPage">
            ОТМЕНА
          </button>
          <button class="btn-style">
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
  name: "addNewsComp",
  data() {
    return {
      title: '',
      text: '',
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
      ]
    }
  },
  methods: {
    ...mapActions({
      loadNewsPage: 'loadNewsPage'
    }),
  }
}
</script>

<style scoped>
.textarea-style {
  margin-top: 15px;
  height: 150px;
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
</style>