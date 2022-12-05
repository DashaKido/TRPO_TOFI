<template>
  <div class="content-block">
    <div class="title-block">
      <span>ГЛАВНЫЕ НОВОСТИ</span>
      <span>{{todayTime}}</span>
    </div>
    <div class="container-block">
      <div class="main-comp" v-show="isNews1">
        <div class="news-img news1">
        </div>
        <div class="news-block">
          <div class="news-title">
            КАК ПОНРАВИТЬСЯ ДЕВОЧКЕ: СОВЕТЫ И ПСИХОЛОГИЧЕСКИЕ ТРЮКИ
          </div>
          <div class="news-main">
            <div class="nw-item" v-for="item in news.news1" :key="item">
              <div class="nw-title">{{ item.title }}</div>
              <div class="nw-text">{{ item.text }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="main-comp" v-show="isNews2">
        <div class="news-img news2">
        </div>
        <div class="news-block">
          <div class="news-title">
            6 ЧЕСТНЫХ ЦИТАТ О МУЖЧИНАХ ИЗ ЛУЧШИХ КНИГ ПО ПСИХОЛОГИИ
          </div>
          <div class="news-main">
            <div class="nw-item" v-for="item in news.news2" :key="item">
              <div class="nw-title">{{ item.title }}</div>
              <div class="nw-text">{{ item.text }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="main-comp" v-show="isNews3">
        <div class="news-img news3">
        </div>
        <div class="news-block">
          <div class="news-title">
            4 ПОЛЕЗНЫХ СОВЕТА ОТ САМОГО УСПЕШНОГО ПРЕДПРИНИМАТЕЛЯ В ИСТОРИИ ЯКОБА ФУГГЕРА
          </div>
          <div class="news-main">
            <div class="nw-item" v-for="item in news.news3" :key="item">
              <div class="nw-title">{{ item.title }}</div>
              <div class="nw-text">{{ item.text }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="btns-carousel">
        <button class="btn-carousel" :class="`${isNews1?'btn-carousel-active':' '}`" @click="showNews1"></button>
        <button class="btn-carousel" :class="`${isNews2?'btn-carousel-active':' '}`" @click="showNews2"></button>
        <button class="btn-carousel" :class="`${isNews3?'btn-carousel-active':' '}`" @click="showNews3"></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mainComp",
  data() {
    return {
      news: {
        news1: [
          {
            title: "Заведи себе интересное хобби",
            text: 'Твоим хобби может быть все, что тебя интересует: программирование, компьютерные игры, музыка, рисование, спорт. Опять же, это должна быть настоящая страсть, а не притворная. Если скажешь, что тебе нравятся бензопилы и резьба по дереву, а на самом деле это не так, то шарма не будет и девушка это почувствует.'
          },
          {
            title: "Эффект сходства",
            text: 'Чтобы понравиться своей пассии, можно провести «исследование» и заранее выяснить, что ей нравится. Хитрость заключается в том, чтобы очень внимательно слушать девушку, с которой ты разговариваешь и выделять то, что у вас есть общего. Она говорит, что любит музыку? Расскажи ей о своей любимой группе! Исследования доказывают «эффект сходства» снова и снова, поэтому не стоит им пренебрегать.'
          },
          {
            title: "Спроси ее, как она себя чувствует",
            text: 'Одна из самых важных вещей, когда речь заходит о женщинах — это коммуникация. Ты можешь гадать сколько угодно, но на самом деле никогда не узнаешь о ее чувствах, пока не спросишь. Большинство девушек абсолютно честны и если спросить их, то они ответят.'
          },
          {
            title: "Выделись из толпы",
            text: 'Эффект фон Ресторффа говорит о том, людям нравится уделять больше внимания вещам, которые выделяются из толпы. Так что используй этот психологический эффект себе на пользу и будь уникальным парнем!\n'
          }],
        news2: [
          {
            title: 'ЛЕЙЛ ЛАУНДЕС',
            text: 'Для мужчин сближение — это не сидение за столиком ресторана, глядя друг другу глубоко в глаза и обсуждая свои чувства, — это совместная деятельность',
          },
          {
            title: 'ДЖОН ГРЭЙ',
            text: 'Мужчины… не могут знать, что женщинам необходимо, — им нужно об этом рассказать',
          },
          {
            title: 'ГРЕГ БЕРЕНДТ И ЛИЗ ТУЧЧИЛО',
            text: 'Люди постоянно говорят о том, какие они на самом деле. Если мужчина говорит вам, что моногамия не для него, то нет причин ему не верить'
          },
          {
            title: 'МИХАИЛ ЛИТВАК',
            text: 'Тот, кто вас любит, способствует вашему развитию, кто не любит — тормозит'
          },
          {
            title: 'СТИВ ХАРВИ',
            text: 'Если мужчина не стремится реализовать свои мечты, если не делает все для того, чтобы выяснить, „кто он“, „чем занимается“ и „сколько зарабатывает“, он обречен…'
          },
          {
            title: 'АЛАН И БАРБАРА ПИЗ',
            text: 'Он хочет опустошить себя, она — наполнить. Понимание этих факторов делает мужчину и женщину более внимательными любовниками'
          }
        ],
        news3: [
          {
            title: 'Удели внимание своему образованию',
            text: 'Хорошее образование Якоб Фуггер получил в деловом центре того периода – Венеции. Приобретенные там связи, знания и опыт помогали ему на протяжении всей жизни.',
          },
          {
            title: 'Стань незаменимым',
            text: 'Стоит действовать масштабно, тогда риск провала снижается. Так как Фуггер финансировал монархов, был риск, что те откажутся платить по счетам. Но Фуггер не переживал об этом. Он знал, что клиенты не захотят портить отношения с ним по простой причине: он может за одно мгновение найти любую сумму. Не всем нравились условия Фуггера, но никто не мог обойтись без его услуг. ',
          },
          {
            title: 'Подружись с бухгалтерией',
            text: 'Изобретение итальянцев – двойную бухгалтерию – предприниматель начал применять одним из первых. Создавая баланс для своих предприятий, он постепенно развивал эту науку. Также среди новшеств, привнесенных Фуггером в мир финансов, была деятельность аудиторов. Не забывал Фуггер и сам следить за расходами. Все его бухгалтерские книги содержат заметки, написанные рукой банкира.',
          },
          {
            title: 'Будь полезен обществу',
            text: 'Фуггер заботился о своей репутации и нуждах общества. В родном Аугсбурге он создал первый в истории проект социального жилья – квартал Фуггерай. Аренда там была в три раза дешевле рыночной стоимости, так как Фуггер считал, что каждый работяга должен иметь возможность снимать жилье. Квартал существует и сегодня, также являясь туристическим центром. ',
          }
        ],
      },
      isNews1: true,
      isNews2: false,
      isNews3: false,
    }
  },
  methods: {
    showNews1() {
      this.isNews1 = true;
      this.isNews2 = false;
      this.isNews3 = false;
    },
    showNews2() {
      this.isNews1 = false;
      this.isNews2 = true;
      this.isNews3 = false;
    },
    showNews3() {
      this.isNews1 = false;
      this.isNews2 = false;
      this.isNews3 = true;
    }
  },
  computed: {
    todayTime() {
      let date = new Date();
      return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
    }
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