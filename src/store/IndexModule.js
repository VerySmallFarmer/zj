export default {
    state :{
        name:'index'
    },
    mutations:{
        setName(state,payload){
            state.name = payload.name
        }
    }
}