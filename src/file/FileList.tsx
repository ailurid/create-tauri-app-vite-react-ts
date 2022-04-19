import { FunctionComponent } from "react";
import { Text } from "@mantine/core";
import { useForm, formList } from "@mantine/form";
import { GripVertical } from "tabler-icons-react";

import { File } from "./fileTypes";

interface FileListProps {
  files: File[];
}

export const FileList: FunctionComponent<FileListProps> = () => {
  const form = useForm({
    initialValues: {
      employees: formList([
        { name: "John Doe", email: "john@mantine.dev" },
        { name: "Bill Love", email: "bill@mantine.dev" },
        { name: "Nancy Eagle", email: "nanacy@mantine.dev" },
        { name: "Lim Notch", email: "lim@mantine.dev" },
        { name: "Susan Seven", email: "susan@mantine.dev" },
      ]),
    },
  });

  return (
    <Text size="lg" inline>
      Drag documents here or click to select files
    </Text>
  );
};
