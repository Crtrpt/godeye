import Tunnel from "../../type/Tunnel"
import SshTunnel from "../../type/tunnel/SshTunnel"

class MqttPayload {
    type:String="mqtt"
    host:string="127.0.0.1"
    port:number=1883
    username?:string=""
    password?:string=""
}

export default MqttPayload;