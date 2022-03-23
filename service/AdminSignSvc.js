import ResponsePlugin from "@/service/ResponsePlugin";

const prefix = '/admin/sign'
class  AdminSignSvc {
    constructor(ServiceExec, responsePlugin) {
        this.axios = ServiceExec
        this.$r = responsePlugin
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
                if(response.status===200){
                    return this.$r.responseContainer(response.status,response.data)
                }
            })
            .catch(error => {
                console.log(error)
                return this.$r.responseContainer(error.response.data.status,error.response.data.message )
            })

    }
}
export default AdminSignSvc