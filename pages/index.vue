<template>
  <div class="vw-100 vh-100 p-5 d-flex justify-content-around " style="background-color: #9665dc">
    <div class="d-flex flex-column justify-content-center align-content-center col-5">
      <h1 class="text-center text-white font-weight-bolder">TRIPCATCHER</h1>
      <h4 class="text-center text-white">ADMIN</h4>
    </div>
    <div class="card-body d-flex flex-column justify-content-center align-content-center col-5 rounded">
      <div class="card">
        <div class="card-body d-flex justify-content-center flex-column align-content-center">
          <div class="p-2">
            <p class="m-0 p-1">ID</p>
            <input type="text" class="col-12 mt-2 rounded border p-1" v-model="form.userId">
          </div>
          <div class="p-2">
            <p class="m-0 p-1">PASSWORD</p>
            <input type="password" class="col-12 mt-2 rounded border p-1" v-model="form.userPassword">
          </div>
          <div class="d-flex justify-content-end p-3 pr-2">
            <button class="p-1 col-3 rounded btn-outline-success btn btn-success text-white" @click="signIn">로그인</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index.vue",
  data(){
    return {
      form:{
        userId:'',
        userPassword:'',
        ipAddress:'',
      }
    }
  },
  methods:{
    async getIp(){
      const response = await this.$SignSvc.getIp()
      return response
    },
    async signIn(){
      const parameter = this.$lodas.cloneDeep(this.form)
      parameter.ipAddress = await this.getIp();

      // const response = await this.$SignSvc.signIn()
      this.$toast.error("hi", {timeout:1000})
    }
  }
}
</script>

<style scoped>
</style>