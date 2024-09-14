import React,{useState} from "react";
import HeaderApp from "../components/general/HeaderApp";
import OpenChatFrame from "../components/openChat/OpenChatFrame";


function OpenChat() {

  const [path, setPath] = useState("");

  return (
    <div>
      <HeaderApp titulo="OpenChat" />
      <OpenChatFrame path={path} title={""}/>
    </div>
  );
}

export default OpenChat;
