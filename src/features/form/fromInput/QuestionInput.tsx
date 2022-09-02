import {
  EditablePreview,
  Box,
  useColorModeValue,
  Input,
  Editable,
  EditableInput,
} from '@chakra-ui/react';

function QuestionInput() {
  return (
    <Editable
      defaultValue="Short Question"
      onBlur={() => console.log('f')}
      sx={{ fontSize: 'xl', fontWeight: 'bold' }}
    >
      <EditablePreview
        py={2}
        px={4}
        _hover={{
          background: useColorModeValue('gray.100', 'gray.700'),
        }}
      />
      <Input
        sx={{ fontSize: 'xl', fontWeight: 'bold' }}
        py={2}
        px={4}
        onFocus={() => console.log('t')}
        as={EditableInput}
      />
    </Editable>
  );
}

export default QuestionInput;
