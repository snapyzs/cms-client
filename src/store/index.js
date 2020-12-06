import { createStore } from 'vuex'
import apiservice from "@/store/apiservice";
import axios from "axios";

export default createStore({
  state: {
    token: localStorage.getItem('token') || '',
    info: JSON.parse(localStorage.getItem('user') || '[]'),
    postContent:[],
  },
  mutations: {
    setInfo(state,data) {
      state.info = {...data}
      state.token = data.token
    },
    setContent(state,value) {
      state.postContent = value
    },
    updateContent(state,value) {
      state.postContent = {...state.postContent,...value}
    },
    clearInfo(state) {
      state.info = {}
      state.token = ''
    }

  },
  actions: {
    async loginInfo({dispatch,commit},params){
      try {
        const data = await dispatch('loginUser',params)
        axios.defaults.headers.common['Authorization'] = data.data.token
        localStorage.setItem('token',data.data.token)
        localStorage.setItem('user',JSON.stringify(data.data))
        commit('setInfo',data.data)
      } catch (e) {
        localStorage.removeItem('token')
        throw (e.message = "ValidationError")
      }

    },

    async registerInfo({dispatch,commit},params){
      try {
        await dispatch('registerUser',params)
      } catch (e) {
        throw (e)
      }
    },

    async getContentData({dispatch,commit}) {
      try {
        const data = await dispatch('getContent')
        commit('setContent',data.data)
      } catch (e) {
        throw (e)
      }
    },

    async updateContentData({dispatch,commit},params) {
      try {
        const data = await dispatch('updateContent',params)
        commit('updateContent',data)
      } catch (e) {
        throw (e)
      }
    },

    logout({dispatch,commit}) {
      try {
        dispatch('logOutUser')
        localStorage.clear()
        delete axios.defaults.headers.common['Authorization']
        commit('clearInfo')
      } catch (e) {
        throw e
      }

    }
  },
  modules: {
    apiservice
  },
  getters: {
    isAuth: state => !!state.token,
    info:state => state.info,
    postContent:state => state.postContent,
  }
})
