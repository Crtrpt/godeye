import Tunnel from "../../type/Tunnel"
import SshTunnel from "../../type/tunnel/SshTunnel"

class RedisPayload {
    type:String="redis"
    host:string="127.0.0.1"
    port:number=6379
    username?:string="root"
    password?:string=""
}

export default RedisPayload;