<template>
  <div class="main-layout" v-cloak>
    <NavBar :toggle="toggle"/>
    <SideBar :isOpen="isOpen"/>
    <router-view :isOpen="isOpen"/>
  </div>
</template>


<script>
import NavBar from '@/components/NavBar'
import SideBar from '@/components/SideBar'
import {onMounted, ref} from "vue";
import Preloader from "@/utils/preloader/Preloader";

export default {
  name: 'main-layout',
  setup() {

    const isOpen = ref(false)
    const toggle = () => {
      isOpen.value = !isOpen.value
    }

    return {
      isOpen,toggle
    }
  },
  components: {
    Preloader,
    NavBar,SideBar
  }
}

</script>

<style>
[v-cloak]{
  display: none;
}
</style>