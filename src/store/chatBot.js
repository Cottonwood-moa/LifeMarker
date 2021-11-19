export default{
  namespaced:true, // 모듈의 독립적 재사용 여부

  state:()=>({  //data와 같음
    toggle:false
  }),

  getters:{  //종속성에 따라 캐쉬되는 계산된 속성
    },
  
  mutations:{  // 저장소에 저장된 data를 바꿈
    updateState(state) {
        state.toggle = !state.toggle
    }
  },

  actions:{  // mutations에 대한 커밋을 한다. 비동기 작업이 포함됨.
    chatBotToggle({commit}){
      commit('updateState')
    },
  },

}