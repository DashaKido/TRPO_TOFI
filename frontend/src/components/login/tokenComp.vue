<template>
  <div class="content-block">
    <span class="title-block">ВВОД ТОКЕНА</span>
    <div class="container-block">
      <div class="input-item">
      <span class="text-style">
        TOKEN
      </span>
        <input class="input-style" v-model="token" style="margin-bottom: 0;"
               v-on:keyup.enter="signIn">
        <label v-show="errorToken" style="color: red; margin-top: 5px;" class="subtext-style">
          НЕВЕРНЫЙ TOKEN
        </label>
      </div>

      <button class="btn-style" :style="`${errorToken?'margin-top:10px;':'margin-top:15px;'}`" @click="signIn">
        ВОЙТИ
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {mapActions, mapGetters} from "vuex";

export default {
  name: "tokenComp",
  data() {
    return {
      isShow: false,
      token: '',
      errorToken: false
    }
  },
  computed: {
    ...mapGetters({
      user: 'getUser'
    })
  },
  methods: {
    ...mapActions({
      fillUser: 'fillUser',
      loadMain: 'loadMainPage',
      createSettings: 'createSetting',
      getAllPersons: 'getAllPersons',
      getAllEvents: 'getAllEvents'
    }),
    async signIn() {
      await axios.get('http://localhost:7000/api/me', {
        headers: {
          'token': `${this.token}`
        }
      })
          .then(responce => {
                if (responce.data == '') {
                  this.errorToken = true;
                } else {
                  this.errorToken = false;
                  let user = responce.data;
                  this.fillUser({
                    birth: user.birth,
                    isPro: user.isPro,
                    lastName: user.lastName,
                    name: user.name,
                    persons: user.persons,
                    id: user._id,
                    token: user.token,
                    chatId: user.chatId,
                  });
                  this.createSettings({user: this.user});
                  this.getAllPersons({user: this.user});
                  this.getAllEvents({user: this.user})
                  this.loadMain();
                }
              }
          )
          .catch(error => {
            this.errorToken = true;
            console.log(error);
          });
    }
  }
}
</script>

<style scoped>
.subtext-style {
  font-style: normal;
  font-weight: 500;
  font-size: 9px;
  line-height: 9px;
}
</style>