import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
const store=new Vuex.Store({
    state:{
        musicid:[],
    },
    mutations:{
        setmusicid(state,payload){
            this.state.musicid.unshift(payload)
        }
    },
    actions:{
        SetMusicID(context,payload){
            context.commit('setmusicid',payload);
        }
    }

})

export  default store;