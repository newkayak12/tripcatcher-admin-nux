<template>
  <div id="app">
    <Header/>
    <div class="d-flex position-relative" style="min-height: 90vh; width: 100vw">
      <SideBar />
      <div class="content-container">
        <Nuxt />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
import SideBar from "@/layouts/SideBar";

export default {
  name: "default",
  components:{Header, SideBar ,Footer}
}
</script>

<style scoped>
.content-container{
  width: 100%;
  margin-left: 5rem;
  padding: 50px;
}
#app{
  overflow-x: hidden;
}
</style>