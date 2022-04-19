import { FunctionComponent } from "react";
import { Group, Text } from "@mantine/core";
import { Dropzone, PDF_MIME_TYPE } from "@mantine/dropzone";

export const dropzoneChildren = () => (
  <Group
    position="center"
    spacing="xl"
    style={{ minHeight: 100, pointerEvents: "none" }}
  >
    <div>
      <Text size="lg" inline>
        Drag documents here or click to select files
      </Text>
      <Text size="xs" color="dimmed" inline mt={7}>
        Attach as many files as you like, each file should not exceed 5mb
      </Text>
    </div>
  </Group>
);

export const FileDropzone: FunctionComponent = () => {
  return (
    <Dropzone
      onDrop={(files: any) => console.log("accepted files", files)}
      onReject={(files: any) => console.log("rejected files", files)}
      maxSize={5 * 1024 ** 2}
      accept={PDF_MIME_TYPE}
    >
      {() => dropzoneChildren()}
    </Dropzone>
  );
};
