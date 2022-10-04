import Tunnel from "../../type/Tunnel"
import SshTunnel from "../../type/tunnel/SshTunnel"

class OraclePayload {
    type:String="oracle"
    host:string="127.0.0.1"
    port:number=80
    username?:string=""
    password?:string=""
}

export default OraclePayload;