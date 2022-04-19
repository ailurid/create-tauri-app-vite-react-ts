import { useState } from "react";
import { Splitter, SplitterPanel } from "primereact/splitter";
import { Button } from "primereact/button";
import { Message, MessageSeverityType } from "primereact/message";
import { FileUpload } from "primereact/fileUpload";
import { Divider } from "primereact/divider";

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState<{
    severity: MessageSeverityType;
    text: string;
  } | null>(null);

  const onSelect = () => {
    setMessage({
      severity: "info",
      text: "selected!",
    });
  };

  const onUpload = () => {
    setMessage({
      severity: "success",
      text: "uploaded!",
    });
  };

  return (
    <>
      <Splitter className="flex align-items-stretch">
        <SplitterPanel className="flex align-items-center justify-content-center">
          {message && (
            <Message severity={message.severity} text={message.text} />
          )}
          <Divider />
          <FileUpload
            name="demo[]"
            url="https://primefaces.org/primereact/showcase/upload.php"
            onSelect={onSelect}
            onUpload={onUpload}
            multiple
            accept="application/pdf"
            maxFileSize={100000}
            emptyTemplate={
              <p className="m-0">Drag and drop files to here to upload.</p>
            }
          />
        </SplitterPanel>
        <SplitterPanel className="flex align-items-center justify-content-center">
          <Button
            label={`count is ${count}`}
            onClick={() => setCount((count) => count + 1)}
          />
        </SplitterPanel>
      </Splitter>
    </>
  );
}

export default App;
