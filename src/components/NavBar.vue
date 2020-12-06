<template>
  <div class="navbar-fixed">
    <nav class="nav-wrapper row blue darken-1">
      <div class="col s1 m1 l2">
        <a href="#" class="brand-logo" @click.prevent="toggle"><i class="large material-icons">directions_run</i>LIMBO</a>
      </div>
      <ul class="right">
        <li><router-link to="/info">Info</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <li v-if="state.infoS.firstName" class="nameUser">{{state.infoS.firstName}}</li>
      </ul>
    </nav>
  </div>
</template>

<script>
import {useStore} from "vuex";
import {onMounted, onUpdated, reactive} from "vue";

export default {
  props:{
    toggle:Function
  },

  setup() {
    const {getters} = useStore()

    const state = reactive({
      infoS:{},
    })

    onMounted(async()=>{
      state.infoS = await getters.info
    })



    return {
      state
    }
  },

}
</script>
