<template>
  <div class="row sidebars">
    <ul class="col s2 m2 l2 center z-depth-1 white" :class="{open: isOpen}">
      <li><router-link to="/">MAIN PAGE</router-link></li>
      <li><router-link to="/profile">PROFILE</router-link></li>
      <li @click="logout"><router-link to="/login?message=logout">LOGOUT</router-link></li>
    </ul>
  </div>
</template>
<script>
import {useStore} from "vuex";
import router from "@/router";

export default {
  props:{
    isOpen:Boolean
  },

  setup() {

    const store = useStore()

    const logout = async () => {
      try {
        await store.dispatch('logout')
        await router.push('/login?message=logout')
      } catch (e) {
        throw (e)
      }

    }

    return {
        logout
    }
  }
}
</script>