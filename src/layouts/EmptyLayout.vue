<template>
  <div class="indigo lighten-2 empty-layout" v-cloak>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "empty-layout"
}
</script>

<style>
[v-cloak]{
  display: none;
}
</style>