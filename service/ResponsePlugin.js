class ResponsePlugin {

    tokenSave(token="", userData={}){
        this.$store.commit('user/setUserData', {_info:userData, _token:token})
    }

    responseContainer(code=200, data={}||''){
        return {code:code, data:data}
    }
}
export default  ResponsePlugin