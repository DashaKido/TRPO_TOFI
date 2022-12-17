<template>
  <div class="content-block">
    <div class="title-block">
      <span>ДОСУГ</span>
    </div>
    <div class="container-block">
      <div class="btns-all-width">
        <div class="btns-group">
          <div></div>
          <button class="btn-style" style="width:166px; margin-top: 0px; margin-bottom: 22px;"
                  @click="generateLeisure">
            СГЕНЕРИРОВАТЬ ДОСУГ
          </button>
        </div>
      </div>
      <div class="add-person" v-show="showLeisure">
        <div class="input-item">
          <label class="news-title">
            СГЕНЕРИРОВАННЫЙ ДОСУГ
          </label>
          <span class="nw-title">{{ leisure.idea }}</span>
        </div>
        <div class="input-item" style="margin-top:5%">
          <label class="news-title">
            С КЕМ ЕГО ЛУЧШЕ ПРОВЕСТИ
          </label>
          <span class="nw-title">{{ leisure.bestWith }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {mapGetters} from "vuex";

export default {
  name: "leisurePage",
  data() {
    return {
      leisure: {},
      showLeisure: false
    }
  },
  computed: {
    ...mapGetters({
      user: 'getUser'
    })
  },
  methods: {
    async generateLeisure() {
      await axios.get('http://localhost:7000/api/generate-leisure', {
        headers: {
          'token': `${this.user.token}`
        }
      })
          .then(resp => {
            this.leisure = resp.data.randomDate;
            this.showLeisure = true
          })
          .catch(error => console.log(error))
    }
  }
}
</script>

<style scoped>
.add-person {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.news-title {
  font-size: 20px;
  color: #405159;
  font-weight: bold;
  width: 100%;
  text-align: justify;
}
.nw-title {
  color: #5B5657;
  font-weight: 200;
  font-size: 30px;
  line-height: 26px;
  margin-top: 5px;
  text-align: justify;
}
</style>