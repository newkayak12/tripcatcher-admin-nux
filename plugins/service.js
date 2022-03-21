import ServiceExec from "/service/ServiceExec";
import AdminSignSvc from "/service/AdminSignSvc"

export default ({store, $axios},inject)=>{
    const $ServiceExec = new ServiceExec($axios, store)
    inject('ServiceExec', $ServiceExec )
    inject('AdminSignSvc', new AdminSignSvc($ServiceExec))
}