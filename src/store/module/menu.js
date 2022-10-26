/*
 * @Descripttion: 
 * @version: 
 * @Author: DYT
 * @Date: 2022-09-28 14:36:44
 * @LastEditors: 
 * @LastEditTime: 2022-10-26 16:11:05
 */

const types={
    HANDLE_LEFT_MENU:'HANDLE_LEFT_MENU',  // 收缩左侧菜单
    INIT_LEFT_MENU:'INIT_LEFT_MENU',     // 初始化左侧菜单
    SET_LEFT_COLLAPSE:"SET_LEFT_COLLAPSE", // 改变左边菜单的收缩宽度
}
const menu={
    state:{
        minLeftMenuWidth:70,
        maxLeftMenuWidth:200,
        isCollapse:false,
        sidebar:{
            with:200,
            open:true
        }
    },
    getters:{
        sidebar:state=>state.sidebar,
        isCollapse:state=>state.isCollapse,

    },
    mutations:{
        [types.HANDLE_LEFT_MENU](state){
            if(state.sidebar.open){
                state.sidebar.with=state.maxLeftMenuWidth
                console.log(state.sidebar.with,'1')
            }else{
                state.sidebar.with=state.minLeftMenuWidth
                console.log(state.sidebar.with,'2')

            }
            state.sidebar.open = !state.sidebar.open
        },
        [types.INIT_LEFT_MENU](state){
            state.sidebar=state.sidebar
         },
         [types.SET_LEFT_COLLAPSE](state){
            state.isCollapse=!state.isCollapse
            console.log(state.isCollapse,'state.isCollapse')
         },


    },
    actions:{
        handleLeftMenu:({ commit }) => {  
           commit(types.HANDLE_LEFT_MENU)  
        },
        initLeftMenu:({ commit }) => {  
           commit(types.INIT_LEFT_MENU)  
        },
        setLeftCollapse:({ commit}) => {  
           commit(types.SET_LEFT_COLLAPSE)  
        }
    }
}
export default menu