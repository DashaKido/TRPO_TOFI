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
        <button class="btn-style btn-pro">
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
        <button class="btn-style btn-grey btn-pro">
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
    </div>
  </div>
</template>

<script>
export default {
  name: "proVersionComp"
}
</script>

<style scoped>
.features-title{
  font-weight: bold;
}
.features-block{
  margin-top: 20px;
}
.btn-pro{
  width:200px;
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
</style>