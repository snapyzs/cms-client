<template>
  <div class="login-form">
    <div class="col s12 m12 l12 login-box z-depth-1">
      <Form class="col s12" @submit="submitHandler" :validation-schema="schema" v-slot="{errors}">
        <div class="row">
          <div class="input-field col s12">
            <Field id="login" type="text" name="email"
                   :class="{invalid:errors.email}"
                   v-model.trim="dataUsersAuth.email" />
            <label for="login">Email</label>
            <span>{{errors.email}}</span>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <Field id="password" type="password" name="password"
                   :class="{invalid:errors.password}"
                   v-model.trim="dataUsersAuth.password" />
            <label for="password">Password</label>
            <span>{{errors.password}}</span>
          </div>
        </div>
        <div class="agree-button">
          <button type="submit" class="btn waves-effect blue darken-1">Login</button>
          <p> You not have account? -></p>
          <button type="button" class="btn waves-effect blue darken-1"><router-link to="/register">Register</router-link></button>
        </div>
      </Form>
    </div>
  </div>
</template>

<script>
import * as Yup from "yup";
import {Field, Form} from "vee-validate";
import {onMounted,ref} from "vue";
import Toast from '@/utils/message-toast/message-toast'
import messages from "@/utils/message-toast/messages";
import {useRoute} from "vue-router";
import router from "@/router";
import {useStore} from "vuex";


export default {
  setup() {

    const {dispatch} = useStore()

    let dataUsersAuth = ref({
      email:'',
      password:'',
    })

    const schema = Yup.object().shape({
      email: Yup.string().required('Email is required').email('Email is invalid'),
      password: Yup.string().required('Password is required').min(6,'Password must be at least 6 characters')
    })

    const submitHandler = async(values) => {
      try {
        await dispatch('loginInfo',values)
        await router.push('/');
      } catch (e) {
        Toast.messageError("Authenticated error")
      }
      // console.log('Good' + JSON.stringify(values,null,4))
    }

    onMounted(()=>{
      if (messages[useRoute().query.message]) {
          Toast.messageText('Logout system')
      }
    })

    return {
      dataUsersAuth, submitHandler, schema
    }
  },

  components: {
    Field,Form
  }
}

</script>

<style scoped>

</style>