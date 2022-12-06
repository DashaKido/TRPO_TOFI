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
              ВЫБОР ДРУГА
            </label>
            <b-form-select v-model="selectedCategory" :options="allCategory" class="select-style">
            </b-form-select>
          </div>

          <div class="input-item">
            <label class="text-style">
              ФАМИЛИЯ
            </label>
            <b-form-input class="input-style"></b-form-input>
          </div>

          <div class="input-item">
            <label class="text-style">
              ИМЯ
            </label>
            <input class="input-style">
          </div>

          <div class="input-item">
            <label class="text-style">
              ТЕЛЕГРАМ
            </label>
            <input class="input-style">
          </div>

          <div class="input-item">
            <label class="text-style">
              ДАТА РОЖДЕНИЯ
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
                <input style="width: 100% !important; margin-bottom: 0px;" v-model="name" class="input-style">
                <button class="btn-add" @click="addNewInfo"></button>
              </div>

              <label v-show="errorName" style="color: red; margin-top: 5px;" class="subtext-style">
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
            <b-form-textarea v-model="selectedInfo" style="height: 150px!important; width: 100% !important;"
                             class="input-style">

            </b-form-textarea>
          </div>
        </div>
      </div>

      <div class="btns-all-width">
        <div class="btns-group">
          <button class="btn-style btn-grey" @click="goToAllPerson">
            ОТМЕНА
          </button>
          <button class="btn-style" @click="goToAllPerson">
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
  name: "addPersonComp",
  data() {
    return {
      selectedCategory: null,
      allCategory: [
        {
          value: null,
          text: 'Друг'
        },
        {
          value: 1,
          text: 'Парень/девушка'
        },
        {
          value: 2,
          text: 'Сестра/брат'
        },
        {
          value: 3,
          text: 'Родитель'
        },
        {
          value: 4,
          text: 'Другое'
        },
      ],
      selectedName: 1,
      selectedInfo: 'Родилась 30.10.2003. Любит танцы и мотоциклы',
      allInfo: [
        {
          value: 1,
          text: 'Информация о сестре',
          main: 'Родилась 30.10.2003. Любит танцы и мотоциклы',
        },
        {
          value: 2,
          text: 'Информация о папе',
          main: 'Родился 30.10.1975. Любит рыбалку и хоккей.' +
              'Родился 30.10.1975. Любит рыбалку и хоккей.' +
              'Родился 30.10.1975. Любит рыбалку и хоккей.' +
              'Родился 30.10.1975. Любит рыбалку и хоккей.' +
              'Родился 30.10.1975. Любит рыбалку и хоккей.' +
              'Родился 30.10.1975. Любит рыбалку и хоккей.' +
              '',
        },
        {
          value: 3,
          text: 'Информация о брате',
          main: 'Родился 11.12.2019. Любит собак.',
        }
      ],
      name: '',
      info: '',
      errorName: false,
      errorInfo: false,
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
    addNewInfo() {
      this.errorName = false;
      this.errorInfo = false;
      if (this.name == '' && this.info == '') {
        this.errorName = true;
        this.errorInfo = true;
        return;
      }
      if (this.name == '') {
        this.errorName = true;
        return;
      }
      if (this.info == '') {
        this.errorInfo = true;
        return;
      }
      let value = this.allInfo[this.allInfo.length - 1].value + 1;
      this.allInfo.push({main: this.info, text: this.name, value: value})
      this.info = '';
      this.name = '';
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
    goToAllPerson() {
      this.loadMainPage(false);
      this.loadCalendarPage(false);
      this.loadSettingsPage(false);
      this.loadAllPersonsPage(true);

      this.loadEditProfilePage(false);
      this.loadProVersionPage(false);
      this.loadLeisurePage(false);

      this.loadAddEventPage(false);
      this.loadAddPersonPage(false);
    },
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