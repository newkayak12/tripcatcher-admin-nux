<template>
  <div class="vw-100 vh-100 p-5 d-flex justify-content-around " style="background-color: #7c51a1">
    <div class="d-flex flex-column justify-content-center align-content-center col-md-4">
      <h1 class="text-center text-white font-weight-bolder font-Size-h1">TRIPCATCHER</h1>
      <h4 class="text-center text-white font-Size-h4">ADMIN</h4>
    </div>
    <div class="card-body d-flex flex-column justify-content-center align-content-center col-md-4 rounded">
      <div class="card p-xl-3 p-sm-1">
        <div class="card-body d-flex justify-content-center flex-column align-content-center">
          <div class="p-2">
            <p class="m-0 p-1">ID</p>
            <input type="text" class="col-12 mt-2 rounded border p-1" v-model="form.id" ref="id" @keyup.enter="$refs.password.focus()">
          </div>
          <div class="p-2">
            <p class="m-0 p-1">PASSWORD</p>
            <input type="password" class="col-12 mt-2 rounded border p-1" v-model="form.password" ref="password" @keyup.enter="$refs.signin.click()">
          </div>
          <div class="d-flex justify-content-end p-3 pr-2">
            <button class="p-1 col-sm-12 col-xl-3 rounded btn-outline-success btn btn-success text-white" @click="signIn" ref="signin">로그인</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {required} from 'vuelidate/lib/validators'
export default {
  name: "index.vue",
  layout:'none',
  mounted() {
    this.$refs.id.focus()
  },
  validations:{
    form:{
      userId:{
        required
      },
      userPassword: {
        required
      }
    }
  },
  data(){
    return {
      form:{
        id:'',
        password:'',
        ipAddress:'',
      }
    }
  },
  methods:{
    async getIp(){
      const response = await this.$AdminSignSvc.getIp()
      return response
    },
    async signIn(){
      let parameter = this.$_.cloneDeep(this.form)
      parameter.ipAddress = await this.getIp();
      console.log("param",parameter)
      const response = await this.$AdminSignSvc.signIn(parameter)
      if(response.code===200){

        return
      }

      this.$toast.error(response.data, {timeout:1000})
    }
  }
}
</script>

<style scoped>
.font-Size-h1{
  font-size: 5rem;
}
.font-Size-h4{
  font-size: 2.5rem;
}
</style>