import { FunctionComponent } from "react";
import { Text, Center, Group, TextInput } from "@mantine/core";
import { useForm, formList } from "@mantine/form";
import { GripVertical } from "tabler-icons-react";

interface FileListProps {
  files: File[];
}

export const FileList: FunctionComponent<FileListProps> = ({ files }) => {
  const form = useForm({
    initialValues: { files },
  });

  const fields = form.values.files.map((_, index) => (
    <Group mt="xs" key={index}>
      <Center>
        <GripVertical size={18} />
      </Center>
      <TextInput
        placeholder="John Doe"
        // {...form.getListInputProps("files", index, "name")}
      />
      <TextInput
        placeholder="example@mail.com"
       // {...form.getListInputProps("files", index, "size")}
      />
    </Group>
  ));

  return (
    <Text size="lg" inline>
      Drag documents here or click to select files
    </Text>
  );
};
