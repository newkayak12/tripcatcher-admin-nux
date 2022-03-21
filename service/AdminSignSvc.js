const prefix = '/admin/sign'
class AdminSignSvc {
    constructor(ServiceExec) {
        this.axios = ServiceExec
    }

    getIp(){
        return this.axios.get(`${prefix}/getIp`)
            .then(response=>{
                return response.data
            })
    }
    signIn(params={}){
        return this.axios.get(`${prefix}/signIn`, params)
            .then(response=>{
                return response.data
            })
    }
}
export default AdminSignSvc