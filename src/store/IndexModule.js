export default {
    state :{
        token: '',
        pageTitle: 'title'
    },
    getters: {
        token(state) {
            state.token = state.token || localStorage.getItem('token') || ''
            return state.token
        }
    },
    mutations:{
        login(state, parameter) {
            state.token = parameter.token
            localStorage.setItem('token', parameter.token)
        },
        logout(state) {
            state.token = ''
            localStorage.remove('token')
        },
        pageTitle(state, parameter){
            state.pageTitle = parameter.title
        }
    }
}