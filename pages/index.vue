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
            <input type="text" class="col-12 mt-2 rounded border p-1">
          </div>
          <div class="p-2">
            <p class="m-0 p-1">PASSWORD</p>
            <input type="password" class="col-12 mt-2 rounded border p-1">
          </div>
          <div class="d-flex justify-content-end p-3 pr-2">
            <button class="p-1 col-3 rounded btn-outline-success btn btn-success text-white"> 로그인</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index.vue"
}
</script>

<style scoped>
</style>