<template>
  <div class="info" :class="{open: isOpen}">
    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Amet, cumque dicta dignissimos doloremque dolores earum
      eius eligendi explicabo facilis hic illo ipsam laborum
      neque provident quo, reiciendis veniam voluptas? Magni.</h1>
  </div>
</template>

<script>
export default {
  props:{
    isOpen:Boolean
  },
}
</script>
