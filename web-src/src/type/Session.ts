import ConnectStatus from "./ConnectStatus";
import DriverType from "./driver";
import Tunnel from "./Tunnel";
import SshTunnel from "./tunnel/SshTunnel";

class Session<T> {
  constructor(
    id:string="",
    name: string="新建连接",
    type: DriverType.MYSQL=DriverType.MYSQL,
    connect_status: ConnectStatus.Normal=ConnectStatus.Normal,
    expand:boolean=false,
    icon:string="",
    payload:T|undefined=undefined,
    tunnel:Tunnel=SshTunnel
  ) {
    this.id=id;
    this.name = name;
    this.type = type;
    this.expand=expand;
    this.connect_status = connect_status;
    this.icon=icon;
    this.payload=payload;
    this.tunnel=tunnel;
  }
  id:string
  name: string;
  type: DriverType;
  connect_status: ConnectStatus;
  expand:boolean;
  icon:String;
  payload?:T|undefined;
  tunnel?:Tunnel=SshTunnel
}

export default Session;
