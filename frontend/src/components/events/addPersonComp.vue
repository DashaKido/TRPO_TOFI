<template>
  <div class="content-block">
    <div class="title-block">
      <span>ДОБАВЛЕНИЕ ДРУГА</span>
    </div>
    <div class="container-block" style="align-items: flex-start;">
      <div class="add-person">
        <div class="load-photo">
          <div>
            <img class="photo-style" :src="require('@/assets/boyfriend.jpg')">
          </div>
          <div>
            <label class="input-label">ЗАГРУЗИТЬ ФОТО</label>
          </div>
        </div>

        <div style="margin-right: 5%;">
          <div class="input-item">
            <label class="text-style">
              ВЫБОР КАТЕГОРИИ
            </label>
            <b-form-select v-model="selectedCategory" :options="allCategory" class="select-style">
            </b-form-select>
          </div>

          <div class="input-item">
            <label class="text-style">
              ФАМИЛИЯ
            </label>
            <b-form-input class="input-style" v-model="lastName"></b-form-input>
          </div>

          <div class="input-item">
            <label class="text-style">
              ИМЯ
            </label>
            <input class="input-style" v-model="name" style="margin-bottom: 0">
            <label v-show="errorName" style="color: red; margin-top: 5px; " class="subtext-style">
              ОБЯЗАТЕЛЬНОЕ ПОЛЕ ДЛЯ ЗАПОЛНЕНИЯ
            </label>
          </div>

          <div class="input-item">
            <label class="text-style" style="margin-top: 15px;">
              ТЕЛЕГРАМ
            </label>
            <input class="input-style" v-model="nickname" style="margin-bottom: 0">
            <label v-show="errorTelegram" style="color: red; margin-top: 5px;" class="subtext-style">
              ОБЯЗАТЕЛЬНОЕ ПОЛЕ ДЛЯ ЗАПОЛНЕНИЯ
            </label>
          </div>

          <div class="input-item">
            <label class="text-style" style="margin-top: 15px;">
              ДАТА РОЖДЕНИЯ
            </label>
            <input type="date" class="input-style" v-model="birthdate">
          </div>
        </div>

        <div>
          <div>
            <label class="suptext-style">
              ДОБАВИТЬ ИНФОРМАЦИЮ
            </label>

            <div style="margin-top: 5px;" class="input-item">
              <label class="text-style">
                НАЗВАНИЕ
              </label>

              <div class="btns-group-small">
                <input style="width: 100% !important; margin-bottom: 0px;" v-model="nameInfo" class="input-style">
                <button class="btn-add" @click="addNewInfo"></button>
              </div>

              <label v-show="errorNameInfo" style="color: red; margin-top: 5px;" class="subtext-style">
                ОБЯЗАТЕЛЬНОЕ ПОЛЕ ДЛЯ ЗАПОЛНЕНИЯ
              </label>
            </div>
          </div>

          <div style="margin-top: 10px; " class="input-item">
            <label class="text-style">
              ИНФОРМАЦИЯ
            </label>

            <b-form-textarea v-model="info" style="margin-bottom: 0px; width: 100% !important;"
                             class="input-style"></b-form-textarea>
            <label v-show="errorInfo" style="color: red; margin-top: 5px;" class="subtext-style">
              ОБЯЗАТЕЛЬНОЕ ПОЛЕ ДЛЯ ЗАПОЛНЕНИЯ
            </label>
          </div>

          <div style="margin-top: 10px;">
            <label class="suptext-style">
              ДОПОЛНИТЕЛЬНАЯ ИНФОРМАЦИЯ
            </label>

            <div class="btns-group-small">
              <b-form-select @change="changeSelect" v-model="selectedName" :options="allInfo" class="select-style">
              </b-form-select>
              <button @click="deleteInfo" class="btn-add btn-delete"></button>
            </div>
            <div style="height: 150px!important; width: 100% !important;"
                 class="input-style">
              {{ selectedInfo }}
            </div>
          </div>
        </div>
      </div>

      <div class="btns-all-width">
        <div class="btns-group">
          <button class="btn-style btn-grey" @click="loadAllPersonsPage">
            ОТМЕНА
          </button>
          <button class="btn-style" @click="addPerson">
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
  name: "addPersonComp",
  data() {
    return {
      selectedCategory: 1,
      allCategory: [
        {
          value: 1,
          text: 'Друг'
        },
        {
          value: 2,
          text: 'Подруга'
        },
        {
          value: 3,
          text: 'Парень'
        },
        {
          value: 4,
          text: 'Девушка'
        },
        {
          value: 5,
          text: 'Брат'
        },
        {
          value: 6,
          text: 'Сестра'
        },
        {
          value: 7,
          text: 'Родитель'
        },
        {
          value: 8,
          text: 'Другое'
        },
      ],
      selectedName: 1,
      selectedInfo: '',
      allInfo: [],
      nameInfo: '',
      info: '',
      errorNameInfo: false,
      errorInfo: false,
      errorName: false,
      errorTelegram: false,
      birthdate: '1970-01-01',
      lastName: '',
      name: '',
      nickname: '',
    }
  },
  computed: {
    ...mapGetters({
      user: 'getUser',
      persons: 'getPersons'
    })
  },
  methods: {
    ...mapActions({
      loadAllPersonsPage: 'loadAllPersonsPage',
      updatePersons: 'updatePersons',
      createLog: 'createLog'
    }),
    addNewInfo() {
      this.errorNameInfo = false;
      this.errorInfo = false;
      if (this.nameInfo == '' && this.info == '') {
        this.errorNameInfo = true;
        this.errorInfo = true;
        return;
      }
      if (this.nameInfo == '') {
        this.errorNameInfo = true;
        return;
      }
      if (this.info == '') {
        this.errorInfo = true;
        return;
      }
      let value = 0;
      if (this.allInfo.length == 0) {
        value = 1;
        this.selectedInfo = this.info;
      } else {
        value = this.allInfo[this.allInfo.length - 1].value + 1;
      }
      this.allInfo.push({main: this.info, text: this.nameInfo, value: value})
      this.info = '';
      this.nameInfo = '';
    },
    changeSelect(value) {
      let index = this.allInfo.findIndex(item => item.value == value);
      this.selectedInfo = this.allInfo[index].main;
    },
    deleteInfo() {
      let index = this.allInfo.findIndex(item => item.main == this.selectedInfo);
      this.allInfo.splice(index, 1);
      this.selectedInfo = '';
    },
    async addPerson() {
      this.errorName = false;
      this.errorTelegram = false;
      if (this.name == '' && this.nickname == '') {
        this.errorName = true;
        this.errorTelegram = true;
        return;
      }
      if (this.name == '') {
        this.errorName = true;
        return;
      }
      if (this.nickname == '') {
        this.errorTelegram = true;
        return;
      }
      let new_person = {
        birthdate: this.birthdate,
        category: this.selectedCategory,
        lastName: this.lastName,
        name: this.name,
        nickname: this.nickname,
        token: this.user.token,
        info: this.allInfo,
      }
      await axios.post('http://localhost:7000/api/Person', new_person, {
        headers: {
          'token': this.user.token
        }
      }).then((response) => {
            new_person._id = response.data.insertedId;
            this.persons.push(new_person)
            this.updatePersons({persons: this.persons});
            this.createLog({action: 'Добавление друга', addedId: response.data.insertedId, token: this.user.token})
            this.loadAllPersonsPage();
            this.birthdate = "";
            this.selectedCategory = 1;
            this.lastName = '';
            this.name = '';
            this.nickname = '';
            this.allInfo = [];

          }
      ).catch(error => console.log(error))
    }
  }
}
</script>

<style scoped>
.btns-group-small {
  display: flex;
  justify-content: space-between;
}

.btn-add {
  margin: 10px 0 0 10px;
  padding: 0;
  background-image: url("data:image/svg+xml,%3Csvg width='15' height='15' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='7.5' y1='6.55671e-08' x2='7.5' y2='15' stroke='%23405159' stroke-width='3'/%3E%3Cline y1='7.5' x2='15' y2='7.5' stroke='%23405159' stroke-width='3'/%3E%3C/svg%3E%0A");
  background-repeat: no-repeat;
  border: 0;
  width: 21px;
  height: 21px;
  background-color: #D7E0E9;
}

.btn-delete {
  margin-top: 17px;
  background-image: url("data:image/svg+xml,%3Csvg width='15' height='3' viewBox='0 0 15 3' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cline y1='1.5' x2='15' y2='1.5' stroke='%23405159' stroke-width='3'/%3E%3C/svg%3E%0A");
}

.subtext-style {
  font-style: normal;
  font-weight: 500;
  font-size: 9px;
  line-height: 9px;
}

.add-person {
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
  width: 100%;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  border: none;
}

.select-style:focus {
  box-shadow: 0 0 5px 0.25rem #8fb1c1;
}
</style>