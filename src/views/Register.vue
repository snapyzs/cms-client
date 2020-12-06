<template>
  <div class="login-form">
    <div class="col s12 m12 l12 login-box z-depth-1">
      <Form class="col s12" @submit="submitHandler" :validation-schema="schema" v-slot="{errors}">
        <div class="row">
          <div class="input-field col s6">
            <Field id="first_name" name="firstName" type="text"
                   :class="{'invalid': errors.firstName}"
                   v-model.trim="dataUsers.firstName"/>
            <label for="first_name">First Name</label>
            <span>{{errors.firstName}}</span>
          </div>
          <div class="input-field col s6">
            <Field id="last_name" name="lastName" type="text"
                   :class="{'invalid': errors.lastName}"
                   v-model.trim="dataUsers.lastName" />
            <label for="last_name">Last Name</label>
            <span>{{errors.lastName}}</span>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <Field id="password" name="password" type="password"
                   :class="{invalid:errors.password}"
                   v-model.trim="dataUsers.password"/>
            <label for="password">Password</label>
            <span>{{errors.password}}</span>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <Field id="email" name="email" type="email"
                   :class="{'invalid': errors.email}"
                   v-model.trim="dataUsers.email"/>
            <label for="email">Email</label>
            <span>{{errors.email}}</span>
          </div>
        </div>
        <div class="column">
          <label>
            <Field type="checkbox" name="accept" class="filled-in checkbox-agree"
            :value="true"/>
            <span>Agree Ts & Cs</span>
            <br><span>{{errors.accept}}</span>
          </label>
        </div>
        <div class="agree-button">
          <button type="submit" class="btn waves-effect blue darken-1">Register</button>
          <p>You have account? -> </p>
          <button type="button"  class="btn waves-effect blue darken-1"><router-link to="/login">Login</router-link></button>
        </div>
      </Form>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";
import {Form,Field} from 'vee-validate'
import * as Yup from 'yup'
import router from "@/router";
import {useStore} from "vuex";

export default {
  setup(){

    const {dispatch} = useStore()

    let dataUsers = ref({
      firstName: '',
      lastName: '',
      password: '',
      email: ''
    })

    const schema = Yup.object().shape({
      firstName: Yup.string().required('First name is required').max(50, "No more 50 symbol"),
      lastName: Yup.string().max(50, "No more 50 symbol"),
      email: Yup.string().required('Email is required').email('Email is invalid'),
      password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
      accept: Yup.boolean().oneOf([true]).required('Accept Ts & Cs is required'),
    })

    const submitHandler = async (values) => {
      try {
        await dispatch('registerInfo',values)
        await router.push('/login')
      } catch (e) {
        throw (e)
      }
    }
    return {
      submitHandler, dataUsers, schema
    }
  },
  components: {
    Field,Form
  }
}
</script>

<style scoped lang="scss">

</style>