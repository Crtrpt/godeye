import Tunnel from "../../type/Tunnel"
import SshTunnel from "../../type/tunnel/SshTunnel"

class HttpPayload {
    type:String="http"
    host:string="127.0.0.1"
    port:number=80
    username?:string=""
    password?:string=""
}

export default HttpPayload;