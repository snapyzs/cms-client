<template>
  <div class="imageProfile" :class="{open: isOpen}">
    <div class="imageUser m3 s3 l3 z-depth-1">
      <img src="https://html5css.ru/howto/img_avatar.png" alt="">
    </div>
    <div class="descript m3 s3 l3 z-depth-1">
      <li>Name: {{ state.infoS.firstName }}{{state.infoS.lastName}}</li>
      <li>Email: {{ state.infoS.email}}</li>
      <hr>
      <li>Lorem ipsum dolor sit
        amet, consectetur adipisicing elit. Quis, reprehenderit.</li>
      <li>Descript Lorem ipsum dolor sit
        amet, consectetur adipisicing elit. Accusamus, eveniet!</li>
    </div>
  </div>
</template>

<script>
import {useStore} from "vuex";
import {onMounted, reactive} from "vue";

export default {
  props: {
    isOpen: Boolean
  },
  setup() {
    const {getters} = useStore()

    const state = reactive({
      infoS: {},
    })

    onMounted(async () => {
      state.infoS = await getters.info
    })

    return {
      state
    }
  }
}
</script>