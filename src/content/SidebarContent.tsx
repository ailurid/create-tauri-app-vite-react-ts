import { FunctionComponent, useState } from "react";
import { Container, Stack } from "@mantine/core";

import { File } from "../file/fileTypes";
import { FileDropzone } from "../file/FileDropzone";
import { FileList } from "../file/FileList";

export const SidebarContent: FunctionComponent = () => {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <Container>
      <Stack>
        <FileDropzone />
        <FileList files={files} />
      </Stack>
    </Container>
  );
};
