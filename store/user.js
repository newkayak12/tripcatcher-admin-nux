
export const state = () => ({
 userData:{
     info:{},
     token:'',
     language:'',
     ipAddress:''
 }
})
export const getters = {
    getUserData(state){
        const result = {
            info: state.userData.info||local.getItem("info"),
            token : state.userData.token||localStorage.getItem("token"),
            language: state.userData.language||localStorage.getItem("language"),
            ipAddress: state.userData.ipAddress||localStorage.getItem("ipAddress")
        }
        return result
    },
    getToken(state){
        return state.userData.token
    }
}
export const mutations ={
    setUserData(state, payload={_info:{},_token:'', _language:"KR", _ipAddress:''}){
        state.userData.info=payload._info
        state.userData.token = payload._token
        state.userData.language = payload._language
        state.userData.ipAddress = payload._ipAddress
        localStorage.setItem("info", payload._info)
        localStorage.setItem("token", payload._token)
        localStorage.setItem("language", payload._language)
        localStorage.setItem("ipAddress", payload._ipAddress)
    }
}