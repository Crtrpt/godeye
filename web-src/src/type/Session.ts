import ConnectStatus from "./ConnectStatus";
import DriverType from "./driver";
import Tunnel from "./Tunnel";
import SshTunnel from "./tunnel/SshTunnel";

class Session<T> {
  constructor(
    id:string="",
    name: string="",
    icon:string="",
    type: DriverType.MYSQL=DriverType.MYSQL,
    connect_status: ConnectStatus.Normal=ConnectStatus.Normal,
    expand:boolean=false,
    payload:T|undefined=undefined,
    tunnel:Tunnel=SshTunnel,
    config:Map<String,any>=new Map()
  ) {
    this.id=id;
    this.name = name;
    this.type = type;
    this.expand=expand;
    this.connect_status = connect_status;
    this.icon=icon;
    this.payload=payload;
    this.tunnel=tunnel;
    this.config=config;
  }
  id:string
  name: string;
  type: DriverType;
  connect_status: ConnectStatus;
  expand:boolean;
  icon:String;
  payload?:T|undefined;
  tunnel?:Tunnel=SshTunnel;
  config?:Map<String,any>;
}

export default Session;
