import Vue from "vue";
import vuelidate from "vulidate";
import lodash from 'lodash.clonedeep'

Vue.use(vuelidate)



export default ({app}, inject)=>{
    inject("lodash", lodash)
}