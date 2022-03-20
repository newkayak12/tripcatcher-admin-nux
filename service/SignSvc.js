const prefix = '/admin/sign'
class SignSvc{
    constructor(ServiceExec) {
        this.axios = ServiceExec
    }

    getIp(){
        return this.axios.get(`${prefix}/getIp`)
            .then(response=>{
                return response.data
            })
    }
}
export default SignSvc