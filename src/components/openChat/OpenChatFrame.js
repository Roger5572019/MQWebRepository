import { useEffect, useRef, useState } from "react";
import { initialise } from "@open-ic/openchat-xframe";


function initialiseOpenChatFrame(path, iframe) {
  return initialise(iframe, {
    targetOrigin: "https://oc.app",
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
  }, []);

  return (
    <div className="chat">
      <div className="header">
        <h3>{title}</h3>
      </div>

      <iframe ref={iframe} title="OpenChat" frameBorder="0" />
    </div>
  );
}

export default OpenChatFrame;
