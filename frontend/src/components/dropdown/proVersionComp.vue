<template>
  <div class="content-block">
    <div class="title-block">
      <span>ТАРИФЫ</span>
    </div>
    <div class="container-block pro-version">
      <div class="tariff" style="margin-right: 5%;">
        <span class="tariff-title">
          PRO ТАРИФ
        </span>
        <span class="cost">
          $6.99
          <span class="sub-cost">
            в месяц
          </span>
        </span>
        <button class="btn-style btn-pro" @click="modalShow = !modalShow">
          УЛУЧШИТЬ СЕЙЧАС
        </button>
        <div class="features-block">
          <span class="features-title">
            ВСЕ ИЗ FREE И:
          </span>
          <ul>
            <li>
              Неограниченное количество друзей
            </li>
            <li>
              Неограниченное количество событий в месяце
            </li>
            <li>
              Доступ к просмотрю календаря
            </li>
          </ul>
        </div>
      </div>
      <div class="tariff" style="color: #A09B9C;">
        <span class="tariff-title">
          FREE ТАРИФ
        </span>
        <span class="cost">
          $0
          <span class="sub-cost">
            всегда
          </span>
        </span>
        <button class="btn-style btn-grey btn-pro" @click="modalShowfree = !modalShowfree">
          НАЧАТЬ ИСПОЛЬЗОВАНИЕ
        </button>

        <div class="features-block">
          <span class="features-title">
            КЛЮЧЕВЫЕ ФУНКЦИИ:
          </span>
          <ul>
            <li>
              Добавление 5 друзей
            </li>
            <li>
              Добавление 3 событий в месяце
            </li>
            <li>
              Генерация досуга
            </li>
            <li>
              Сообщение в телеграм по заданному времени
            </li>
          </ul>
        </div>
      </div>

      <b-modal v-model="modalShow" hide-footer id="modal-proversion" size="sm" title="ПЕРЕХОД НА PRO ВЕРСИЮ">
        <div class="input-item">
          <label class="text-style">
            НОМЕР КАРТЫ
          </label>
          <b-form-input class="input-style" v-model="number"></b-form-input>
        </div>
        <div class="input-item">
          <label class="text-style">
            СРОК ДЕЙСТВИЯ
          </label>
          <div style="display: flex;">
            <b-form-input class="input-style" style="width: 20%!important; margin-right:5%"
                          v-model="month"></b-form-input>
            <b-form-input class="input-style" style="width: 20%!important" v-model="year"></b-form-input>
          </div>
        </div>
        <div class="input-item">
          <label class="text-style">
            CVV
          </label>
          <div style="display: flex;">
            <b-form-input class="input-style" style="width: 20%!important;" v-model="cvv"></b-form-input>
          </div>
        </div>
        <label v-show="error" style="color: red; margin-top: 5px;" class="subtext-style">
          НЕВЕРНЫЕ ДАННЫЕ
        </label>
        <div class="btns-all-width" style="display: block">
          <div class="btns-group" style="width: auto">
            <button class="btn-style btn-grey" @click="cancel">
              ОТМЕНА
            </button>
            <button class="btn-style" @click="getProVersion">
              СОХРАНИТЬ
            </button>
          </div>
        </div>
      </b-modal>

      <b-modal v-model="modalShowfree" hide-footer id="modal-freeversion" size="sm" title="ПЕРЕХОД НА FREE ВЕРСИЮ">
        <label class="text-style">
          ТЕПЕРЬ У ВАС БЕСПЛАТНАЯ ВЕРСИЯ
        </label>
        <div class="btns-all-width" style="display: block">
          <div class="btns-group" style="width: auto">
            <button class="btn-style" @click="getFreeVersion">
              ОТЛИЧНО
            </button>
          </div>
        </div>
      </b-modal>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import axios from "axios";

export default {
  name: "proVersionComp",
  data() {
    return {
      modalShow: false,
      modalShowfree: false,
      cvv: '',
      month: '',
      year: '',
      number: '',
      error: false
    }
  },
  computed: {
    ...mapGetters({
      user: 'getUser'
    })
  },
  methods: {
    ...mapActions({
      updateUserPRO: 'updateUserPRO',
      createLog: 'createLog'
    }),
    cancel() {
      this.modalShow = false;
      this.cvv = "";
      this.year = "";
      this.month = "";
      this.number = '';
    },
    async getFreeVersion() {
      let new_version = {
        isPro: false
      }
      await axios.put('http://localhost:7000/api/crud/User/' + this.user.id, new_version, {
        headers: {
          'token': `${this.user.token}`
        }
      }).then(() => {
        this.createLog({action: "Переход к FREE версии", token: this.user.token})
        this.updateUserPRO({version: false})
        this.modalShowfree = false;
      })
          .catch(error => console.log(error));
    },
    async getProVersion() {
      this.error = false;
      if (this.number.length != 16) {
        this.error = true
        return
      }
      if (this.year.length != 2) {
        this.error = true
        return
      }
      if (this.month.length != 2) {
        this.error = true
        return
      }
      if (this.cvv.length != 3) {
        this.error = true
        return
      }
      let new_version = {
        isPro: true
      }
      await axios.put('http://localhost:7000/api/crud/User/' + this.user.id, new_version, {
        headers: {
          'token': `${this.user.token}`
        }
      }).then(() => {
        this.createLog({action: "Повышение версии до PRO", token: this.user.token})
        this.updateUserPRO({version: true})
        this.modalShow = false;
        this.cvv = "";
        this.year = "";
        this.month = "";
        this.number = '';
      })
          .catch(error => console.log(error));
    }
  }
}
</script>

<style scoped>
.features-title {
  font-weight: bold;
}

.features-block {
  margin-top: 20px;
}

.btn-pro {
  width: 200px;
}

.sub-cost {
  font-size: 15px;
  font-weight: normal;
}

.cost {
  font-size: 50px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
}

.tariff-title {
  font-size: 23px;
  text-decoration: underline;
  font-weight: bold;
}

.tariff {
  background: #FFFFFF;
  width: 100%;
  padding: 45px 5%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pro-version {
  flex-direction: row;
}

.subtext-style {
  font-style: normal;
  font-weight: 500;
  font-size: 9px;
  line-height: 9px;
}
</style>