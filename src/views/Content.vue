<template>
  <Preloader class="center" v-if="loader"/>
  <div v-else-if="!loader">
  <div class="content-page center row "  :class="{open: isOpen}">
    <form class="col s8 m8 l10 center-block">
      <div class="input-field">
        <input id="search" type="search" v-model="store.searchQ" required>
      </div>
    </form>
  </div>
  <div class="content-page center row" :class="{open: isOpen}" >
    <div class="content_block z-depth-1" v-for="post in useSearch.reposMatch.value" :key="post._id">
      <ul><img src="" alt=""><a href="#"></a>
        <li>{{post.title}}</li>
        <li>{{post.description}}</li>
        <button class="waves-effect btn blue darken-1" type="button" @click="updateSubs(post._id,!post.subscribe)"> {{ post.subscribe ? "UNLIKE IT" : "LIKE IT" }}</button>
      </ul>
    </div>
  </div>
  </div>

</template>

<script>
import {computed, onMounted, reactive, ref} from "vue";
import {useStore} from "vuex";

export default {
  name: 'ContentPage',
  props:{
    isOpen:Boolean
  },


  setup() {
    const loader = ref(true)

    const {dispatch,getters} = useStore()

    let store = reactive({
      postContent:[],
      searchQ:''
    })


    const getContent = async () => {
      await dispatch('getContentData')
      store.postContent = await getters.postContent
      loader.value = false
    }

    const updateSubs = async(id, subscribe) => {
      await dispatch('updateContentData',{id,subscribe})
      await getContent()
    }

    onMounted(async()=>{
      await getContent()
    })

    return {
      loader, getContent, updateSubs,store
    }
  },
  computed:{
    useSearch() {
      const searchQuery = ref('')
      searchQuery.value = this.store.searchQ
      const reposMatch = computed(() => {
        return this.store.postContent.filter(data => {
          return data.title.includes(searchQuery.value)
        })
      })
      return {searchQuery,reposMatch}
    }
  }

}
</script>

<style>
</style>
