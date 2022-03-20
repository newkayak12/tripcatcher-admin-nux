import ServiceExec from "/service/ServiceExec";
import SignSvc from "/service/SignSvc";


export default ({store, $axios},inject)=>{
    const $ServiceExec = new ServiceExec($axios, store)
    inject('ServiceExec', $ServiceExec )
    inject('SignSvc', new SignSvc($ServiceExec))
}