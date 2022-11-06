<template>
  <div class="title-block">
    {{ title }}
  </div>
</template>

<script>
export default {
  name: "titleComp",
  props: ['title']
}
</script>

<style scoped>
.title-block{
  font-weight: bold;
  font-size: 28px;
}
</style>