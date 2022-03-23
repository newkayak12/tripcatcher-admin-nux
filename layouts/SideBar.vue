<template>
  <div class="sidebar-container">
    <ul class="border sidebar-ul" @mouseenter="mouseenter($event)" @mouseleave="mouseleave($event)">
      <li>
        <nuxt-link to="#" class="sidebar-element">
          <font-awesome-icon :icon="faPerson" style="color:darkgreen"/>
          <span class="label">사용자 관리</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="#" class="sidebar-element">
          <font-awesome-icon :icon="faPerson" style="color:darkgreen"/>
          <span class="label">사용자 관리</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="#" class="sidebar-element">
          <font-awesome-icon :icon="faPerson" style="color:darkgreen"/>
          <span class="label">사용자 관리</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="#" class="sidebar-element">
          <font-awesome-icon :icon="faPerson" style="color:darkgreen"/>
          <span class="label">사용자 관리</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="#" class="sidebar-element">
          <font-awesome-icon :icon="faPerson" style="color:darkgreen"/>
          <span class="label">사용자 관리</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="#" class="sidebar-element">
          <font-awesome-icon :icon="faPerson" style="color:darkgreen"/>
          <span class="label">사용자 관리</span>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import {faPerson} from '@fortawesome/free-solid-svg-icons'
export default {
  name: "SideBar-layouts",
  computed:{
    faPerson(){
      return faPerson;
    }
  },
  methods:{
    mouseenter(event){
      event.target.classList.add('open');
    },
    mouseleave(event){
      event.target.classList.remove('open');
    }
  }

}
</script>

<style>
  .sidebar-container{
    height: 100%;
    position: absolute;
    top:0;
    left: 0;
    z-index: 2;
  }
  .sidebar-ul {
    background-color: #ddd;
    overflow: hidden;
    padding: 3rem 1.4rem;
    list-style: none;
    width: 5rem;
    height: 100%;
  }
  .sidebar-ul.open {
    width: 10rem;
  }
  .sidebar-ul.open .label {
    display: block;
  }
  li{
    margin-bottom:3rem;
  }
  .sidebar-element {
    margin: 0;
    padding-left:0.7rem;
    display: flex;
    justify-content: flex-start;
    text-decoration: none !important;
  }
  .sidebar-element span{
    margin-left: 0.4rem;
  }
  li svg{
    font-size: 1.3rem;
    margin: 0;
    padding: 0;
    font-weight: 600;
  }
  .label{
    display: none;
    color: black;
    font-size: 1.4rem;
    font-weight: 500;
  }


</style>