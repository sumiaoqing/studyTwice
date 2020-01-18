import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const testModule ={
  namespaced: true,
  state: {
    testData: '测试vuex',
    testHa:'hah',
    number:9
  },
  getters:
  {
    changeTest:(state:any)=>
    {
      return state.testData+state.testHa
    }
  },
  mutations: {
    SAY_NUMBER(state:any,val:number)
    {
      state.number+=val
       console.log(state.number)
    }
  },
  actions: {
  }
}

const store = new Vuex.Store({
  modules:
  {
    testModule
  }
})

export default store
