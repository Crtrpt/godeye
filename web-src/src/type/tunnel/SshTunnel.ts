
import Tunnel from "../Tunnel"

class SshTunnel implements Tunnel {
    type?:Number=0
    host?:String=""
    port?:Number=22
    username?:String
    password?:String
    privatekey?:String
}

export default SshTunnel;