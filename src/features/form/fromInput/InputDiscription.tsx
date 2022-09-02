import {
  EditablePreview,
  useColorModeValue,
  Input,
  Editable,
  EditableInput,
} from '@chakra-ui/react';

export default function InputDiscription() {
  return (
    <Editable defaultValue="Add Discription" onBlur={() => console.log('f')}>
      <EditablePreview
        py={2}
        px={4}
        _hover={{
          background: useColorModeValue('gray.100', 'gray.700'),
        }}
      />
      <Input
        py={2}
        px={4}
        onFocus={() => console.log('t')}
        as={EditableInput}
      />
    </Editable>
  );
}
