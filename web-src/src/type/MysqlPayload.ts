import Tunnel from "./Tunnel"
import SshTunnel from "./tunnel/SshTunnel"

class MysqlPayload {
    host:string="127.0.0.1"
    port:number=3306
    username?:string="root"
    password?:string=""
}

export default MysqlPayload;