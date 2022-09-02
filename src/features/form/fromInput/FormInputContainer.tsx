import {
  EditablePreview,
  Box,
  useColorModeValue,
  Input,
  Editable,
  EditableInput,
  Stack,
} from '@chakra-ui/react';
import QuestionInput from './QuestionInput';
import InputDiscription from './InputDiscription';
import AnswerInputDisable from './AnswerInputDisable';
import FromInputAction from './FromInputAction';

export default function FormInputContainer() {
  return (
    <Stack
      rounded="md"
      shadow="md"
      p="4"
      borderWidth="1px"
      borderRadius="lg"
      mb={2}
    >
      <QuestionInput />
      <InputDiscription />
      <AnswerInputDisable />
      <FromInputAction />
    </Stack>
  );
}
