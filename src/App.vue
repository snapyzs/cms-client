<template >
    <component :is="layout">
      <router-view/>
    </component>
</template>

<script>
import EmptyLayout from '@/layouts/EmptyLayout'
import MainLayout from '@/layouts/MainLayout'
import axios from "axios";
import {useStore} from "vuex";
import {onMounted} from "vue";


export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || 'empty') + '-layout'
    }
  },
  components: {
    EmptyLayout,MainLayout
  },

  setup() {

    const store = useStore()

    onMounted(()=> {
          axios.interceptors.response.use(undefined, function (err) {
            return new Promise(() => {
              if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
                  store.dispatch('logout')
              }
              throw err;
            })
          })
        }
    )

  }

}
</script>

<style lang="scss">
@import 'assets/index';
@import '~materialize-css/dist/css/materialize.min.css';


</style>
