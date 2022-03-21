import Vue from "vue";
import Lodash from 'lodash'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)



export default ({app}, inject)=>{
    inject("_",Lodash)
}