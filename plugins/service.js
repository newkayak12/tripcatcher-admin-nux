import ServiceExec from "/service/ServiceExec";
import AdminSignSvc from "/service/AdminSignSvc"
import ResponsePlugin from '/service/ResponsePlugin'

export default ({store, $axios},inject)=>{
    const $ServiceExec = new ServiceExec($axios, store)
    const $ResponsePlugin = new ResponsePlugin()
    inject('ServiceExec', $ServiceExec )
    inject('AdminSignSvc', new AdminSignSvc($ServiceExec, $ResponsePlugin))
}