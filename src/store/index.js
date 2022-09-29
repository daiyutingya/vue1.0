import Vue from 'vue'
import Vuex from 'vuex'
if(process.env.NODE_ENV === "development"){
    Vue.use(Vuex) 
} 

import menu from "./module/menu"
import permission from "./module/permission"
import user from "./module/user"

export default new Vuex.Store({
    modules:{
        menu,
        permission,
        user
    }
})