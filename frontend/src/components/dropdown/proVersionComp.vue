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
        <button class="btn-style btn-pro" @click="modalChoose = !modalChoose">
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

      <b-modal v-model="modalChoose" hide-footer id="modal-choosemonth" size="sm" title="ВЫБОР ПЕРИОДА ПОДПИСКИ">
        <div v-show="!user.isPro">
          <div class="input-item">
            <label class="text-style">
              ВЫБЕРИТЕ ПЕРИОД ПОДПИСКИ
            </label>
            <b-form-radio-group v-model="radio">
              <b-form-radio @change="getTotalCost" value="1" style="margin-bottom: 5px;">1 месяц</b-form-radio>
              <b-form-radio @change="getTotalCost" value="3" style="margin-bottom: 5px;">3 месяца</b-form-radio>
              <b-form-radio @change="getTotalCost" value="6" style="margin-bottom: 5px;">6 месяцев</b-form-radio>
              <b-form-radio @change="getTotalCost" value="12" style="margin-bottom: 5px;">Год</b-form-radio>
            </b-form-radio-group>
          </div>
          <div class="input-item" style="margin-top: 10px">
            <label class="text-style">
              ИТОГОВАЯ СУММА
            </label>
            <div style="display: flex; font-size: 35px; font-weight: bold">
              {{ totalCost }} $
            </div>
          </div>
          <div class="btns-all-width" style="display: block">
            <div class="btns-group" style="width: auto">
              <button class="btn-style btn-grey" @click="cancel">
                ОТМЕНА
              </button>
              <button class="btn-style" @click="(modalShow = !modalShow) && (modalChoose =!modalChoose)">
                ОПЛАТИТЬ
              </button>
            </div>
          </div>
        </div>
        <div v-show="user.isPro" style="display: flex;flex-direction: column;">
          У ВАС УЖЕ АКТИВИРОВАНА PRO ВЕРСИЯ
          <button class="btn-style btn-grey" @click="cancel">
            СПАСИБО
          </button>
        </div>
      </b-modal>

      <b-modal v-model="modalShow" hide-footer id="modal-proversion" size="sm" title="ПЕРЕХОД НА PRO ВЕРСИЮ">
        <div v-show="!user.isPro">
          <div class="input-item">
            <label class="text-style">
              НОМЕР КАРТЫ
            </label>
            <input required class="input-style" autocomplete="off" v-model="number" style="  margin-bottom: 5px;">
            <label v-show="errorNumber" style="color: red;  margin-bottom: 5px; margin-top: 8px;" class="subtext-style">
              НЕВЕРНЫЕ ДАННЫЕ
            </label>
          </div>
          <div class="input-item">
            <label class="text-style">
              СРОК ДЕЙСТВИЯ
            </label>
            <div style="display: flex;">
              <input required class="input-style" autocomplete="off"
                     style="width: 20%!important; margin-right:5%;  margin-bottom: 5px;"
                     v-model="month">
              <input required autocomplete="off" class="input-style" style="width: 20%!important;   margin-bottom: 5px;"
                     v-model="year">
            </div>
            <label v-show="errorDate" style="color: red;  margin-bottom: 5px; margin-top: 8px;" class="subtext-style">
              НЕВЕРНЫЕ ДАННЫЕ
            </label>
          </div>
          <div class="input-item">
            <label class="text-style">
              CVV
            </label>
            <div style="display: flex;">
              <input type="password" autocomplete="off" class="input-style"
                     style="width: 20%!important;  margin-bottom: 5px;"
                     v-model="cvv">
            </div>
            <label v-show="errorCVV" style="color: red;  margin-bottom: 5px; margin-top: 8px;" class="subtext-style">
              НЕВЕРНЫЕ ДАННЫЕ
            </label>
          </div>
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
        </div>
        <div v-show="user.isPro" style="display: flex;flex-direction: column;">
          У ВАС УЖЕ АКТИВИРОВАНА PRO ВЕРСИЯ
          <button class="btn-style btn-grey" @click="cancel">
            СПАСИБО
          </button>
        </div>
      </b-modal>

      <b-modal v-model="modalShowfree" hide-footer id="modal-freeversion" size="sm" title="ПЕРЕХОД НА FREE ВЕРСИЮ">
        <div v-show="user.isPro">
          <label class="text-style">
            ВЫ УВЕРЕНЫ, ЧТО ХОТИТЕ ОТМЕНИТЬ ПОДПИСКУ?
          </label>
          <div class="btns-all-width" style="display: block">
            <div class="btns-group" style="width: auto">
              <button class="btn-style btn-grey" @click="modalShowfree = !modalShowfree">
                НЕТ
              </button>
              <button class="btn-style" @click="getFreeVersion">
                ДА
              </button>
            </div>
          </div>
        </div>
        <div v-show="!user.isPro">
          <label class="text-style">
            У ВАС УЖЕ АКТИВИРОВАНА FREE ВЕРСИЯ
          </label>
          <div class="btns-all-width" style="display: block">
            <div class="btns-group" style="width: auto">
              <button class="btn-style" @click="getFreeVersion">
                ОТЛИЧНО
              </button>
            </div>
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
      modalChoose: false,
      cvv: '',
      month: '',
      year: '',
      number: '',
      errorCVV: false,
      errorNumber: false,
      errorDate: false,
      radio: 1,
      totalCost: "6.99",
      monthCost: 6.99
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
      createLog: 'createLog',
      loadMainPage: 'loadMainPage'
    }),
    cancel() {
      this.modalShow = false;
      this.modalShowfree = false;
      this.modalChoose = false;
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
        this.modalShow = false;
        this.modalShowfree = false;
        this.modalChoose = false;
        this.loadMainPage();
      })
          .catch(error => console.log(error));
    },
    async getProVersion() {
      this.errorNumber = false;
      this.errorCVV = false;
      this.errorDate = false;
      if (this.number.length != 16 && (this.year.length != 2 || this.month.length != 2) && this.cvv.length != 3) {
        this.errorNumber = true;
        this.errorDate = true;
        this.errorCVV = true;
        return
      }
      if (this.number.length != 16 && (this.year.length != 2 || this.month.length != 2)) {
        this.errorNumber = true;
        this.errorDate = true;
        return
      }
      if (this.number.length != 16 && this.cvv.length != 3) {
        this.errorNumber = true;
        this.errorCVV = true
        return
      }
      if ((this.year.length != 2 || this.month.length != 2) && this.cvv.length != 3) {
        this.errorDate = true;
        this.errorCVV = true
        return
      }
      if (this.number.length != 16) {
        this.errorNumber = true
        return
      }
      if (this.year.length != 2 || this.month.length != 2) {
        this.errorDate = true
        return
      }
      if (this.cvv.length != 3) {
        this.errorCVV = true
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
      })
          .catch(error => console.log(error));
      this.modalShow = false;
      this.modalShowfree = false;
      this.modalChoose = false;
      this.errorNumber = false;
      this.errorCVV = false;
      this.errorDate = false;
      this.loadMainPage();
      let new_sub = {
        monthCount: this.radio,
        totalCost: this.totalCost,
        monthCost: this.monthCost,
        dateStart: new Date(),
      }
      await axios.post('http://localhost:7000/api/crud/Subscription', new_sub, {
        headers: {
          'token': `${this.user.token}`
        }
      }).then((response) => {
        this.createLog({action: "Создание подписки", addedId: response.data.insertedId, token: this.user.token})
      }).catch(error => console.log(error));

      let new_contract = {
        executor: 'ИП Ларионов Н.А., ОГРНИП: 317645100088118, юридический и фактический адрес: 410054, Россия, г. Саратов, Детский 2-й проезд, дом 43, кв. 27 тел.: +7 (987) 836-88-12, электронная почта: zen@vonoiral.com',
        user: this.user.lastName + " " + this.user.name,
        services: "просмотр календаря событий, неограниченное количество добавленных друзей, неограниченное количество событий в 1 месяце",
        cost: this.totalCost,
        period: this.radio + " месяцев",
        dateStart: new Date(),
        requisites: "Индивидуальный предприниматель\n" +
            "Ларионов Никита Александрович\n" +
            "Юридический адрес:\n" +
            "410054, Россия, г. Саратов, Детский 2-й проезд, дом 43, кв. 27\n" +
            "ОГРНИП: 317645100088118\n" +
            "ИНН 645498705200",
      }
      await axios.post('http://localhost:7000/api/crud/Contract', new_contract, {
        headers: {
          'token': `${this.user.token}`
        }
      }).then((response) => {
        this.createLog({action: "Создание договора", addedId: response.data.insertedId, token: this.user.token})
      }).catch(error => console.log(error));

      let new_payment = {
        payer: this.user.lastName + " " + this.user.name,
        date: new Date(),
        recipient_account: 'BY26AKBB30121789200000000010',
        sum: this.totalCost,
        receiver: "Ларионов Никита Александрович"
      }
      await axios.post('http://localhost:7000/api/crud/Payment', new_payment, {
        headers: {
          'token': `${this.user.token}`
        }
      }).then((response) => {
        this.createLog({action: "Произведение платежа", addedId: response.data.insertedId, token: this.user.token})
      }).catch(error => console.log(error));
      await axios.get('http://localhost:7000/api/crud/Card', {
        headers: {
          'token': `${this.user.token}`
        }
      }).then(async (response) => {
        if (response.data.length == 0) {
          let year = this.$CryptoJS.AES.encrypt(this.year, "Secret Passphrase").toString();
          let cvv = this.$CryptoJS.AES.encrypt(this.cvv, "Secret Passphrase").toString();
          let month = this.$CryptoJS.AES.encrypt(this.month, "Secret Passphrase").toString();
          let new_card = {
            number: this.number,
            year: year,
            month: month,
            cvv: cvv,
            lastname: this.user.lastName,
            name: this.user.name
          }
          await axios.post('http://localhost:7000/api/crud/Card', new_card, {
            headers: {
              'token': `${this.user.token}`
            }
          }).then((resp) => {
            this.createLog({
              action: "Сохранение карты пользователя",
              addedId: resp.data.insertedId,
              token: this.user.token
            })
          }).catch(error => console.log(error));
        }
        this.cvv = "";
        this.year = "";
        this.month = "";
        this.number = '';
      })
    },
    async getTotalCost(value) {
      this.totalCost = value * this.monthCost;
    }
  }
}
</script>

<style>
.form-check-label span {
  font-size: 12px;
}
</style>

<style scoped>
.radio-group {
  width: 100%;
  display: flex;
}

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