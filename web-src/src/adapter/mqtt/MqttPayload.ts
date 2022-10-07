import Tunnel from "../../type/Tunnel"
import SshTunnel from "../../type/tunnel/SshTunnel"


class MqttTopic {
    remark:String=""
    topic:String=""
    qos:number=0
    color:String=""
    bg_color:String=""
    auto_subject:boolean=true
}
class MqttPayload {
    protocol:String="mqtt"
    type:String="mqtt"
    host:string="127.0.0.1"
    port:number=1883
    client_id:string=""
    username?:string=""
    password?:string=""
    
    ssl:boolean=false
    //签名类型 0公共ca签名服务器 1自签名服务器
    sign_type:number=0
    ca_file:String=""
    client_ca_file:String=""
    client_key_file:String=""
    ssl_secure=true
    
    connect_timeout:number=10
    keep_alive:number=60
    clean_session:boolean=true
    auto_reconnect:boolean=true
    version?:string="3.1.1"
    last_will_topic:String=""
    last_will_qos:number=0
    last_will_retain:boolean=true
    last_will_payload:String=""
    last_will_payload_type:number=0
    topics:MqttTopic[]=[]
}

export  {MqttPayload,MqttTopic};