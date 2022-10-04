import Tunnel from "../../type/Tunnel"
import SshTunnel from "../../type/tunnel/SshTunnel"

class MysqlPayload {
    type:String="mysql"
    host:string="127.0.0.1"
    port:number=3306
    username?:string="root"
    password?:string=""
}

export default MysqlPayload;