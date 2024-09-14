import React,{useState} from "react";
import HeaderApp from "../components/general/HeaderApp";
import OpenChatFrame from "../components/openChat/OpenChatFrame";


function OpenChat() {

  const [path, setPath] = useState("/community/dgegb-daaaa-aaaar-arlhq-cai/channel/120184043128794550196718294327739585288");

  return (
    <div>
      <HeaderApp titulo="OpenChat" />
      <OpenChatFrame path={path} title={"Comundidad de OpenChat"}/>
    </div>
  );
}

export default OpenChat;
