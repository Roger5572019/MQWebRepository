import { useEffect, useRef, useState } from "react";
import { initialise } from "@open-ic/openchat-xframe";
import "../../styles/open-chat.css"

function initialiseOpenChatFrame(path, iframe) {
  return initialise(iframe, {
    targetOrigin: "https://oc.app",
    path: path
  });
}

function OpenChatFrame({ path, title }) {
  const iframe = useRef(null);
  const [client, setClient] = useState(undefined);

  useEffect(() => {
    if (iframe.current) {
      if (client === undefined) {
        setClient(initialiseOpenChatFrame(path, iframe.current));
      } else {
        client.then((c) => c.changePath(path));
      }
    }
  }, [client, path]);

  return (
    <div className="chat-frame">
      <div className="chat-header">
        <h3>{title}</h3>
      </div>
      <iframe ref={iframe} title="OpenChat" frameBorder="0" />
    </div>
  );
}

export default OpenChatFrame;