import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

//定义属性状态
var state = {
    shownav:true,
    cartDatas:[]
}

//store中的计算属性
var getters = {
    shownav(state){
        return state.shownav
    },
    cartDatas(state){
        return state.cartDatas
    },
    total(state) {
        return state.cartDatas.reduce((total,cur) => {
            return total + cur.num*cur.product_uprice
        },0)
    }
}
//管理mutations
var actions = {
    hideNav({commit}){
        commit('HIDENAV')
    },
    showNav({commit}){
        commit('SHOWNAV')
    },
    addCart({commit},data){
        commit('addCart',data)
    },
    addNum({commit},data) {
        commit('addNum',data)
    },
    decNum({commit,state},data) {
        let curItem = state.cartDatas.filter(item => {
            return item.product_id == data;
        })[0];
        if(curItem.num > 1) {
            commit('decNum',data)
        }
    },
    del({commit},data) {
        commit('del',data)
    }
}
//改变状态mutations
var mutations = {
    HIDENAV(state) {
        state.shownav = false
    },
    SHOWNAV(state) {
        state.shownav = true
    },
    addCart(state,data) {
        if(state.cartDatas){
           let item = state.cartDatas.filter(v => {
               return v.product_id == data.product_id;
           })[0];
           if(item){
               item.num ++;
           } else {
            state.cartDatas.push(data);              
           }
        } else {
            state.cartDatas.push(data);
        }

    },
    addNum(state,id) {
        state.cartDatas.forEach(ele => {
           if(ele.product_id == id){
               ele.num++;
           }
        });
    },
    decNum(state,id) {
        state.cartDatas.forEach(ele => {
            if(ele.product_id == id){
                ele.num--;
            }
         }); 
    },
    del(state,id) {
        for(let i = 0;i<state.cartDatas.length;i++) {
            if(state.cartDatas[i].product_id == id) {
                state.cartDatas.splice(i,1)
            }
        }
    }
}
const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})
//导出
export default store;