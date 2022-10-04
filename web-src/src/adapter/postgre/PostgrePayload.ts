import Tunnel from "../../type/Tunnel"
import SshTunnel from "../../type/tunnel/SshTunnel"

class PostgrePayload {
    type:String="postre"
    host:string="127.0.0.1"
    port:number=80
    username?:string=""
    password?:string=""
}

export default PostgrePayload;