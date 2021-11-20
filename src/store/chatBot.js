export default{
  namespaced:true, // 모듈의 독립적 재사용 여부

  state:()=>({  //data와 같음
    toggle:false,
    dialog:[],
    load:true,
    questionList1_1:false,
    goBack1:[],
    refresh:false
  }),

  getters:{  //종속성에 따라 캐쉬되는 계산된 속성
    },
  
  mutations:{  // 저장소에 저장된 data를 바꿈
    updateState(state) {
        state.toggle = !state.toggle
    },
    questionList1_1(state){
      state.questionList1_1 = !state.questionList1_1
    },
    dialogEl(state,payload){
      state.dialog = payload.dialogEl
    },
    load(state,payload){
      state.load = payload.load
    },
    refresh(state){
      state.refresh = !state.refresh
    },
  },

  actions:{  // mutations에 대한 커밋을 한다. 비동기 작업이 포함됨.
    chatBotToggle({commit}){
      commit('updateState')
    },
    questionList1_1({commit}){
      commit('questionList1_1')
    },
    dialogEl({commit},payload){
      commit('dialogEl',{
        dialogEl:payload
      })
    },
    load({commit},payload){
      commit('load',{
        load:payload
      })
    },
    refresh({commit}){
      commit('refresh')
    },
  },

}