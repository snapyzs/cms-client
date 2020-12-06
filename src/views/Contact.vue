<template>
  <div class="contact" :class="{open: isOpen}">
    <h4>Author test app: - Alexandr Eliseev</h4>
    <h4>Email: - elis_san@mail.ru</h4>
    <h4>Use on app - vue3js, express, mongodb Atlas, AWS</h4>
    <hr>
  </div>
</template>

<script>
export default {
name: "Contact",
  props:{
    isOpen:Boolean
  },
}
</script>

<style scoped>
</style>