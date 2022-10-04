import Tunnel from "../../type/Tunnel"
import SshTunnel from "../../type/tunnel/SshTunnel"

class TcpClientPayload {
    type:String="tcp_client"
    host:string="127.0.0.1"
    port:number=9000
}

export default TcpClientPayload;