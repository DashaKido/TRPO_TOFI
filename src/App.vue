<template>
  <header-comp></header-comp>
</template>

<script>
import headerComp from "@/components/headerComp";
export default {
  name: 'App',
  components: {
    headerComp,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: 'Inter', sans-serif;
  color: #5B5657;
  font-size:12px;
}
</style>
