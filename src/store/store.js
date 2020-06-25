import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
const store=new Vuex.Store({
    state:{
        musicid:'',
    },
    mutations:{
        setmusicid(state,payload){
            this.state.musicid=payload
        }
    },
    actions:{
        SetMusicID(context,payload){
            context.commit('setmusicid',payload);
        }
    }

})

export  default store;