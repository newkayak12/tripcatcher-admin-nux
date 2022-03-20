class ServiceExec{
    constructor(axios, store) {
        axios.interceptors.request.use(
            function (config){
                config.headers.common.Authorization = store.getters['user/getToken']
                return config
            }
        )
        this.ServiceExec = axios
        this.$store = store
    }
    get(path, payload){
        return this.ServiceExec.request({
            method:"GET",
            url:path,
            params:payload
        })
    }
    put(path,payload){
        return this.ServiceExec.request({
            method:"PUT",
            url:path,
            responseType:"json",
            data:payload
        })
    }
    post(path,payload){
        return this.ServiceExec.request({
            method:"post",
            url:path,
            responseType:"json",
            data:payload
        })
    }
    multipartPost(path,payload){
        return this.ServiceExec.request({
            headers:{'Content-type':"multipart/form-data"},
            method:"post",
            url:path,
            responseType:'json',
            data:payload
        })
    }
    delete(path,payload){
        return this.ServiceExec.request({
            method:'delete',
            url:path,
            responseType:'json',
            params:payload
        })
    }
}
export default ServiceExec